import style from "./gridImg.module.css";
const GridIngSection2 = () => {
  return (
    <>
      <div className={style.GridIngSection}>
        <div className={style.GridIngSection_main_1}>
          <div className={style.GridIngSection_main}>
            <div className={style.GridIngSection_main_img_con}>
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/6251e1883a362570.jpg?q=20"
                alt="VivoT2"
              />
            </div>
            <div className={style.GridIngSection_main_img_con}>
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/e615eff1a8b49e67.jpg?q=20"
                alt="cooker"
              />
            </div>
            <div className={style.GridIngSection_main_img_con}>
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/a73b44826508df48.jpg?q=20"
                alt="flights"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GridIngSection2;
