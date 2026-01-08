import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice"
import cartSlice from "../slices/cartSlice";

const rootReeducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    cart: cartSlice,


})
export default rootReeducer;