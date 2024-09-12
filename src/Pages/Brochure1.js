import React from "react";
import {Link} from 'react-router-dom';

function Brochure1() {
    return (
        <div className="Brochure1">
            <p class="h5 JJ-font">Brochure :: Page 1 | <Link to="/Brochure2">2</Link> | <Link to="/Brochure3">3</Link> | <Link to="/Brochure4">4</Link> | <Link to="/Brochure5">5</Link> | <Link to="/Brochure6">6</Link></p>
            <center>
            <img src="1.png" class="d-block w-100 Img-sizer" alt="Page 1"/>
            </center>
        </div>
    );
}
export default Brochure1;