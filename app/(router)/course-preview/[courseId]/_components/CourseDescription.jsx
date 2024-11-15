import React from 'react'
import Markdown from 'react-markdown'
import Image from 'next/image';

function CourseDescription({courseInfo}) {
  return (
    <div>
        <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
        <h2 className='text-gray-500 text-[14px] mb-3'>Mahdi Ezzeddine</h2>
        <Image src={courseInfo.imageurl} width={1000} height={250} alt='banner' className='rounded-t-md object-cover' />

        <h2 className='mt-5 text-[17px] font-semibold'>
          <span>About This Course</span>
        </h2>
        
          <Markdown className='text-[18x] font-light mt-2 leading-7'>
            {courseInfo.description}
          </Markdown>
    </div>
  )
}

export default CourseDescription