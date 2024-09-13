import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navigate() {
  return (
    <div>
      <center>
      <table>
        <tr>
          <td class="h4 JJ-font"><Link to="/" class="JJ-font-white">Home</Link> | <Link to="/Brochure1" class="JJ-font-white">Brochure</Link> | <Link to="/Entrance" class="JJ-font-white">How to Enter</Link> | <Link to="/Parking" class="JJ-font-white">Parking Pass</Link></td>
        </tr>
      </table>
      </center>
      <Outlet />
    </div>
  );
}
export default Navigate;