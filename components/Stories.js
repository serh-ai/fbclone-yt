import React from 'react';
import {StoryCard} from "./StoryCard";

const stories = [
    {
        name: "Sony Sangha",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jef Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    // {
    //     name: "Mark Zukerberge",
    //     src: "https://links.papareact.com/xql",
    //     profile: "https://links.papareact.com/snf",
    // },
    // {
    //     name: "Bill Gates",
    //     src: "https://links.papareact.com/4u4",
    //     profile: "https://links.papareact.com/zvy",
    // },
]

export const Stories = () => {
    return (
        <div className='flex gap-4 mx-auto'>
            {stories.map(story=>(<StoryCard key={story.src} {...story}/>))}
        </div>
    );
};
