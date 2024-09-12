import React from "react";
import {Link} from 'react-router-dom';
function Brochure3() {
    return (
        <div className="Brochure3">
            <p class="h5 JJ-font">Brochure :: Page <Link to="/Brochure1">1</Link> | <Link to="/Brochure2">2</Link> | 3 | <Link to="/Brochure4">4</Link> | <Link to="/Brochure5">5</Link> | <Link to="/Brochure6">6</Link></p>
            <center>
            <img src="3.png" class="d-block w-100 Img-sizer" alt="Page 3"/>
            </center>
        </div>
    );
}
export default Brochure3;