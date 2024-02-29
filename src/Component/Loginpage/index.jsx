import { useContext, useState } from "react";
import style from "./index.module.css";
import { ContextData } from "../../Context";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emptyError, setEmptyError] = useState(false);
  const [lengthError, setLengthError] = useState(false);

  const createdContext = useContext(ContextData);
  const navigate = useNavigate();

  const onGetDetails = (eventreturn) => {
    setPhoneNumber(eventreturn.target.value);
    if (eventreturn.target.value !== "") {
      setEmptyError(false);
    } else {
      setEmptyError(true);
    }

    if (eventreturn.target.value.length == 10) {
      setLengthError(false);
    } else if (eventreturn.target.value.length <= 1) {
      setLengthError(false);
    } else {
      setLengthError(true);
    }
  };

  const onSendOtp = () => {
    if (phoneNumber === "") {
      setEmptyError(true);
    } else if (phoneNumber.length !== 10) {
      setLengthError(true);
    } else {
      console.log("4578");
    }

    createdContext.onOTPSend();
    navigate("/");
  };

  console.log(createdContext.isOTPSended);

  return (
    <>
      <div className={style.Login}>
        <div className={style.Login_main}>
          <div className={style.background_login}>
            <div>
              <h1>Login</h1>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div>
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" />
            </div>
          </div>
          <div className={style.InputField}>
            <form>
              <label>Enter Email/Mobile number</label>
              <input
                onChange={onGetDetails}
                className={style.login_box}
                type="text"
                placeholder="Enter Email/Mobile number"
              />
              {emptyError && <p>Enter pnone No</p>}
              {lengthError && <p> Phone No. Should Be 10 Digit</p>}

              <p className={style.Text_p}>
                By continuing, you agree to Flipkart's
                <span className={style.span}>Terms of Use </span>
                and <span className={style.span}> Privacy Policy </span>.
              </p>
            </form>
            <div>
              <button onClick={onSendOtp} className={style.input_button}>
                Request OTP
              </button>
              <div className={style.lastline}>
                <a href="#">New to Flipkart? Create an account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
