import { useRef, useState, useEffect } from "react";
import useResponsive from "../../hoooks/UseResponsiveHook";
import phone1 from "../../assets/phone1.webp";
import phone2 from "../../assets/phone2.webp";
import phone3 from "../../assets/phone3.webp";
import phone4 from "../../assets/phone4.webp";
import phone5 from "../../assets/phone5.webp";
import phone6 from "../../assets/phone6.webp";
import sale from "../../assets/sale.webp";

const Items = {
  title: "Smartphones",
  data: [
    { img: phone1, name: "Nothing Phone (2a) 5G", price: 23999 },
    { img: phone3, name: "Vivo Y16 ", price: 20999 },
    { img: phone2, name: "Cmf By Nothing Phone 1", price: 15999 },
    { img: phone4, name: "Redmi 12", price: 99999 },
    { img: phone5, name: "Motorola Edge 50 Fusion 5G", price: 22999 },
    { img: phone6, name: "Apple iPhone 13 ", price: 59600 },
    { img: phone1, name: "Nothing Phone (2a) 5G", price: 23999 },
    { img: phone3, name: "Vivo Y16 ", price: 20999 },
    { img: phone2, name: "Cmf By Nothing Phone 1", price: 15999 },
  ],
};

export default function BestDeals() {
  const containerRef = useRef(null);
  const outerContainerRef = useRef(null);
  const responsive = useResponsive();
  const [showButtonLeft, setShowLeftButton] = useState(false);
  const [showButtonRight, setShowRightButton] = useState(true);

  function handleScroll() {
    if (containerRef.current && outerContainerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;

      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    containerRef.current.addEventListener("scroll", handleScroll);
  }, []);

  function scroll(direction) {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  }

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <div
        className="best-deals"
        style={{
          position: "relative",
          width: responsive.isTablet ? "100%" : "84%",
          display: "flex",
          padding: "14px",
        }}
        ref={outerContainerRef}
      >
        <p className="best-deals-title">Best Deals on {Items.title}</p>
        <div className="scroll-best-deal-container" ref={containerRef}>
          {showButtonLeft && !responsive.isTablet && (
            <button
              onClick={() => {
                scroll("left");
              }}
              style={{
                position: "absolute",
                left: 0,
                top: "40%",
                zIndex: 1,
                background: "#fff",
                border: "none",
                cursor: "pointer",
                padding: "20px 10px",
                borderRadius: "2px",
                boxShadow: "0 1px 1px #f1f1f1",
              }}
            >
              {"<"}
            </button>
          )}
          <div style={{ display: "flex" }}>
            {Items["data"].map((item, index) => (
              <div className="best-deals-item" key={index}>
                <img src={item.img} className="best-deals-img" />
                <p className="best-deal-item-name">{item.name}</p>
                <p className="best-deal-item-price">{"₹" + item.price}</p>
              </div>
            ))}
          </div>
          {showButtonRight && !responsive.isTablet && (
            <button
              onClick={() => scroll("right")}
              style={{
                position: "absolute",
                right: 0,
                top: "40%",
                zIndex: 1,
                background: "#fff",
                border: "none",
                cursor: "pointer",
                padding: "20px 10px",
                borderRadius: "2px",
                boxShadow: "0 2px 2px #f1f1f1",
              }}
            >
              {">"}
            </button>
          )}
        </div>
      </div>
      {!responsive.isTablet && (
        <div style={{ width: "16%" }}>
          <img src={sale} style={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
}
