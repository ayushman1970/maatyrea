import React,{useState} from "react";
import "./trippanel.css";
import { PickupRequestRegister } from "./pickuprequestregister";
import{Link} from "react-router-dom"
import { NavBar } from "../../components/navbar";
import { auth } from "../../firebase-config";
import {useAuthState} from "react-firebase-hooks/auth";






export const TripRegister =()=>{
    const[user]=useAuthState(auth);
    return(
        <div  >
             {user &&(
        <>
            <NavBar/>
        <div className="heading">

        <h1>Vehicle Trip Panel</h1>
         <Link to={'/generatetripreport'}>
        <button className="tripreportbtn">Generate Trip Report</button>
        </Link> 
        </div>
        <div className="PickupRequestRegister" >
            <PickupRequestRegister />
        </div>
        </>)}
        </div>

    );
    
};