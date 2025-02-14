import React, { useState } from 'react';
import { FaHome, FaUserMd, FaTable, FaBars }from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { BsTable } from "react-icons/bs";
import { BiMessageMinus } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { NavLink } from 'react-router-dom';


const Dashboard = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/travellerlist",
            name:"Traveller List",
            icon:<FaTable/>
        },
        {
            path:"/travellerregister",
            name:"Traveller Register",
            icon:<FaUserMd/>
        },
        {
            path:"/bookingtable",
            name:"Booking List",
            icon:<BsTable/>
        },
        {
            path:"/bookingregister",
            name:"Booking Register",
            icon:<MdPeople/>
        },
        {
            path:"/message",
            name:"Feed Back",
            icon:<BiMessageMinus/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FiSettings/>
        }
    ]
    return (
        <div>
           <div style={{width: isOpen ? "150px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><b>Explore</b></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main marginLeft="0" padding="0">{children}</main>
        </div>
    );
};

export default Dashboard;