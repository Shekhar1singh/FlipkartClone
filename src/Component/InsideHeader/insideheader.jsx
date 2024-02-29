import { Link, useNavigate } from "react-router-dom";
import style from "./insideheader.module.css";
import { useContext } from "react";
import { ContextData } from "../../Context";
import logimg from "../../Assets/41ONa5HOwfL.jpg";
const InsideHeader = () => {
  const createdContext = useContext(ContextData);


  return (
    <>
      <div className={style.background}>
        <div className={style.header}>
          <Link to="/" className={style.logo}>
            <a className={style.logo_img} href="#">
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"></img>
            </a>
            <a className={style.logo_text} href="#">
              Explore <span className={style.plus}>Plus</span>
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
            </a>
          </Link>
          <div className={style.searchbar}>
            <div className={style.searchbar_main}>
              <input
                type="text"
                placeholder="Search for products,brands and more"
              ></input>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          {createdContext.isOTPSended ? (
            <div>
              <img className={style.login_img} src={logimg} />
            </div>
          ) : (
            <div className={style.login}>
              <div className={style.login_text}>Login</div>
            </div>
          )}
          <div className={style.BecomeSeller}>Become a seller</div>
          <div className={style.More}>
            <span className={style.MoreText_Style}>More</span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div className={style.cart}>
            <i class="fa-solid fa-cart-plus"></i>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default InsideHeader;
