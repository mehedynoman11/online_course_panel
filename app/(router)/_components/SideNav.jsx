import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {
    const menu = [
        {
            id: 1,
            name: 'All Courses',
            icon: <BookOpen />
        },
        {
            id: 2,
            name: 'Membership',
            icon: <BadgeIcon />
        },
        {
            id: 3,
            name: 'Be Instructor',
            icon: <GraduationCap />
        },
    ]
    return (
        <div className='p-5 bg-gray-100 shadow-sm border h-screen'>
            <Image src={'/noman.png'} alt='logo' width={170} height={70} />
            {/* menu */}
            <hr className='mt-5'></hr>
            <div className='mt-8'>
                {menu.map((item, index) => (
                    <div
                        className='flex gap-3 mt-1 p-3 text-xl items-center text-gray-500 cursor-pointer
                        bg-slate-200 hover:bg-blue-700 hover:text-white rounded-md ease-in-out transition-all duration-200 '
                        key={item.id}>
                        {item.icon}
                        <h1>{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNav
