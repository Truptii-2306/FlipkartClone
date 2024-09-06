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
  ],
};

export default function BestDealsMobile() {
  return (
    <div style={{ display: "flex", gap: "8px", background: "#ffffff" }}>
      <div style={{ width: "100%", padding: "4px" }}>
        <p style={{ fontSize: "16px", margin: "10px 10px 20px 10px " }}>
          Best Deals on {Items.title}
        </p>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {Items["data"].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                padding: "4px 2px",
                borderRadius: "4px",
                gap: "10px",
                fontSize: "12px",
              }}
            >
              <img src={item.img} style={{ width: "64px", height: "64px" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                <p style={{ fontSize: "14px", fontWeight: 500, margin: 0 }}>
                  {item.name}
                </p>
                <p style={{ fontSize: "14px", fontWeight: 350, margin: 0 }}>
                  {"From " + "₹" + item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
