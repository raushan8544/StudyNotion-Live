import React from 'react'
import { TiMessages, } from "react-icons/ti";
import { BiWorld } from "react-icons/bi";
import { IoCallOutline ,IoCall } from "react-icons/io5";

import ContactUsForm from '../components/ContactPage/ContactUsForm';
import Footer from '../components/core/HomePage/Footer';

const Contact = () => {
  return (
     <div className='flex flex-col  max-auto '>   

      <div className='flex mx-auto w-11/12 mt-20 max-w-maxContent justify-between gap-10 text-white '>
         <div className='w-[40%]'> 
           
           <div className='flex flex-col text-white gap-6 bg-richblack-800 rounded-xl p-4 lg:p-6'>
              <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-200'>
                <div className='flex items-center gap-3'>
                <TiMessages    stroke="currentColor" viewBox="0 5 30 24" size={25} className='text-richblack-500 mt-3'/>
                <p className='text-lg font-semibold text-richblack-5'> 
                    Chat on us</p>
                </div>

                <p className='font-medium'>Our friendly team is here to help.</p>
                <p className='font-semibold'>info@studynotion.com</p>
             </div>

              <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-200'>
                <div className='flex items-center gap-3'>
                <BiWorld viewBox="0 5 30 24" size={25} className='text-richblack-500 mt-3'/>
                <p className='text-lg font-semibold text-richblack-5'> 
                    Visit us</p>
                </div>

                <p className='font-medium'> 
                    Come and say hello at our office HQ.
                </p>
                <p className='font-semibold'> 
                    Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                </p>
             </div>

               <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-200'>
                <div className='flex items-center gap-3'>
                 <IoCall viewBox="0 5 512 512"  size={25} className='text-richblack-500 mt-3'/>

                 <p className='text-lg font-semibold text-richblack-5'> 
                    Call us</p>
                </div>

                <p className='font-medium'>Mon - Fri From 8am to 5pm</p>
                <p className='font-semibold'>+91 6366 000 666</p>
             </div>

        </div>

         </div>

         <div className='w-[48%] bg-richblack-800 rounded-xl p-8 text-white '>

            <div className='flex flex-col gap-3 mb-8'>
                <h1 className='text-[35px] font-bold'>Got a Idea? We've got the skills. Let's team up</h1>
                <p className=''>Tell us more about yourself and what you're got in mind.</p>
            </div>
            <ContactUsForm />

         </div>
    </div>

        <div className='relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
        <h1 className='text-white text-center text-4xl font-semibold mt-8'>Reviews from other leraners</h1>
        </div>

        <Footer />

     </div>
  )
}

export default Contact
