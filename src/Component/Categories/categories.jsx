import style from "./categories.module.css";
import Img_mob from "../../Assets/mobile.webp";
import Img_tv from "../../Assets/tv.webp";
import Img_appliances from "../../Assets/applience.webp";
import Img_fashion from "../../Assets/fashion.webp";
import Img_beauty from "../../Assets/beauty.webp";
import Img_home from "../../Assets/homekitchen.webp";
import Img_furnit from "../../Assets/furniture.webp";
import Img_flights from "../../Assets/flights.webp";
import Img_grocery from "../../Assets/grocery.webp";
import { Link } from "react-router-dom";
const Categories = () => {
  let categories = [
    {
      img: `${Img_mob}`,
      title: "Mobiles & Tablets",
      to: "/mobile",
    },
    {
      img: `${Img_tv}`,
      title: "TVs & Electronics",
      to: "/Tv",
    },
    {
      img: `${Img_appliances}`,
      title: "Appliances",
    },
    {
      img: `${Img_fashion}`,
      title: "Fashion",
    },
    {
      img: `${Img_beauty}`,
      title: "Beauty",
    },
    {
      img: `${Img_home}`,
      title: "Home & Kitchen",
    },
    {
      img: `${Img_furnit}`,
      title: "Furniture",
    },
    {
      img: `${Img_flights}`,
      title: "Flights",
    },
    {
      img: `${Img_grocery}`,
      title: "Grocery",
    },
  ];

  return (
    <>
      <div className={style.categories}>
        <div className={style.categories_main}>
          <div className={style.categories_content}>
            {categories.map((item, index) => {
              return (
                <Link to={item.to} className={style.map_style}>
                  <div className={style.categories_content_image}>
                    <img src={item.img} />
                  </div>
                  <div>
                    <p className={style.categories_content_text}>
                      {item.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Categories;
