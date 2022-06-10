import React from 'react';
import Image from "next/image";
import {ChatAltIcon, ShareIcon, ThumbUpIcon} from '@heroicons/react/outline'

export const Post = (props) => {
    const {name, message, email, timestamp, image, postImageUrl} = props
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2'>
                    <img className='rounded-full' src={image} width={40} height={40} alt=""/>
                    <div>
                        <p>{name}</p>
                        <p className="text-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div>
                </div>

                <p className='pt-4'>{message}</p>
            </div>
            {postImageUrl && (
                <div className='relative h-56 md:h-96'>
                    <Image src={postImageUrl} objectFit='cover' layout='fill'/>
                </div>
            )}
            {/*Footer*/}
            <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t overflow-hidden'>
                <div className='inputIcon rounded-none'>
                    <ThumbUpIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='inputIcon rounded-none '>
                    <ChatAltIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='inputIcon rounded-none '>
                    <ShareIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
            </div>
        </div>
    );
};
