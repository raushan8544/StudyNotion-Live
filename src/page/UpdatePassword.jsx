import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { resetPassword } from '../services/operations/authAPI';
import { Link } from 'react-router-dom';


const UpdatePassword = () => {
    
    const dispatch = useDispatch();
    const location = useLocation();

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {loading} = useSelector((state) => state.auth);
    const {password, confirmPassword} = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // Dispatch action to update password
        const token = location.pathname.split("/").at(-1);
        dispatch(resetPassword( password, confirmPassword , token));
        

    }

  return (
    <div className='text-white flex flex-col items-center justify-center min-h-[80vh]'>

        {
            loading ? ( 
                <div> Loading... </div>
            ) :(
                <div className='w-11/12 max-w-[500px]'> 
                    <h1>Choose New Pasword</h1>
                    <p>Almost done. Enter your new password and youre all set.</p> 

                    <form onSubmit={handleOnSubmit}>
                        <label>
                            <p>New Password</p>
                            <input 
                                required
                                type={showPassword ? "text" : "password"}
                                name='password'
                                placeholder='Enter New Password'
                                value={password}
                                onChange={handleOnChange}
                            />  

                            <span onClick={() => setShowPassword((prev) => !prev)}>

                                {
                                    showPassword ? <FaRegEye fontSize={24}/> : <FaRegEyeSlash fontSize={24}/>
                                }
                            </span>  

                        
                        </label>

                         <label>
                            <p>ConfirmNew Password</p>
                            <input 
                                required
                                type={showConfirmPassword ? "text" : "password"}
                                name='confirmPassword'
                                placeholder='Enter New Confirm Password'
                                value={confirmPassword}
                                onChange={handleOnChange}
                            />  

                            <span onClick={() =>  setShowConfirmPassword((prev) => !prev)}>

                                {
                                     showConfirmPassword ? <FaRegEye fontSize={24}/> : <FaRegEyeSlash fontSize={24}/>
                                }
                            </span>  

                        
                        </label>
                        <button type='submit'>
                            Reset Password
                        </button>
                    </form>

                    <div> 
                        <Link to="/login">
                            Back to Login
                        </Link>
                     </div>
                </div>
            )
        }
      
    </div>
  )
}

export default UpdatePassword
