import "./login.css";
import { db } from "../../firebase-config";
import { auth } from "../../firebase-config";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import{onAuthStateChanged,CurrentUser,signOut,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const Login =()=>{

    const [loginId,setLoginId] =useState("");
    const[loginPass,setLoginPass]=useState("");
    const[user,setUser]=useState("");
    const navigate=useNavigate();

    

    const login= async (e)=>{
        e.preventDefault();
    if(!loginId ){toast.error("Please Enter Login Id !!")}
    else if (!loginPass){toast.error("Please Enter Password !!")}
    else{
        try{
            const userlogin= await signInWithEmailAndPassword(
                auth,loginId,loginPass
            );
           
            navigate('workorder');
            toast.success("LoggedIn Sucessfully !!");
        
        }catch(error){
            toast.error(error.message);
        }
        
    }
    };
    


return(



<div>
    <h1>Login Page</h1>
     
    <Toaster/>
    <form>
        <div className="loginformdiv">
        <label>User ID</label>
        <input placeholder="Enter User Id" onChange={(event)=>{setLoginId(event.target.value);}}></input>
        <label>Password</label>
        <input type="password" placeholder="Enter Password" onChange={(event)=>{setLoginPass(event.target.value);}}></input>
        <button className="submitbtn" onClick={login} >LOGIN</button>
        </div>
    </form>
    
</div>
)


    
    
}