import { useEffect } from "react";
import { selectLoggedInUser, signOutAsync } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Logout(){
   const disptach =useDispatch();
   const user=useSelector(selectLoggedInUser)
   useEffect(()=>{

    disptach(signOutAsync())
})

    return <>{!user && <Navigate to="/login" replace={true}></Navigate>}</>;



}

export default Logout;