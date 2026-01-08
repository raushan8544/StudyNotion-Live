import React from 'react'
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timeLineImage from '../../../assets/Images/TimelineImage.png'

const TimelineSection = () => {


  const timeLineData = [
    {
      Logo: Logo1,
      heading: "Leadership",
      Description: "Fully committed to the success company",
    },

    {
      Logo: Logo2,
      heading: "Responsibility",
      Description: "Students will always be our top priority",
    },

    {
      Logo: Logo3,
      heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },

    {
      Logo: Logo4,
      heading: "Solve the problem",
      Description: "Code your way to a solution",
    }
  ]
  return (
    <div>
        
        <div className='flex flex-row gap-15 items-center'>

            <div className='w-[45%] flex flex-col gap-5'>

              {
                timeLineData.map((element, index)=>{
                  return (
                    <div key={index} className='flex flex-row gap-6'>

                      <div className='w-[50px] h-[50px] bg-white flex items-center '>
                        <img src={element.Logo} alt="" />

                       </div>

                        <div>
                          <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                          <p className='text-base'>{element.Description}</p>
                        </div>

                    </div>
                  )
                })
              }

            </div>

               <div className='relative shadow-blue-200 '>

                <img src={timeLineImage} alt="timeLineImage"  className='shadow-[_0_0_12px_12px] shadow-black object-cover h-fit'/>

                <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-8
                left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md shadow-lg shadow-caribbeangreen-300'> 
                    <div className='flex flex-row gap-5 items-center border-r  px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-sm text-caribbeangreen-300'>YEARS   EXPERIENCES</p>

                    </div>
                    

                    <div className='flex  gap-5 items-center px-7'>
                        <p className='text-3xl font-bold'>250+</p>
                        <p className='text-sm text-caribbeangreen-300'>TYPES OF COURSES</p>
                    </div>

                </div>

               </div>

        </div>
      
    </div>
  )
}

export default TimelineSection
