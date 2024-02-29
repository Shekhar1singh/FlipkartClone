import CategoriesText from "../CategoriesText/categoriestext";
import CategoriesText2 from "../CategoriesText2/categoriestext2";
import style from "./categorirsnav.module.css";
const CategoriesNav = () => {
  return (
    <>
      <div className={style.CategoriesNav}>
        <div className={style.CategoriesNav_main}>
          <CategoriesText to="/" Text="Electronics" />
          <CategoriesText to="/about" Text="TVs&Appliances" />
          <CategoriesText Text="Men" />
          <CategoriesText Text="Women" />
          <CategoriesText Text="Baby & Kids" />
          <CategoriesText Text="Home & Furniture" />
          <CategoriesText Text="Sports,Books& More" />
          <CategoriesText2 Text="Flights" />
          <CategoriesText2 Text="Offer Zone" />
        </div>
      </div>
    </>
  );
};
export default CategoriesNav;
