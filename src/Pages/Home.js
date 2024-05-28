import React from "react";
import Dashboard from "../Components/Dashboard";
import Navbar from "../Components/Navbar";
import Chatgpt from "../Components/Matgpt";



  
let name = "Prashikesh"
export default function Home() {
  return (
    <>

      <div>{name}</div>
     

   
<div className="container">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder={name}></textarea>
</div>

      <Navbar Navbar="Anukesh" />

      <Dashboard />
      <Chatgpt />

    </>
  );
}


document.body.style.background = "yellow"