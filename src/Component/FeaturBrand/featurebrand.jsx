import style from "./featurebrand.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Featurebrand = () => {
  let FeaturebrandContent = [
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/aa38b03dcbcd116e.jpeg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/ec4c228a477cfe0e.jpeg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/4a77799fc427ea83.jpeg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/de7b289935b58525.jpeg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/b01c591586e2cbc6.jpeg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/43cc8f4178794c6f.jpeg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/52892934e16a6526.jpeg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/0827b82ce0482777.jpeg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/7284611a66db3145.jpeg?q=20",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className={style.Featurebrand}>
        <div className={style.Featurebrand_main}>
          <div className={style.Featurebrand_container}>
            <div className={style.Featurebrand_container_main}>
              <div className={style.text_icon}>
                <div className={style.text_icon_main}>
                  <div className={style.Featurebrand_text}>Featured Brand</div>
                </div>
              </div>
              <div className={style.Featurebrand_carousel}>
                <Carousel
                  responsive={responsive}
                  autoPlaySpeed={1000}
                  autoPlay={false}
                  className="Featurebrand_carousel"
                >
                  {FeaturebrandContent.map((item, index) => {
                    return (
                      <div className={style.Featurebrand_carousel_main}>
                        <div className={style.Featurebrand_carousel_img}>
                          <img src={item.img} alt="featurebrand_img" />
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Featurebrand;
