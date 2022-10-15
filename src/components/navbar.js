import logo from "../logo.png";
import{Link} from "react-router-dom"
import './navbar.css';
import { auth } from "../firebase-config";
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";


export const NavBar =()=>{

    const[user]=useAuthState(auth);
    const navigate=useNavigate();
    const logout = async () =>{
        await signOut(auth);
        navigate('/');
 };

 


return(
    <div className="navdiv">
        <h1 className="logoname">Maa Tyre Retreads</h1>
        <div className="tab">
        <Link to="/workorder" className="tabdiv" id="workordertab">Work Order</Link>
        <Link to="/trippanel" className="tabdiv" id="trippaneltab">Trip Panel</Link>
        {user &&(
            <>
            <button className="logoutbtn" onClick={logout}>LOGOUT</button>
            </>
        )}
        
        </div>
        
    </div>
);

}