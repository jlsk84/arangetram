import React from "react";
import {Link} from 'react-router-dom';
function Brochure3() {
    return (
        <div className="Brochure3">
            <p class="h5 JJ-font">Brochure :: Page <Link to="/Brochure1" class="JJ-font-white">1</Link> | <Link to="/Brochure2" class="JJ-font-white">2</Link> | 3 | <Link to="/Brochure4" class="JJ-font-white">4</Link> | <Link to="/Brochure5" class="JJ-font-white">5</Link> | <Link to="/Brochure6" class="JJ-font-white">6</Link></p>
            <center>
            <img src="3.png" class="d-block w-100 Img-sizer border border-dark rounded" alt="Page 3"/>
            </center>
        </div>
    );
}
export default Brochure3;