import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import "../pages/styles.css";

const ImageRenderer = ({ item, index, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="image-wrap" {...rest}>
      {index < 3 ? (
        <>
          <img
            src={item.thumbnail}
            alt="test"
            loading="eager"
            height="600"
            className={`image thumb ${isLoaded && "isLoaded"}`}
          />
          <img
            src={item.image}
            alt="test"
            loading="eager"
            onLoad={handleLoad}
            height="600"
            className={`image ${isLoaded && "isLoaded"}`}
          />
        </>
      ) : (
        <LazyLoad once height={600} offset={1000}>
          <>
            <img
              src={item.thumbnail}
              alt="test"
              loading="eager"
              height="600"
              className={`image thumb ${isLoaded && "isLoaded"}`}
            />
            <img
              src={item.image}
              alt="test"
              loading="eager"
              onLoad={handleLoad}
              height="600"
              className={`image ${isLoaded && "isLoaded"}`}
            />
          </>
        </LazyLoad>
      )}
    </div>
  );
};

export default ImageRenderer;
