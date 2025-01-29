import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styled container for the grid layout
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;  // One column layout by default
  gap: 20px;
  margin: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr; // Keeps the layout as one column on smaller screens
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 450px; /* Adjusted height of the slider */
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Adds shadow for a more defined look */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container */
  object-position: center; /* Center the image if aspect ratio is different */
  transition: transform 0.3s ease-in-out; /* Adds a smooth zoom effect */
  background-size: cover;
  
  &:hover {
    transform: scale(1.05); /* Zoom effect on hover */
  }
`;

const Legend = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
`;

const ImageSlider = ({ images }) => {
  if (!Array.isArray(images)) {
    return <p>No images available</p>;
  }

  return (
    <GridContainer>
      <SliderContainer>
        <Carousel
          showStatus={false}
          infiniteLoop={true}
          interval={2000}
          swipeable={true}
          emulateTouch={true}
          autoPlay
          showIndicators={false}
          showArrows={true}  // Allow users to navigate
          showThumbs={false}
          width="100%"
          dynamicHeight={true}
        >
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image.url}
                alt={`Slide ${index + 1}: ${image.name}`}
                loading="lazy" // Add lazy loading to improve performance
              />
              <Legend>{image.name}</Legend>
            </div>
          ))}
        </Carousel>
      </SliderContainer>
    </GridContainer>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageSlider;
