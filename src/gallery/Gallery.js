import React from "react";
import image1 from "./imgs/david-martin-6bpDmlj52B4-unsplash.jpg";
import image2 from "./imgs/jessica-felicio-_cvwXhGqG-o-unsplash.jpg";
import image3 from "./imgs/laia-nunez-IoQBqSmARv4-unsplash.jpg";
import image4 from "./imgs/mike-von-wINYGcOk-Ps-unsplash.jpg";
import image5 from "./imgs/pexels-luis-quintero-1587619.jpg";
import image6 from "./imgs/pexels-mwabonje-1694881.jpg";
import image7 from "./imgs/pexels-ralph-rabago-3214734.jpg";
import image8 from "./imgs/pexels-thiago-miranda-1230349.jpg";
import image9 from "./imgs/pexels-tim-mossholder-1080884.jpg";
import "../gallery/newstyles.css";
// import Button from "../mainStyles/AppStyles";

const images = [
  {
    id: 1,
    title: "David",
    url: image1,
  },
  {
    id: 2,
    title: "Jessica",
    url: image2,
  },
  {
    id: 3,
    title: "Laia",
    url: image3,
  },
  {
    id: 4,
    title: "Mike",
    url: image4,
  },
  {
    id: 5,
    title: "Luis",
    url: image5,
  },
  {
    id: 6,
    title: "Mwah",
    url: image6,
  },
  {
    id: 7,
    title: "Ralph",
    url: image7,
  },
  {
    id: 8,
    title: "thia",
    url: image8,
  },
  {
    id: 9,
    title: "tim",
    url: image9,
  },
];

function Gallery() {
  return (
    <>
      <div className="gallery">
        <h4>Photos</h4>
        <div className="gallery-container">
          {images.map((image) => (
            <img className="gallery-images" src={image.url} />
          ))}
        </div>
      </div>
    </>
  );
}

// render(<Button />);
export default Gallery;
