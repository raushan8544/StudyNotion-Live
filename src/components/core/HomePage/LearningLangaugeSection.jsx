import React from 'react'
import HighlightText from './HighlightText'
import knowYourProgress from '../../../assets/Images/Know_your_progress.png'
import compareWithOthers from '../../../assets/Images/Compare_with_others.png'
import planYourLesson from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from './Button'

const LearningLangaugeSection = () => {
  return (
    <div className='mt-[130px]   '> 

       <div className='flex flex-col gap-5  items-center'>

            <div className='text-richblack-900 text-center text-3xl font-semibold'>
                  Your swiss knife for
                  <HighlightText text="learning any language"/>
            
            </div>

            <div className=' text-center text-sm text-base font-medium text-richblack-900 mx-auto w-[70%]'>
              Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, 
              progress tracking, custom schedule and more.</div>

            <div className='relative ml-[3%] object-contain w-[75%] flex flex-row items-center justify-evenly   mt-5'>
               <img src={knowYourProgress} alt="know_Your_Progress"  className='w-[35%]'/>
               <img src={compareWithOthers} alt="compare_With_Others" className='w-[35%]'  />
               <img src={planYourLesson} alt="plan_You_Lesson" className='w-[35%]' />

            </div>

            <div className='w-fit mb-10  '>
                <CTAButton active={true} linkto={"/login"}>
                        Learn More
                </CTAButton>
            </div>

      </div>
        
           
           
      
    </div>
  )
}

export default LearningLangaugeSection
