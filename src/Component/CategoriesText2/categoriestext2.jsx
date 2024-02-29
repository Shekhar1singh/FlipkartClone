import style from "./categoriestext2.module.css";
const CategoriesText2 = (props) => {
  return (
    <>
      <div className={style.CategoriesText_main}>
        <div className={style.CategoriesText}>
          <div className={style.CategoriesText_Style}>
            <span>{props.Text}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoriesText2;
