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
import Openclosedset from './_components/_realAnalysis/Chapter9'
import MetricSpaces from './_components/_realAnalysis/Chapter10'
import Compactsets from './_components/_realAnalysis/Chapter11'
import CompactClosedsets from './_components/_realAnalysis/Chapter12'
import HeinBorelTheom from './_components/_realAnalysis/Chapter13'
import CantorSets from './_components/_realAnalysis/Chapter14'
import ConvergenceInRealAnalysis from './_components/_realAnalysis/Chapter15'
import SequentialCompactness from './_components/_realAnalysis/Chapter16'
import Completespaces from './_components/_realAnalysis/Chapter17'
import Extra from './_components/_realAnalysis/Extra'
import Series from './_components/_realAnalysis/Chapter18'
import AbsoluteConvergance from './_components/_realAnalysis/Chapter19'
import LimitsAndContinuity from './_components/_realAnalysis/Chapter20'
import ContinuousFunctions from './_components/_realAnalysis/Chapter21'
import UniformContinuityChapter from './_components/_realAnalysis/Chapter22'
import DiscontinuitiesChapter from './_components/_realAnalysis/Chapter23'
import DifferentiationChapter from './_components/_realAnalysis/Chapter24'
import TaylorsTheoremChapter from './_components/_realAnalysis/Chapter25'
import OrdinalsChapter from './_components/_realAnalysis/Chapter26'



