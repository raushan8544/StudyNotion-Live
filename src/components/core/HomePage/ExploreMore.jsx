import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import HighlightText from './HighlightText';
import CourseCard from './CourseCard'


const tabName = [
        "Free",
        "New to coding",
        "Most popular",
        "Skills paths",
        "Career paths",
];

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCard = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }
     

  return (
    <div className=''>

         <div className='text-4xl font-semibold text-center mt-14'>
            Unlock the 
            <HighlightText text={"Power of Code"}/>

         </div>

            <p className='text-center text-[16px] text-sm mt-3 text-richblack-300'>
                Learn to build anything you can imagine
            </p>

            <div className='bg-richblack-800 flex flex-row gap-4 mb-3 mt-5 rounded-full border-richblack-100 px-1 py-1  '>
                 {
                    tabName.map((element, index) => {
                        return (
                            <div className={`text-[16px] flex flex-row items-center gap-2 
                              ${currentTab === element ? " bg-richblack-900 text-richblack-5 font-medium" : "text-richblack-300 "} rounded-full transition-all duration-200 cursor-pointer 
                               hover:bg-black hover:text-richblack-5 px-4 py-2 `} key={index} 
                                 onClick={()=> setMyCard(element)} >
                              {element} 


                            </div>
                        )
                    })
                 }
            </div>

            <div className='hidden lg:block lg:h-[200px]'></div>

             <div className='lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3'>
                {
                    courses.map((element, index) => {
                        return (
                            <CourseCard
                              key={index}
                              cardData={element}
                              currentCard={currentCard}
                              setCurrentCard={setCurrentCard}
                             />
                        )
                    })
                }
             </div>
        
      
    </div>
  )
}

export default ExploreMore
