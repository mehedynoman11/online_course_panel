import Image from 'next/image'
import React from 'react'

function CourseItem({ course }) {
    return (
        <div>
            <Image src={course?.url} 
            width={500} 
            height={200} 
            alt='img'/>
        </div>
    )
}

export default CourseItem