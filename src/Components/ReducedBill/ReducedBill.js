import React from "react";
import "./reducedbill.css"

const ReducedBill = () =>{
    return (
        <div className="reducedbill">
            <div className="rectangle-white"></div>
            <div className="rectangle-green"></div>

            <h4 className="save-header">Save Upto</h4>
            <p className="save-percent">30%</p>
            <p className="reduced-header"> If you carefully follow all the tips, Your monthly bill will be reduced to :</p>
            <p className="reduced-amount">Rs 10800</p>
            <p className="note">Note: Actual results may slighly vary from predicted ones.</p>

            {/* <div className="rectangle-green"></div>
            <div className="rectangle-white"></div> */}


        </div>
    );
}

export default ReducedBill;