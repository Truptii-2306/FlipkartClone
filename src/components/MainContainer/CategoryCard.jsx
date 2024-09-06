import grocery from "../../assets/grocery.webp";
import mobile from "../../assets/mobile.webp";
import apliences from "../../assets/apliences.webp";
import furniture from "../../assets/furniture.webp";
import fashion from "../../assets/fashion.webp";
import electronics from "../../assets/electronic.webp";
import travel from "../../assets/travel.webp";
import toysandbeauty from "../../assets/toysandbeauty.webp";
import twowheeler from "../../assets/towwheeler.webp";

export default function CategoryCard() {
  const categories = [
    { name: "Grocery", img: grocery },
    { name: "Mobile", img: mobile },
    { name: "Fashion", img: fashion },
    { name: "Electronics", img: electronics },
    { name: "Home & Furniture", img: furniture },
    { name: "Apliences", img: apliences },
    { name: "Travel", img: travel },
    { name: "Beauty Toys and More", img: toysandbeauty },
    { name: "Two Wheeler", img: twowheeler },
  ];

  return (
    <div style={{ overflow: "auto", width: "100%" }}>
      <div className="category-card">
        {categories.map((categoryItem, index) => (
          <div key={index} className="category-item">
            <img className="category-img" src={categoryItem.img} />
            <p className="category-text">{categoryItem.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
