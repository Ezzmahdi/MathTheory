import { Button } from '@/components/ui/button'
import { BookAIcon } from 'lucide-react'
import React from 'react'

function WatchOnYoutube({courseInfo}) {
  return (
    <div className='p-3 text-center rounded-sm bg-white mb-3'>
      <div className='flex flex-col gap-3 mt-3'>
        <h2 className='text-black font-light'>
            Read About This Course For Free on Medium<br></br>
           <span className='font-semibold'>Many blogs about this topic</span> 
        </h2>

        <Button className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white flex gap-2 items-center" onClick={()=>window.open(courseInfo.mediumUrl,'_blank')}> 
          <BookAIcon/> Read Now
        </Button>
      </div>
    </div>
  )
}

export default WatchOnYoutube