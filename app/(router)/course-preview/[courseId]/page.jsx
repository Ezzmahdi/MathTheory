"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseDescription from './_components/CourseDescription'
import CourseContentSection from './_components/CourseContentSection'
import WatchOnYoutube from './_components/WatchOnYoutube'
import Sources from './_components/Sources'

import ChapterOne from './_components/_linearalgebra/Chapter1'
import ChapterTwo from './_components/_linearalgebra/Chapter2'
import ChapterThree from './_components/_linearalgebra/Chapter3'
import ChapterFour from './_components/_linearalgebra/Chapter4'
import ChapterFive from './_components/_linearalgebra/Chapter5'
import ChapterSix from './_components/_linearalgebra/Chapter6'
import ChapterSeven from './_components/_linearalgebra/Chapter7'
import ChapterEight from './_components/_linearalgebra/Chapter8'
import ChapterNine from './_components/_linearalgebra/Chapter9'
import ChapterTen from './_components/_linearalgebra/Chapter10'
import ChapterEleven from './_components/_linearalgebra/Chapter11'
import ChapterTwelve from './_components/_linearalgebra/Chapter12'
import ChapterTherteen from './_components/_linearalgebra/Chapter13'
import ChapterFourteen from './_components/_linearalgebra/Chapter14'
import ChapterFifteen from './_components/_linearalgebra/Chapter15'
import ChapterSixteen from './_components/_linearalgebra/Chapter16'
import ConstructingRationalNumbers from './_components/_realAnalysis/Chapter1'
import RationalNumbersProperties from './_components/_realAnalysis/Chapter2'
import DedekindCutsChapter from './_components/_realAnalysis/Chapter3'
import ArchimedeanProperty from './_components/_realAnalysis/Chapter4'
import ComplexNums from './_components/_realAnalysis/Chapter5'
import Induction from './_components/_realAnalysis/Chapter6'
import Countability from './_components/_realAnalysis/Chapter7'
import CantorDiag from './_components/_realAnalysis/Chapter8'

