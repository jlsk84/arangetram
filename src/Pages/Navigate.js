import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navigate() {
  return (
    <div>
      <center>
      <table>
        <tr>
          <td class="h4 JJ-font"><Link to="/">Home</Link> | <Link to="/Brochure1">Brochure</Link> | <Link to="/P3_Parking_Placard.pdf">Parking Placard(Right click and Select "Save link as..")</Link></td>
        </tr>
      </table>
      </center>
      <Outlet />
    </div>
  );
}
export default Navigate;