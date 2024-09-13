import React from "react";
import {Link} from 'react-router-dom';
function Brochure6() {
    return (
        <div className="Brochure6">
            <p class="h5 JJ-font">Brochure :: Page <Link to="/Brochure1" class="JJ-font-white">1</Link> | <Link to="/Brochure2" class="JJ-font-white">2</Link> | <Link to="/Brochure3" class="JJ-font-white">3</Link> | <Link to="/Brochure4" class="JJ-font-white">4</Link> | <Link to="/Brochure5" class="JJ-font-white">5</Link> | 6</p>
            <center>
            <img src="6.png" class="d-block w-100 Img-sizer border border-dark rounded" alt="Page 6"/>
            </center>
        </div>
    );
}
export default Brochure6;