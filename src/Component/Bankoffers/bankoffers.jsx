import style from "../Bankoffers/bankoffers.module.css";
import Img_bankoffer from "../../Assets/bankoffers.webp";
const Bankoffers = () => {
  return (
    <>
      <div className={style.bankoffers}>
        <div className={style.bankoffers_main}>
          <a href="#">
            <img
              className={style.bankoffer_img}
              src={Img_bankoffer}
              alt="bankoffer"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Bankoffers;
