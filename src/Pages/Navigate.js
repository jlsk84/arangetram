import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navigate() {
  return (
    <div>
      <center>
      <table>
        <tr>
          <td><Link to="/">Home</Link></td>
          <td> | </td>
          <td><Link to="/Brochure">Brochure</Link></td>
          <td> | </td>
          <td><Link to="/P3_Parking_Placard.pdf">Parking Placard(Right click and Select "Save link as..")</Link></td>
        </tr>
      </table>
      </center>
      <Outlet />
    </div>
  );
}
export default Navigate;