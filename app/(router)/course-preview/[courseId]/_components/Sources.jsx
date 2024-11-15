import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React from 'react'

function Sources() {

    const pathname = usePathname();

    const lastSlashIndex = pathname.lastIndexOf('/');
    const lastSegment = pathname.substring(lastSlashIndex + 1);


    let optionsList;
    if (lastSegment == 'LinearAlgebra') {
        optionsList=[
            {
                id:1,
                name:'Extra',
                icon:'/open-source.png',
                url:'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'
            },
            {
                id:2,
                name:'Book',
                icon:'/web-design.png',
                url:'https://linear.axler.net/LADR4e.pdf'
            },
            {
                id:3,
                name:'Youtube',
                icon:'/youtube.png',
                url:'https://www.youtube.com/playlist?list=PLGAnmvB9m7zOBVCZBUUmSinFV0wEir2Vw'
            },
        ]
    } else if (lastSegment == 'RealAnalysis') {
        optionsList=[
            {
                id:1,
                name:'Notes',
                icon:'/open-source.png',
                url:'https://app.box.com/s/azhuul04awaihmims1vcff358a3nn0s0?sortColumn=name&sortDirection=ASC'
            },
            {
                id:2,
                name:'Book',
                icon:'/web-design.png',
                url:'https://homel.vsb.cz/~ulc0011/Abbott%20-%20Understanding%20Analysis.pdf'
            },
            {
                id:3,
                name:'Youtube',
                icon:'/youtube.png',
                url:'https://www.youtube.com/playlist?list=PL04BA7A9EB907EDAF'
            },
        ]
    } else if (lastSegment == 'Calculus') {
        optionsList=[
            {
                id:1,
                name:'Assesment',
                icon:'/open-source.png',
                url:'https://www.khanacademy.org/math/ap-calculus-ab'
            },
            {
                id:2,
                name:'Book',
                icon:'/web-design.png',
                url:'https://homel.vsb.cz/~ulc0011/Abbott%20-%20Understanding%20Analysis.pdf'
            },
            {
                id:3,
                name:'Youtube',
                icon:'/youtube.png',
                url:'https://www.youtube.com/playlist?list=PL0-GT3co4r2wlh6UHTUeQsrf3mlS2lk6x'
            },
        ]
    }

    
  return (
    <div className='flex items-center gap-3'>
        {optionsList.map((option,index) => (
            <div key={index}
            className='p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer bg-white mb-3'
            onClick={() => window.open(option.url, '_blank')}>
                <Image src={option.icon} width={30} height={30} alt='icons'/>
                <h2 className='text-[14px] text-gray-500'>{option.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default Sources