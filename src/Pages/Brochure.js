import React from "react";
function Brochure() {
    return (
        <div className="Brochure">
            <h1>Arangetram Brochure</h1>
            <center>
            <div id="carouselExampleAutoplaying" class="carousel slide Img-sizer" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="1.png" class="d-block w-100 Img-sizer" alt="Page 1"/>
              </div>
              <div class="carousel-item">
                <img src="2.png" class="d-block w-100 Img-sizer" alt="Page 2"/>
              </div>
              <div class="carousel-item">
                <img src="3.png" class="d-block w-100 Img-sizer" alt="Page 3"/>
              </div>
              <div class="carousel-item">
                <img src="4.png" class="d-block w-100 Img-sizer" alt="Page 4"/>
              </div>
              <div class="carousel-item">
                <img src="5.png" class="d-block w-100 Img-sizer" alt="Page 5"/>
              </div>
              <div class="carousel-item">
                <img src="6.png" class="d-block w-100 Img-sizer" alt="Page 6"/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            
          </div>
          </center>
        </div>
    );
}
export default Brochure;