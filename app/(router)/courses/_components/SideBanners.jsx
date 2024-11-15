import Image from 'next/image';
import React from 'react'

function SideBanners() {

  return (
    <div>
        <div className='m-2 p-3 bg-white rounded-xl'>
            <Image src="/myphoto.jpg" alt='banner'
            width={500}
            height={300}
            onClick={()=>window.open("https://www.linkedin.com/in/mahdi-ezzeddine-97919626b/")}
            className='rounded-xl cursor-pointer' />
        </div>
    </div>
  )
}

export default SideBanners