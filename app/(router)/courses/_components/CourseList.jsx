import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import CourseItem from './CourseItem';
import Link from 'next/link';
function CourseList() {

  const course = [
    {
      id:1,
      name:'Linear Algebra Course',
      chapters:'16',
      imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMx1yt_Rso-w9a6kQXhOAYPRI8rliKzWuROA&s',
      redirect: "LinearAlgebra",
    },
    {
      id:2,
      name:'Real Analysis Course',
      chapters:'26',
      imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9z0LqkEI-dg0c7hwWabMsw91fOQZGFbVzg&s',
      redirect: "RealAnalysis",
    },
    {
      id:3,
      name:'Calculus Course',
      chapters:'11',
      imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQMCGTs84eeQh9OQtWGz8CIv23Thee10H2g&s',
      redirect: "Calculus",
    },
    {
      id:4,
      name:'Point Set Topology Course',
      chapters:'19',
      imageurl:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQgBTqd_24nYJwcMRgjE4rKSQSg_EyfCehEjFf5S55j66Xq_j85NYPSZw8zxqXzOvPLG5f5eTZOZcr75Ft_ST1jzKR4TuPgh9LwP4Q_stYFv9XqPMTgXWwVAsmEPFq40zfIKO7H5N5x_WBTGap6-_Y5oszXtb0LpWt6AIkbu0T9aTtQrtyWD_JDATFbGY/s400/Screenshot%202023-12-12%20024120.png',
      redirect: "PointSetTopology",
    },
  ]

  return (
    <div className='p-5 bg-white rounded-lg mt-3'>
        <div className='flex items-center justify-between'>
          <h2 className='text-[20px] font-bold text-primary'>All Courses</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">All</SelectItem>
              <SelectItem value="dark">Paid</SelectItem>
              <SelectItem value="system">Free</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {course.map((item,index)=>(
              <Link href={`/course-preview/${item.redirect}`}>
              <div key={index}>
                  <CourseItem course={item} />
              </div>
              </Link>
          ))
        }
        </div>
    </div>
  )
}

export default CourseList