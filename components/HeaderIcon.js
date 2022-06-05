import React from 'react';

export const HeaderIcon = ({Icon, active}) => {
    return (
        <div className={`flex items-center rounded-xl cursor-pointer h-8 w-8 lg:h-14 lg:w-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group`}>
            <Icon className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${active && 'text-blue-500'}`}/>
        </div>
    );
};
