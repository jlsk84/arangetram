import React from "react";
import {Link} from 'react-router-dom';
function Brochure5() {
    return (
        <div className="Brochure5">
            <p class="h5 JJ-font">Brochure :: Page <Link to="/Brochure1">1</Link> | <Link to="/Brochure2">2</Link> | <Link to="/Brochure3">3</Link> | <Link to="/Brochure4">4</Link> | 5 | <Link to="/Brochure6">6</Link></p>
            <center>
            <img src="5.png" class="d-block w-100 Img-sizer" alt="Page 5"/>
            </center>
        </div>
    );
}
export default Brochure5;