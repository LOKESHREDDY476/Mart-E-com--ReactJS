import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from '../products'; // Ensure this path is correct

const ProductSlider = () => {
  const settings = {
    dots: false, // Hide navigation dots
    infinite: true, // Infinite scroll
    speed: 200, // Transition speed
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Set interval for auto-sliding
  };

  return (
    <div
      className="slider-container"
      style={{
        padding: "20px",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto", // Center the carousel on the page
      }}
    >
      <Slider {...settings}>
        {SliderData.map((slide) => (
          <div
            key={slide.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "80vh", // Dynamically set height
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          >
            {/* Text Section */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "15px",
                  lineHeight: "1.2",
                }}
              >
                {slide.title}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#555",
                  marginBottom: "20px",
                  lineHeight: "1.5",
                }}
              >
                {slide.desc}
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "1rem",
                  color: "#fff",
                  background: "#000",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Visit Collections
              </button>
            </div>

            {/* Image Section */}
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <img
                src={slide.cover}
                alt={slide.title}
                style={{
                  maxWidth: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
