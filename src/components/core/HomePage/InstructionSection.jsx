import React from 'react'
import HighlightText from './HighlightText'
import instructionImage from '../../../assets/Images/Instructor.png'
import CTAButton from './Button'
import { FaArrowRight } from 'react-icons/fa'

const InstructionSection = () => {
  return (
    <div className='mt-14 w-11/12 mx-auto '>
         <div className='flex flex-row gap-20 items-center'>

            <div className='w-[50%]  '>
                <img src={instructionImage} alt="Instruction_Image" className='w-[90%] ml-8 shadow-[_0_0_12px_12px] shadow-white-2'  />


            </div>

            <div className='w-[50%] flex flex-col  gap-10'>
                 
                 <div className='text-4xl font-semibold w-[50%]'>
                     Become an 
                    <HighlightText text={"Instructor"}/>
                 </div>
                 
                 <p className='text-sm text-richblack-300 w-[80%]'>
                    Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                 </p>

                     
                    <div className='w-fit'>
                        <CTAButton active={true} linkto={"/signup"}>
                             
                             <div className='flex flex-row items-center gap-2'>
                                Start Teaching Today

                                <FaArrowRight />
                             </div>

                         </CTAButton>
                    </div>
                      

            </div>

         </div>
    </div>
  )
}

export default InstructionSection
