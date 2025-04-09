import Slider from "react-slick";
import "./Carrossel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Carrossel() {
  const imagens = [img1, img2, img3];

  const settings = {
    customPaging: function (i) {
      return <img src={imagens[i]} alt={`Thumb ${i}`} className="img-thumb" />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {imagens.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} className="img-grande" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carrossel;
