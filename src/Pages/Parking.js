import React from "react";
import { Link } from "react-router-dom";
function Parking() {
    return (
        <div className="Parking">
            <p class="h4 JJ-font">Parking Pass</p>
            <p class="h5 JJ-font">Please <Link to="/P3_Parking_Placard.pdf" class="JJ-font-white">download</Link> below image and print the parking pass or show the parking pass below at the P3 parking entrance</p>
            <img src="Placard.png" class="Img-sizer border border-dark rounded" alt="P3 parking pass"></img>
        </div>
    );
}
export default Parking;