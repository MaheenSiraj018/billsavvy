import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Tips from "../../Components/Tips/Tips";
import "./TipsandReducedBill.css";
import ReducedBill from "../../Components/ReducedBill/ReducedBill";

const TipsandReducedBill = () =>{
    return (
        <>
        <Sidebar/>
        <h1 className="contactheader font-weight-bold">Energy Conservations<span> Tips For You!</span></h1>

        {/* <div className="tips-content"> */}
        {/* <Tips/>
        <Tips/>
        <Tips/>
        <Tips/> */}
        {/* </div> */}
        <div className="tips-container">
      <Tips />
      <Tips />
      <Tips />
      <Tips />

      {/* Add more Tips components as needed */}
    </div>
        <ReducedBill/>
        
        {/* <Tips/> */}
        </>
    );
}
export default TipsandReducedBill;