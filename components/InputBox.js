import React, {useRef, useState} from 'react';
import Image from "next/image";
import {signOut, useSession} from "next-auth/react";
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/solid'
import {db, storage} from "../firebase";
import {collection, addDoc, setDoc, doc} from "firebase/firestore";
import {getStorage, getDownloadURL, ref, uploadString} from "firebase/storage";

import {serverTimestamp} from "firebase/firestore";

export const InputBox = () => {
    const {data: session} = useSession()
    const inputRef = useRef();
    let filePickerRef = useRef();
    const [imageToPost, setImageTopPost] = useState();

    const sendPost = e => {
        e.preventDefault()
        if (!inputRef?.current?.value) {
            return
        }

        addDoc(collection(db, 'posts'), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: serverTimestamp()
        }).then(document => {
            if (imageToPost) {
                const storageReference = ref(storage, `posts/${document.id}`);
                uploadString(storageReference, imageToPost, 'data_url')
                    .then(() => {
                        getDownloadURL(ref(storage, `posts/${document.id}`))
                            .then(postImageUrl => {
                                setDoc(
                                    doc(db, `posts`, document.id),
                                    {postImageUrl},
                                    {merge: true}
                                )
                            })
                    })
                removeImage()
                // uploadTask.on('state_change', null, console.error, () => {
                //
                // })
            }
        })
        inputRef.current.value = ''

    }

    const addImageToPost = (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])
        reader.onload = readerEvent => setImageTopPost(readerEvent.target.result)
    };

    const removeImage = () => setImageTopPost(null)

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image
                    onClick={signOut}
                    className='rounded-full'
                    src={session?.user?.image}
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <form className='flex flex-1'>
                    <input
                        ref={inputRef}
                        className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                        type="text"
                        placeholder={`What's on your mind, ${session?.user?.name}?`}
                    />
                    <button type='submit' hidden onClick={sendPost}>Submit</button>
                </form>
                {imageToPost && (
                    <div onClick={removeImage}
                         className='flex flex-col filter hover:brightness-110
                         transition duration-150 transform hover:scale-105 cursor-pointer'>
                        <img className='h-10 object-contain' src={imageToPost} alt=""/>
                        <p className='text-xs text-red-500 text-center'>Remove</p>
                    </div>
                )}
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div onClick={() => filePickerRef.current.click()} className='inputIcon'>
                    <CameraIcon className='h-7 text-green-300'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    <input ref={filePickerRef} type="file" hidden onChange={addImageToPost}/>
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
            </div>
        </div>
    );
};
