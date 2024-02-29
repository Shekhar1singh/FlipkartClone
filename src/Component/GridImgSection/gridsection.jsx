import style from "./gridsection.module.css";
const GridIngSection = (props) => {
  return (
    <>
      <div className={style.GridIngSection}>
        <div className={style.GridIngSection_main_1}>
          <div className={style.GridIngSection_main}>
            <div className={style.GridIngSection_main_img_con}>
              <img src={props.src1} alt={props.altext} />
            </div>
            <div className={style.GridIngSection_main_img_con}>
              <img src={props.src2} alt={props.altext2} />
            </div>
            <div className={style.GridIngSection_main_img_con}>
              <img src={props.src3} alt={props.asuslaptop} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GridIngSection;
