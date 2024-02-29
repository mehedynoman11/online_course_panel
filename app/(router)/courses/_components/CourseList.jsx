import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CourseItem from './CourseItem'

function CourselIST() {

  const [courseList, setCourseList] = useState([])
  useEffect(() => {
    getAllCourses();
  }, [])
  const getAllCourses = () => {
    // Corrected method name: getAllCourseList
    GlobalApi.getAllCourseList().then(resp => {
      setCourseList(resp?.assets)
    })
  }
  return (
    <div className='p-4 bg-slate-100 mt-5'>
      {/* title */}
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-medium'>Posts List</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

      </div>
      <div>
        {courseList.map((item, index)=>(
          <div>
            <CourseItem course={item}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourselIST