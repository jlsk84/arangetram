import React from "react";
import {Link} from 'react-router-dom';
function Brochure4() {
    return (
        <div className="Brochure4">
            <p class="h5 JJ-font">Brochure :: Page <Link to="/Brochure1" class="JJ-font-white">1</Link> | <Link to="/Brochure2" class="JJ-font-white">2</Link> | <Link to="/Brochure3" class="JJ-font-white">3</Link> | 4 | <Link to="/Brochure5" class="JJ-font-white">5</Link> | <Link to="/Brochure6" class="JJ-font-white">6</Link></p>
            <center>
            <img src="4.png" class="d-block w-100 Img-sizer border border-dark rounded" alt="Page 4"/>
            </center>
        </div>
    );
}
export default Brochure4;