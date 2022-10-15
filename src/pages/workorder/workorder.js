import { useState, useEffect } from "react";
import{Link} from "react-router-dom"
import { db } from "../../firebase-config";
import {collection, getDocs} from "firebase/firestore";
import './workorder.css';
import 'react-toastify/dist/ReactToastify.css';
import {  NavBar } from "../../components/navbar";
import { auth } from "../../firebase-config";
import {useAuthState} from "react-firebase-hooks/auth";




export const WorkOrder =()=>{

    const[user]=useAuthState(auth);
    const [workorders,setWorkOrders]=useState([]);
    const workorderCollectionRef= collection(db,"Work Order");

    useEffect(()=>{
        
        const getWorkOrders= async () => {
            const data = await getDocs (workorderCollectionRef);
            setWorkOrders(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
        }
        getWorkOrders()
    }, [])


    
    


    return(
    
    <div>
        {user &&(
        <>
        <NavBar />
        <div className="heading">
            <h1>Work Order</h1>
            <Link to={'/exportworkorder'}>
            <button className="exportWO">Export Work Order</button>
            </Link>
        </div>
    
    
    <div style={{ marginTop: "20px"}}>
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{ textAlign: "center"}}>Work Order No.</th>
                    <th style={{ textAlign: "center"}}>Tyre No.</th>
                    <th style={{ textAlign: "center"}}>Fleet Name</th>
                    <th style={{ textAlign: "center"}}>Pickup Site</th>
                    <th style={{ textAlign: "center"}}>Driver</th>
                    <th style={{ textAlign: "center"}}>Vehicle</th>
                    <th style={{ textAlign: "center"}}>Tyre Make</th>
                    <th style={{ textAlign: "center"}}>Tyre Size</th>
                    <th style={{ textAlign: "center"}}>Tyre Serial No.</th>
                    <th style={{ textAlign: "center"}}>Remarks</th>
                    <th style={{ textAlign: "center"}}>Status</th>
                    <th style={{ textAlign: "center"}}>Pickup Date-Time</th>
                    <th style={{ textAlign: "center"}}>Action</th>

                </tr>
            </thead>
            <tbody>
    {workorders.map((workorder) => {
        if(workorder.FleetName!== undefined){
       return(
             
        
        
        <tr key={workorder.TyreIdNumber}>
            <td>{workorder.WorkOrderNumber}</td>
            <td>{workorder.TyreIdNumber}</td>
            <td>{workorder.FleetName}</td>
            <td>{workorder.PickupSite}</td>
            <td>{workorder.Driver}</td>
            <td>{workorder.Vehicle}</td>
            <td>{workorder.TyreMake}</td>
            <td>{workorder.TyreSize}</td>
            <td>{workorder.TyreSerialNumber}</td>
            <td>{workorder.Remarks}</td>
            <td>{workorder.Status}</td>
            <td>{workorder.PickupDate +" "+ workorder.PickupTime}</td>
             <td>
                <Link to={`/updateworkorder/${workorder.TyreIdNumber+workorder.FleetName}`} state={{WorkOrder:workorder.WorkOrderNumber}} >
                <button className="btn">EDIT</button>
                </Link>

                


                </td> 
                

        
            
            

        </tr>
       )}
    })}
    </tbody>
        </table>
        
    </div>
    </>)}
    </div>
    )
};




