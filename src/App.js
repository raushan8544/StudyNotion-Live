import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./page/Home"
import Navebar from "./components/common/Navbar"
import OpenRoute from  "./components/core/Auth/OpenRoute"

import Login from "./page/Login"
import Signup from "./page/Signup"
import ForgotPassword from "./page/ForgotPassword";
import UpdatePassword from "./page/UpdatePassword";
import VerifyEmail from "./page/VerifyEmail";
import About from "./page/About";
import Contact from "./page/Contact";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./page/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./page/Error";

function App() {
  return (
     <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-in font-inter">
      <Navebar/>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route
                  path="signup"
                  element={
                    <OpenRoute>
                      <Signup />
                    </OpenRoute>
                  }
                />
            <Route
                  path="login"
                  element={
                    <OpenRoute>
                      <Login />
                    </OpenRoute>
                  }
                />

                <Route
                  path="forgot-password"
                  element={
                    <OpenRoute>
                      <ForgotPassword />
                    </OpenRoute>
                  }
                />

                <Route
                  path="update-password/:id"
                  element={
                    <OpenRoute>
                      <UpdatePassword />
                    </OpenRoute>
                  }
                />

                <Route
                  path="verify-email"
                  element={
                    <OpenRoute>
                       <VerifyEmail />
                    </OpenRoute>
                  }
                />

                  <Route
                  path="about"
                  element={
                     
                      <About />
                    
                  }
                />

                 

                <Route path="contact" element = {<Contact />} />

                <Route   element={ 
                  
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                } >
                  <Route path="dashboard/my-profile" element={<MyProfile />} />
                </Route>

                  <Route path="*" element={<Error />} />
                
      </Routes>
     </div>
  );
}

export default App;