function CoursePreview() {

    const pathname = usePathname();

    const lastSlashIndex = pathname.lastIndexOf('/');
    const lastSegment = pathname.substring(lastSlashIndex + 1);


    let courseInfo;
    if (lastSegment == 'LinearAlgebra') {
      courseInfo = {
        id:1,
        name:'Linear Algebra Course',
        chapters:'16',
        imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMx1yt_Rso-w9a6kQXhOAYPRI8rliKzWuROA&s',
        description: "🚀 **Course Description**: Unlock the power of vector mathematics in this comprehensive course designed to demystify cross products. Whether you’re a student, engineer, or just curious about how vectors work in the real world, this course will guide you step by step through 2D and 3D spaces. 🧑‍🏫 We’ll start with 2D geometry, using cross products to calculate areas and understand orientations, then advance to 3D, where you’ll learn to find perpendicular vectors and solve complex geometric problems. ✍️ With intuitive explanations, interactive visualizations, and hands-on exercises, you’ll master vector properties, the right-hand rule 🖐️, and determinants, while exploring real-world applications in physics, engineering, and computer graphics. By the end, you’ll be confident tackling advanced problems, no advanced math experience needed! Perfect for students, professionals, and anyone curious about space and motion. 🌟",
        mediumUrl: "",
        chapter:["Introduction to the course"," The Basics of Vectors"," Linear Combinations, and Span"," Linear Trans and Matrices"," Matrix Multiplication", 'Linear Transformations in 3D', 'Determinants','Systems and Transformations',' Transf. Between Dimensions',' Understanding Dot Products','The Cross Product','The Cross Product Demystified',"Cramer’s Rule","Basis Change","Eigenvectors and Eigenvalues","Eigenvalues, Eigenvectors, a quick trick","What Are Vectors?"],
      }
    } else if (lastSegment == 'RealAnalysis') {
      courseInfo = {
        id:1,
        name:'Real Analysis Course',
        chapters:'26',
        imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9z0LqkEI-dg0c7hwWabMsw91fOQZGFbVzg&s',
        description: "🚀 **Course Description**: Unlock the power of vector mathematics in this comprehensive course designed to demystify cross products. Whether you’re a student, engineer, or just curious about how vectors work in the real world, this course will guide you step by step through 2D and 3D spaces. 🧑‍🏫 We’ll start with 2D geometry, using cross products to calculate areas and understand orientations, then advance to 3D, where you’ll learn to find perpendicular vectors and solve complex geometric problems. ✍️ With intuitive explanations, interactive visualizations, and hands-on exercises, you’ll master vector properties, the right-hand rule 🖐️, and determinants, while exploring real-world applications in physics, engineering, and computer graphics. By the end, you’ll be confident tackling advanced problems, no advanced math experience needed! Perfect for students, professionals, and anyone curious about space and motion. 🌟",
        mediumUrl: "",
        chapter:["Introduction to the course","Construction of Q","Properties of Q","Construction of Reals","Least Upper Bound Property","Construction of Complex","Induction","Countability and Cardinality","Cantor Diagonalization and Metric Spaces","Open and Closed Sets in Metric Spaces","Limit Points","Compact Sets","Compactness and Related Theorems","Heine-Borel Theorem"],
      }
    } else if (lastSegment == 'Calculus') {
      courseInfo = {
        id:1,
        name:'Calculus 1 Course',
        chapters:'11',
        imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQMCGTs84eeQh9OQtWGz8CIv23Thee10H2g&s',
        description: "🚀 **Course Description**: Unlock the power of vector mathematics in this comprehensive course designed to demystify cross products. Whether you’re a student, engineer, or just curious about how vectors work in the real world, this course will guide you step by step through 2D and 3D spaces. 🧑‍🏫 We’ll start with 2D geometry, using cross products to calculate areas and understand orientations, then advance to 3D, where you’ll learn to find perpendicular vectors and solve complex geometric problems. ✍️ With intuitive explanations, interactive visualizations, and hands-on exercises, you’ll master vector properties, the right-hand rule 🖐️, and determinants, while exploring real-world applications in physics, engineering, and computer graphics. By the end, you’ll be confident tackling advanced problems, no advanced math experience needed! Perfect for students, professionals, and anyone curious about space and motion. 🌟",
        mediumUrl: "",
        chapter:["Introduction to the course","Chapter 1:","Chapter 3","Chapter 4","Chapter 5"],
      }
    }
    

    const [activeChapterIndex,setActiveChapterIndex]=useState(0);
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
       
       <div className='col-span-2 bg-white p-3'>
       {activeChapterIndex === 0 && (<CourseDescription courseInfo={courseInfo} />)}

       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 1 && (<ChapterOne/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 2 && (<ChapterTwo/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 3 && (<ChapterThree/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 4 && (<ChapterFour/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 5 && (<ChapterFive/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 6 && (<ChapterSix/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 7 && (<ChapterSeven/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 8 && (<ChapterEight/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 9 && (<ChapterNine/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 10 && (<ChapterTen/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 11 && (<ChapterEleven/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 12 && (<ChapterTwelve/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 13 && (<ChapterTherteen/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 14 && (<ChapterFourteen/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 15 && (<ChapterFifteen/>)}
       {lastSegment == 'LinearAlgebra' && activeChapterIndex === 16 && (<ChapterSixteen/>)}

       {lastSegment == 'RealAnalysis' && activeChapterIndex === 1 && (<ConstructingRationalNumbers/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 2 && (<RationalNumbersProperties/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 3 && (<DedekindCutsChapter/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 4 && (<ArchimedeanProperty/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 5 && (<ComplexNums/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 6 && (<Induction/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 7 && (<Countability/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 8 && (<CantorDiag/>)}










       </div>

       <div>
          <WatchOnYoutube courseInfo={courseInfo}/>
          <Sources/>
          <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={true} watchMode={true} setActiveChapterIndex={(index)=>setActiveChapterIndex(index)}/>
       </div>
    </div>
  )
}

export default CoursePreview