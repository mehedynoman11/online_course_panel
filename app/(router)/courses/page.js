"use client"
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {/* left container */}
      <div className='col-span-2'>
        <WelcomeBanner />

        {/* courselist */}
        <CourseList />
      </div>
      {/* right container */}
      <div>
      Righjt
      </div>
    </div>
  )
}

export default Courses