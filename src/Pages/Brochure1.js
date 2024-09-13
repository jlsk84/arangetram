import React from "react";
import {Link} from 'react-router-dom';

function Brochure1() {
    return (
        <div className="Brochure1">
            <p class="h5 JJ-font">Brochure :: Page 1 | <Link to="/Brochure2" class="JJ-font-white">2</Link> | <Link to="/Brochure3" class="JJ-font-white">3</Link> | <Link to="/Brochure4" class="JJ-font-white">4</Link> | <Link to="/Brochure5" class="JJ-font-white">5</Link> | <Link to="/Brochure6" class="JJ-font-white">6</Link></p>
            <center>
            <img src="1.png" class="d-block w-100 Img-sizer border border-dark rounded" alt="Page 1"/>
            </center>
        </div>
    );
}
export default Brochure1;