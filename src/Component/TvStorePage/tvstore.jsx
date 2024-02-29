import style from "./tvstore.module.css";
const TvStorePage = () => {
  return (
    <>
      <div className={style.backgroung}>
        <div className={style.text}>
          <h3>Television Store</h3>
          <p>
            Are you seeking TVs that provide captivating images? If so, browse
            online to find these necessary electronic appliances right away.
            After analysing various features and technological advancements, you
            can select a television. You can watch movies and sports on a big
            screen, which is a major source of amusement. Bring a smart device
            into your house to enjoy new levels of immersive sound and visuals.
            Select a device with an enveloping stereo system to receive a
            theatre-like experience. By streaming high-quality videos, the HD
            display makes sure you have a good time. Select an LED TV with the
            desired features to create a welcoming, interesting, and thrilling
            environment. On LED screens, enjoy your preferred streaming
            services, such as Amazon Prime Video, YouTube, Netflix, and others.
            WiFi or Bluetooth connectivity can connect your devices to Smart
            TVs. Browse and select a TV for your residence, then become
            enamoured with the superb visual experience. OnePlus, Sony, Toshiba,
            Motorola, Infinix, realme, Infinix, Blaupunkt, Thomson, SENS,
            Hisense and many other brands sell these big smart screens online.
            To make a well-informed purchasing decision, you can check and
            compare various brands, read user reviews, view ratings, and even
            compare the prices of different models online. The information you
            are reading has been last updated on 20-Jan-24. Popular Television
            Brand : LG , Samsung ,
          </p>
        </div>
        <div className={style.Aside_or_content}>
          <div className={style.Assidepart}>
            <div className={style.filter}>Filters</div>
            <div className={style.catogries}>
              <p className={style.P_catogries}>CATEGORIES</p>
              <p className={style.P_Home_Entertainment}>
                <span>
                  <i class="fa-solid fa-angle-left"></i>
                </span>
                Home Entertainment
              </p>
              <p className={style.P_Teleision}>Television</p>
            </div>
            <div className={style.price}>
              <p>PRICE</p>
              <div className={style.min_max_input}>
                <div className={style.min_max_style}>
                  <p>Min</p>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
                <p>to</p>
                <div className={style.min_max_style}>
                  <p>Max</p>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className={style.fAssured}>
              <div className={style.fAssured_main}>
                <div className={style.fAssured_style}>
                  <div className={style.checkbox_img}>
                    <div className={style.checkbox}>
                      <input type="checkbox"></input>
                    </div>
                    <div className={style.img}>
                      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" />
                    </div>
                  </div>
                  <div className={style.questionmark}>?</div>
                </div>
              </div>
            </div>
          </div>
          <div>ContentPart</div>
        </div>
      </div>
    </>
  );
};
export default TvStorePage;
