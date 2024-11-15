import Image from 'next/image'
import React from 'react'

function CourseItem({course}) {
  return (
    <div className='border rounded-md hover:shadow-md hover:shadow-purple-300 cursor-pointer'>
        <Image src={course.imageurl} width={500} height={150} alt='banner' className='rounded-t-md h-[130px] object-cover'/>
        <div className='flex flex-col gap-1 p-2'>
            <h2 className='font-medium'>{course.name}</h2>
            <h2 className='text-[12px] text-gray-400'>Mahdi Ezz</h2>
            <div className='flex gap-2'>
                <Image src='/chapter.png' alt='chapter' width={20} height={20}/>
                <h2 className='text-[14px] text-gray-400'>{course.chapters} Chapters</h2>
            </div>
        </div>
    </div>
  )
}

export default CourseItem