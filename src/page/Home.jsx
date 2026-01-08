import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
//import girl from "../assets/Images/reading girl.mp4"
import CodeBlock from '../components/core/HomePage/CodeBlock'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLangaugeSection from '../components/core/HomePage/LearningLangaugeSection'
import InstructionSection from '../components/core/HomePage/InstructionSection'
import Footer from '../components/core/HomePage/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'

const Home = () => {
  return (
    <div>
        
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between '>

        <Link to={"/signup"}>
          
          <div className='mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all
          duration-200 hover:scale-95 w-fit'>

             <div className='flex flex-row  items-center gap-2 rounded-full px-10 py-[5px] 
             transition-all duration-200  hover:bg-richblack-900 '>
                <p>Become the Instructor</p>
                <FaArrowRight/>
             </div>

          </div>
          
        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future with
            <HighlightText text={"Coding Skills"}/>
        </div>

        <div className='mt-4 w-[90%] text-center text-lg  text-richblack-300'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        <div className='flex flex-row gap-8 mt-10'>

          <CTAButton active={true} linkto={"/signup"}>
              
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
             Book a Demo
          </CTAButton>


        </div>

        <div className='mt-14 mx-20 my-5  shadow-[_0_0_12px_12px] shadow-white-2'>
          <video
            muted
            loop
            autoPlay>

              <source src={Banner} type='video/mp4'/>


          </video>
        </div>

        <div>

            <CodeBlock 
            position={"lg:flex-row"}
            heading={
              <div className='text-4xl font-semibold '>
                Unlock Your 
                <HighlightText text={"coding potential "} />
                with our online courses.
              </div>
            }
            subheading= {
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
             ctabtn1={
              {
                btnText: "Try it Yourself",
                linkto: "/signup",
                active: true
              }

            }
              ctabtn2={
                {
                  btnText: "Learn More",
                  linkto: "/login",
                  active: false
                }
  
              }

              codeblock={`<<!DOCTYPE html>>
                  <html>
                  <head><title>Example</title><linkrel="stylesheet"href="styles.css">
                  </head>
                  <body>
                  <h1><a href="/">Header</a></h1>`}

              codeColor={`text-yellow-200 flex flex-col font-mono font-bold  gap-2 pr-2 `}


            
            />
        </div>

        <div>

            <CodeBlock 
            position={"lg:flex-row-reverse"}
            heading={
              <div className='text-4xl font-semibold '>
                Start
                <HighlightText text={"coding in seconds "} />
                 
              </div>
            }
            subheading= {
              " Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
             ctabtn1={
              {
                btnText: "Continue Lesson",
                linkto: "/signup",
                active: true
              }

            }
              ctabtn2={
                {
                  btnText: "Learn More",
                  linkto: "/login",
                  active: false
                }
  
              }

              codeblock={`<<!DOCTYPE html>>
                    <html>
                     <head><title>Example</title><linkrel="stylesheet"href="styles.css">
                      </head>
                            <body>
                          <h1><a href="/">Header</a></h1>`}

                  codeColor={`text-pink-300 flex flex-col font-mono font-bold  gap-2 pr-2 `}


            
            />
        </div>

        <ExploreMore/>

       


      </div>
       

       <div className='bg-pure-greys-5 text-richblack-700'>

        <div className='homepage_bg h-[333px]'>

            <div className=' w-11/12 max-w-maxContent mx-auto flex flex-col justify-between items-center '>
                
                <div className='h-[150px]'></div>

                <div className='flex flex-row gap-7 text-white mt-10'>
                  <CTAButton active={true} linkto={"/signup"}>
                     <div className='flex gap-2 items-center'>
                      Explore Full Catalog
                       <FaArrowRight/>
                     </div>

                  </CTAButton>

                  <CTAButton active={false} linkto={"/login"}>
                    <div  >
                      Learn More
                    </div>
                  </CTAButton>
                </div>

            </div>
          
        </div>

        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

           <div className='flex flex-row gap-5 mb-10 mt-[95px] '>
                   <div className='text-3xl font-semibold w-[45%]'>Get the skills you need for a 
                       <HighlightText text={"Job that is in demand"}/>
                   </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>

                         <div className='text-richblack-700  text-lg font-semibold'>
                           The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                         </div>

                         <CTAButton active={true} linkto={"/signup"}>
                             <div >
                                Learn More
                             </div>

                         </CTAButton>

                    </div>
           </div>

             <TimelineSection/>


             <LearningLangaugeSection/>
                   

        </div>

       </div>

       <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white  '>
            
            <InstructionSection/>

            <h2 className='text-center text-2xl mt-10 mb-10'>REVIEWSLIDER</h2>
       </div>

         <Footer/>

    </div>
  )
}

export default Home
