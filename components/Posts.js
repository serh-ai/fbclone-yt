import React from 'react';
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore";
import {collection, orderBy, query} from "firebase/firestore";
import {db} from "../firebase";
import {Post} from "./Post";

export const Posts = () => {
    const postsRef = collection(db, 'posts');
    const orderConstrain = orderBy('timestamp', 'desc');
    const postsQuery = query(postsRef, orderConstrain);
    const [posts, loading, error] = useCollection(postsQuery);



    if(!posts?.docs) return null
    return (
        <div>
            {posts?.docs?.map?.((post)=>{
                const props = post.data()
                return <Post
                    key={post.id}
                    {...props}
                />
            })}
        </div>
    );
};