import StartTopology from './_components/_Topology/Chapter1'
import BasesTopologies from './_components/_Topology/Chapter2'
import Closures from './_components/_Topology/Chapter3'
import Chapter4Countability from './_components/_Topology/Chapter4'
import SequencesChapter5 from './_components/_Topology/Chapter5'
import Continuity from './_components/_Topology/Chapter6'
import Chapter7Subspaces from './_components/_Topology/Chapter7'
import FiniteProducts from './_components/_Topology/Chapter8'
import StrongerSeparationAxioms from './_components/_Topology/Chapter9'
import OrdersAndOmega from './_components/_Topology/Chapter10'
import ZornsLemma from './_components/_Topology/Chapter11'
import MetricSpacesChapter from './_components/_Topology/Chapter12'
import UrysohnsLemma  from './_components/_Topology/Chapter13'
import TopologyChapter from './_components/_Topology/Chapter14'
import UrysohnMetrizationTheorem from './_components/_Topology/Chapter15'
import Compactness from './_components/_Topology/Chapter16'
import TychonoffTheorem from './_components/_Topology/Chapter17'
import Connectedness from './_components/_Topology/Chapter18'
import CompactificationsPage from './_components/_Topology/Chapter19'


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
        description: "This course simplifies complex topics in real analysis, set theory, and topology, making them easy to grasp. You'll explore the construction of numbers like Q, R, and C 🧮, dive into key properties, and understand essential concepts like induction 🧠, convergence 🔄, and continuity 🌱. Important theorems like compactness 🌍, Taylor's theorem 📏, and the Least Upper Bound property will be explained in a way that shows their real-world significance. You'll also learn about metric spaces, differentiation ✏️, and Cauchy sequences 🔍, all while developing the skills needed to approach advanced mathematical challenges. By the end of this course, you'll have a solid understanding of core mathematical principles that will boost your confidence in tackling more complex topics.",
        mediumUrl: "",
        chapter:["Introduction to the course","Construction of Q","Properties of Q","Construction of Reals","Least Upper Bound Property","Construction of Complex","Induction","Countability and Cardinality","Cantor Diagonalization and Metric Spaces","Open and Closed Sets in Metric Spaces","Limit Points","Compact Sets","Compactness and Related Theorems","Heine-Borel Theorem","Cantor Sets","Convergence  of a sequence","Sequential Compactness","Extra: Cuachy Sequences","Complete Spaces","Series","Absolute Convergence","Limits and Continuity","Continuous Functions","Uniform Continuity", "Discontinuities","Differentiation","Taylor Theorem","Ordinal Numbers & Transfinite Induction"],
      }
    } else if (lastSegment == 'Calculus') {
      courseInfo = {
        id:1,
        name:'Calculus 1 Course',
        chapters:'11',
        imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQMCGTs84eeQh9OQtWGz8CIv23Thee10H2g&s',
        description: "This chapter is designed for students who may find math challenging but are eager to understand the beauty of Calculus. Whether you're new to the subject or just need a fresh perspective, this chapter will guide you step-by-step through key concepts, making them easy to grasp and apply. You'll learn how to understand limits, derivatives, and integrals using simple language, clear visuals, and real-life examples. With each section, you'll build confidence and gain a deeper understanding of how Calculus explains the world around us. 📈💡 Don't let complex terms hold you back—read on, and watch your skills grow! 🌱",
        mediumUrl: "",
        chapter:["Introduction to the course","Chapter 1:","Chapter 3","Chapter 4","Chapter 5"],
      }
    } else if (lastSegment == 'PointSetTopology') {
      courseInfo = {
        id:1,
        name:'Point Set Topology Course',
        chapters:'19',
        imageurl:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQgBTqd_24nYJwcMRgjE4rKSQSg_EyfCehEjFf5S55j66Xq_j85NYPSZw8zxqXzOvPLG5f5eTZOZcr75Ft_ST1jzKR4TuPgh9LwP4Q_stYFv9XqPMTgXWwVAsmEPFq40zfIKO7H5N5x_WBTGap6-_Y5oszXtb0LpWt6AIkbu0T9aTtQrtyWD_JDATFbGY/s400/Screenshot%202023-12-12%20024120.png',
        description: "This course is your gateway to understanding key concepts in topology, focusing on one-point compactification and Stone-Čech compactification. Whether you're a student or an enthusiast, you'll learn how to transform non-compact spaces into compact ones, gaining a deep understanding of their behavior and function in a controlled, compact setting. 🧠 From visualizing the real line as a circle to exploring the intricate world of ultrafilters and continuous functions, this course breaks down complex topics with clarity. Perfect for anyone looking to sharpen their topology skills and explore advanced mathematical ideas—don’t miss out on this essential learning experience! 🌟",
        mediumUrl: "",
        chapter:[ "Introduction", "A Start", "Bases of topologies", "Closed sets and closures", "Countability", "Sequences, weak T-axioms, and first countability", "Continuity and homeomorphisms", "Subspaces", "Finite products", "Stronger separation axioms", "Orders and omega_1", "The Axiom of Choice and Zorn's Lemma", "Metric spaces and metrizability", "Urysohn's Lemma", "Arbitrary products", "The Urysohn Metrization Theorem", "Compactness", "Tychonoff's Theorem, and some properties related to compactness", "Connectedness", "Compactifications"],
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
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 9 && (<Openclosedset/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 10 && (<MetricSpaces/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 11 && (<Compactsets/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 12 && (<CompactClosedsets/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 13 && (<HeinBorelTheom/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 14 && (<CantorSets/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 15 && (<ConvergenceInRealAnalysis/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 16 && (<SequentialCompactness/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 17 && (<Extra/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 18 && (<Completespaces/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 19 && (<Series/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 20 && (<AbsoluteConvergance/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 21 && (<LimitsAndContinuity/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 22 && (<ContinuousFunctions/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 23 && (<UniformContinuityChapter/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 24 && (<DiscontinuitiesChapter/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 25 && (<DifferentiationChapter/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 26 && (<TaylorsTheoremChapter/>)}
       {lastSegment == 'RealAnalysis' && activeChapterIndex === 27 && (<OrdinalsChapter/>)}

       {lastSegment == 'PointSetTopology' && activeChapterIndex === 1 && (<StartTopology/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 2 && (<BasesTopologies/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 3 && (<Closures/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 4 && (<Chapter4Countability/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 5 && (<SequencesChapter5/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 6 && (<Continuity/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 7 && (<Chapter7Subspaces/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 8 && (<FiniteProducts/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 9 && (<StrongerSeparationAxioms/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 10 && (<OrdersAndOmega/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 11 && (<ZornsLemma/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 12 && (<MetricSpacesChapter/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 13 && (<UrysohnsLemma />)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 14 && (<TopologyChapter />)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 15 && (<UrysohnMetrizationTheorem/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 16 && (<Compactness/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 17 && (<TychonoffTheorem/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 18 && (<Connectedness/>)}
       {lastSegment == 'PointSetTopology' && activeChapterIndex === 19 && (<CompactificationsPage/>)}

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