import { Link } from "react-router-dom";
import style from "./categoriestext.module.css";
const CategoriesText = (props) => {
  return (
    <>
      <Link to={props.to} className={style.CategoriesText_main}>
        <div className={style.CategoriesText}>
          <div className={style.CategoriesText_Style}>
            <span>{props.Text}</span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </Link>
    </>
  );
};
export default CategoriesText;
