import Image from "next/image";
import { useEffect, useState } from "react";
import { carouselImages, imgTextData } from "./data";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [imgText, setImgText] = useState("default");

  const prevImage = () => {
    setCurrent(current === 0 ? carouselImages.length - 1 : current - 1);
  };

  const nextImage = () => {
    setCurrent(current === carouselImages.length - 1 ? 0 : current + 1);
  };

  const handleImgTxt = () => {
    if (current === 0) {
      setImgText(imgTextData[0].value);
    } else if (current === 1) {
      setImgText(imgTextData[1].value);
    } else if (current === 2) {
      setImgText(imgTextData[2].value);
    } else if (current === 3) {
      setImgText(imgTextData[3].value);
    } else if (current === 4) {
      setImgText(imgTextData[4].value);
    }
  };
  useEffect(() => {
    handleImgTxt();
  });

  return (
    <>
      <div className="parent-carousel" id="carouselImage">
        <div className="btns-carousel-container">
          <div className="flex">
            <Image
              src={"/icons/leftArrow.png"}
              width={35}
              height={30}
              onClick={prevImage}
              alt="left arrow"
            />
          </div>
          <div className="img-text-container">
            <span id="testOnImageHere">{imgText}</span>
          </div>
          <div className="flex">
            <Image
              src={"/icons/rightArrow.png"}
              width={35}
              height={30}
              onClick={nextImage}
              alt="right arrow"
            />
          </div>
        </div>
        <div className="image-carousel">
          <Image
            src={carouselImages[current].src || null}
            width={480}
            height={200}
            alt="carousel image"
            className="carousel-image-main"
          />
        </div>
      </div>
    </>
  );
}
