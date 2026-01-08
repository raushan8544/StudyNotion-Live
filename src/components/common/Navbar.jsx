import React, { useEffect, useState } from 'react'
import { Link, useLocation, matchPath } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import {NavebarLinks} from '../../data/navbar-links'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux'
import ProfileDropDown  from '../core/Auth/ProfileDropDown';
import { categories} from "../../services/apis"
import { apiConnector } from "../../services/apiconnector"
import { MdArrowDropDownCircle } from "react-icons/md";

/*const subLinks = [
    {
        title: "python",
        link:"/catalog/python"
    },
    {
        title: "javascript",
        link:"/catalog/javascript"
    }
]*/

const Navbar = () => {
    const {token} = useSelector((state)=> state.auth);
    const {user} = useSelector((state)=> state.profile);
    const {totalItems} = useSelector((state)=> state.cart);

    const [subLinks, setSubLinks] = useState([]);

    const fetchSublinks = async() => {
            try {
                const result = await apiConnector("GET", categories.CATEGORIES_API);
                console.log("Categories fetched successfully", result);
                setSubLinks(result.data.data);


            }
            catch(error) {
                console.log("Error while fetching categories", error);
            }
        }

    useEffect(() => {
        fetchSublinks();
         

    }, []) 


    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname)
    }


  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblue-700'>
        <div className='flex w-11/12 max-w-maxContent justify-between items-center'>

           <Link to="/"> 
              <img src={logo} alt='' width={160} height={42} loading='lazy' />
               
           </Link>

             <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        NavebarLinks.map((link, index) => (
                             
                                <li key={index} >

                                    {
                                        link.title === "Catalog" ? (
                                        <div className='relative flex items-center gap-2 group cursor-pointer '> 
                                        <p>{link.title}</p>
                                         <MdArrowDropDownCircle /> 
                                         
                                         <div className='invisible absolute left-[50%] top-[50%] flex flex-col rounded-md p-4
                                          bg-richblack-5 text-richblack-900 opacity-0 transition-all duration-200 
                                          group-hover:visible group-hover:opacity-100 lg:w-[300px] translate-x-[-50%] translate-y-[20%] shadow-lg z-10 '>

                                               <div className='absolute left-[50%] top-0 h-6 w-6 bg-richblack-5
                                               translate-x-[80%] translate-y-[-40%] rounded rotate-45'></div>

                                           {
                                             subLinks.length ? ( subLinks.map((sublink, index) => (
                                                <Link to={sublink.link} key={index} className='px-4 py-2 hover:bg-richblack-100 '>
                                                    {sublink.name}
                                                </Link>
                                             ))
                                            ) : (<div> </div>)
                                           }
                                         </div>



                                        </div>) : (

                                            <Link to={link?.path}>
                                                <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                                     
                                                    {link?.title}
                                                </p>
                                                
                                                
                                                
                                            </Link>

                                        )
                                    }

                                </li>

                            
                        ))
                    }

                </ul>
             </nav>

             {/* Login/signUp/dashboard */}

              <div className='flex gap-x-4 items-center'>

                  {
                    user&& user?.accountType !== "Instructor" && (
                        <Link to="/dashboard/cart" className='relative text-richblack-25 text-xl  '>
                            <FaShoppingCart  />
                             {
                                totalItems > 0 && (
                                    <span className='absolute -top-2 -right-2 bg-yellow-25 text-richblack-900 font-semibold text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                                        {totalItems}
                                    </span>
                                )
                             }
                            
                        </Link>
                    )
                  }

                  {
                    token=== null && (
                        <Link to="/login" className='text-richblack-25  '>
                            <button className='bg-richblack-800 text-richblack-25 px-4 py-1 rounded-md border border-richblack-700 hover:bg-richblack-700 hover:text-richblack-5 transition-all duration-200 '>
                                Log in
                            </button>
                            
                        </Link>
                    )
                  }

                  {
                    token === null && (
                        <Link to="/signup" className='text-richblack-25  '>
                            <button className="bg-yellow-25 text-richblack-900 px-4 py-1 rounded-md border border-yellow-25 hover:bg-yellow-50 hover:text-richblack-900 transition-all duration-200 ">
                                Sign Up
                            </button>

                        </Link>
                    )
                  }

                  {
                     token !== null && <ProfileDropDown />

                    
                  }

              </div>

        </div>
        
      
    </div>
  )
}

export default Navbar
