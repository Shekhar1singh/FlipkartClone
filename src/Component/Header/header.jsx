import style from "./header.module.css";
import LogoImg from "../../Assets/fkheaderlogo_exploreplus-44005d.svg";
import { Link } from "react-router-dom";
import { createContext, useContext } from "react";
import { ContextData } from "../../Context";
import logimg from "../../Assets/41ONa5HOwfL.jpg";

const Header = () => {
  const CreatedContext = useContext(ContextData);
  return (
    <>
      <div className={style.main}>
        <div className={style.Headercontainer}>
          <Link to="/">
            <div className={style.logo}>
              <img src={LogoImg} alt="Explorer img" />
            </div>
          </Link>
          <div className={style.searchbar}>
            <div className={style.searchbar_main}>
              <span className={style.magnifiyng_glass}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <span className={style.input_field}>
                <input
                  className={style.search_input_style}
                  type="text"
                  placeholder="Search for Products, Brands and More"
                />
              </span>
            </div>
          </div>
          {CreatedContext.isOTPSended ? (
            <div>
              <img className={style.login_img} src={logimg} />
            </div>
          ) : (
            <div className={style.login}>
              <Link to="/login" className={style.login_main}>
                <a className={style.img1} href="#">
                  <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" />
                </a>
                <a className={style.login_text} href="#">
                  Login
                </a>
                <a className={style.img2} href="#">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" />
                </a>
              </Link>
              <div className={style.onhoverloginList_main}>
                <div className={style.onhoverloginList}>
                  <div className={style.loginList}>
                    <ul>
                      <li>
                        <a className={style.list1} href="#">
                          <span className={style.span1}>New customer?</span>
                          <span className={style.span2}>Sign Up</span>
                        </a>
                      </li>
                      <li>
                        <div className={style.iconimg}>
                          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" />
                        </div>
                        <a href="#">My Profile</a>
                      </li>
                      <li>
                        <div className={style.iconimg}>
                          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" />
                        </div>
                        <a href="#">Flipkart Plus Zone</a>
                      </li>
                      <li>
                        <div className={style.iconimg}>
                          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" />
                        </div>
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <div className={style.iconimg}>
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" />
                        </div>
                        <a href="#">Wishlist</a>
                      </li>
                      <li>
                        <div className={style.iconimg}>
                          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg" />
                        </div>
                        <a href="#">Rewards</a>
                      </li>
                      <li>
                        <div className={style.iconimg}>
                          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" />
                        </div>
                        <a href="#">Gift Cards</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={style.cart}>
            <div className={style.cart_main}>
              <a className={style.img3} href="#">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" />
              </a>
              <a className={style.login_text} href="#">
                Cart
              </a>
            </div>
          </div>
          <div className={style.become_seller}>
            <div className={style.become_seller_main}>
              <a className={style.img4} href="#">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" />
              </a>
              <a className={style.login_text} href="#">
                Become a Seller
              </a>
            </div>
          </div>
          <div className={style.three_dott}>
            <div className={style.three_dott_main}>
              <a className={style.three_dott_rotate}>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </a>
            </div>
          </div>
          <div className={style.profile_icon}>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" />
          </div>
        </div>
      </div>

      <div className={style.blankspace}></div>
    </>
  );
};
export default Header;
