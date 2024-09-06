import { useState, useEffect } from "react";
import offer1 from "../../assets/offer1.webp";
import offer2 from "../../assets/offer2.webp";
import offer3 from "../../assets/offer3.webp";
import offer4 from "../../assets/offer4.webp";
import offer5 from "../../assets/offer5.webp";
import offer6 from "../../assets/offer6.webp";
import UseResponsive from "../../hoooks/UseResponsiveHook";

const offers = [offer1, offer2, offer3, offer4, offer5, offer6];
export default function OfferCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const responsive = UseResponsive();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === offers.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === offers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="offer-card">
      {!responsive.isMobile && !responsive.isTablet && (
        <button onClick={handlePrev} className="nav-button prev-button">
          &lt;
        </button>
      )}
      <div
        className="image-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {offers.map((offer, index) => (
          <img
            key={index}
            src={offer}
            alt={`Offer ${index + 1}`}
            className="offer-img"
          />
        ))}
      </div>
      {!responsive.isMobile && !responsive.isTablet && (
        <button onClick={handleNext} className="nav-button next-button">
          &gt;
        </button>
      )}
    </div>
  );
}
