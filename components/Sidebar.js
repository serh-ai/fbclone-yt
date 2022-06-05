import React from 'react';
import {useSession} from "next-auth/react";
import {SidebarRow} from "./SidebarRow";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from '@heroicons/react/outline'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from '@heroicons/react/solid'


export const Sidebar = () => {
    const {data: session} = useSession();

    const {image, name} = session?.user || {}

    return (
        <div className='p2 mt-5 max-w-[600px] xl:min-w-[300px]'>
            <SidebarRow src={image} title={name}/>
            <SidebarRow Icon={UsersIcon} title='Friends'/>
            <SidebarRow Icon={UserGroupIcon} title='Groups'/>
            <SidebarRow Icon={ShoppingBagIcon} title='MarketPlace'/>
            <SidebarRow Icon={DesktopComputerIcon} title='Watch'/>
            <SidebarRow Icon={CalendarIcon} title='Events'/>
            <SidebarRow Icon={ClockIcon} title='Memories'/>
            <SidebarRow Icon={ChevronDownIcon} title='See more'/>
        </div>
    );
};
