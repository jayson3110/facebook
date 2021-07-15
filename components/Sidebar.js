import React from 'react'
import {useSession} from 'next-auth/client';
import {ChevronDownIcon, ShoppingBagIcon,UserGroupIcon} from '@heroicons/react/outline';
import {CalendarIcon, ClockIcon, Desktop, DesktopComputerIcon,UsersIcon} from "@heroicons/react/solid"
import SidebarRow from "./SidebarRow";

export default function Sidebar() {
	const [session, loading] = useSession()
	return (
		<div className="p2 mt-5 max-w-600 xl: min-w-300">

		    <SidebarRow src={session.user.image} title={session.user.name} /> 

		    <SidebarRow Icon={UsersIcon} title="Friends"/> 
			<SidebarRow Icon={UserGroupIcon} title="Groups"/> 
			<SidebarRow Icon={ShoppingBagIcon} title="Market Place"/> 
			<SidebarRow Icon={DesktopComputerIcon} title="Watch"/> 
			<SidebarRow Icon={CalendarIcon} title="Events"/> 
			<SidebarRow Icon={ClockIcon} title="Memories"/> 
			<SidebarRow Icon={ChevronDownIcon} title="See More"/> 



		</div>
	)
}