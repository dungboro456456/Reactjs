import React, { useEffect, useState } from "react";
import axios from "axios";


const Slider = () => {
    const urlSlider = "http://localhost/Laravel-NguyenTanDUng-2121110243/public/api/slider/slider_list/slideshow";
    const urlImage = "http://localhost/Laravel-NguyenTanDUng-2121110243/public/images/slider/";
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    async function getSliders() {
      const response = await axios.get(urlSlider);
      setSliders(response.data);
    }
    getSliders();
  }, []);
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        {sliders.map((slider,index)=>{
            if(index===0)
            { return(
                <div key={index} className="carousel-item active">
<img
  src={urlImage+slider.image}
  className="d-block mx-auto"
  alt={slider.image}
  style={{ maxHeight: "600px", width: "1300px", objectFit: "cover", borderRadius: "10px" }}
/>

                <div className="carousel-caption d-none d-md-block">
                </div>
                </div>
            )
            }else 
            {
                return <div key={index} className="carousel-item">
<img
  src={urlImage+slider.image}
  className="d-block mx-auto"
  alt={slider.image}
  style={{ maxHeight: "600px", width: "1300px", objectFit: "cover", borderRadius: "10px" }}
/>                <div className="carousel-caption d-none d-md-block">
                
          </div>
        </div>
            }
        })}

      </div>
      <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden ">Next</span>
      </button>
    </div>
  );
};

export default Slider;
