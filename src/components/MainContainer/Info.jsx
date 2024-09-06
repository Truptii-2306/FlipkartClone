import UseResponsive from "../../hoooks/UseResponsiveHook";
import info1 from "../../assets/info1.webp";
import info2 from "../../assets/info2.webp";
import info3 from "../../assets/info3.webp";
import info4 from "../../assets/info4.webp";
import info5 from "../../assets/info5.webp";
import info6 from "../../assets/info6.webp";
import info7 from "../../assets/info7.webp";
import info8 from "../../assets/info8.webp";
import info9 from "../../assets/info9.webp";
import info10 from "../../assets/info10.webp";
import info11 from "../../assets/info11.webp";
import info12 from "../../assets/info12.webp";

const data = [
  info1,
  info2,
  info3,
  info4,
  info5,
  info6,
  info7,
  info8,
  info9,
  info10,
  info11,
  info12,
];

export default function Info() {
  const responsive = UseResponsive();
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: responsive.isMobile
          ? "repeat(2,1fr)"
          : "repeat(3, 1fr)",
        gap: "4px",
      }}
    >
      {data.map((info, index) => (
        <div key={index} className="info-item">
          {<img src={info} className="info-img" />}
        </div>
      ))}
    </div>
  );
}
