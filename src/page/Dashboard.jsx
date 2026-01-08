import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/core/Dashboard/Sidebar';
import Footer from '../components/core/HomePage/Footer';

const Dashboard = () => {
    
    const {loading:authLoading} = useSelector((state) => state.auth);
    const {loading:profileLoading} = useSelector((state) => state.profile);

    if (authLoading || profileLoading) {
        return (
            <div className='mt-10'> Loading... </div>
        )
    }

  return (
     <div className='flex flex-col'>
        
        <div className='relative flex min-h-[calc(100vh-3.5rem)] bg-richblack-600 text-white'>
        <Sidebar />
        <div className='h-[calc(100vh-3.5rem)] flex-1 overflow-auto '>
            <div className='mx-auto w-11/12 max-w-[1000px] py-10'>
               <Outlet />

            </div>

        </div>
         
      
    </div>
     <div className=''>
        <Footer />
     </div>

     </div>
  )
}

export default Dashboard
