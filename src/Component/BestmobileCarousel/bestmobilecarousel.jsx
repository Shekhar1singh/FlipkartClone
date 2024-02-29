import style from "../BestmobileCarousel/bestmobilecarousel.module.css";
import asside_Img from "../../Assets/bestmobilenoise.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Bestmobile = () => {
  let BestmobileContent = [
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=80",
      tittle1: "Samsung S22 5G",
      tittle2: "incl of offers",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=80",
      tittle1: "Nothing Phone 2",
      tittle2: "incl of offers",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/d/o/r/-original-imagu4haetzha9bj.jpeg?q=80",
      tittle1: "Samsung S21 FE 2023 5G",
      tittle2: "incl of offers",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=80",
      tittle1: "Google Pixel 7A",
      tittle2: "incl of offers",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=80",
      tittle1: "Vivo T2 Pro 5G",
      tittle2: "from rs 21,999*",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=80",
      tittle1: "Realme 11 Pro 5G",
      tittle2: "incl of offers",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=80",
      tittle1: "Redme Note 12 Pro 5G",
      tittle2: "incl of offers",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/y/u/3/-original-imaggsuddwubypxp.jpeg?q=80",
      tittle1: "Google Pixel 7",
      tittle2: "incl of offers",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
      <div className={style.Bestmobile}>
        <div className={style.Bestmobile_main}>
          <div className={style.Bestmobile_container}>
            <div className={style.Bestmobile_container_main}>
              <div className={style.text_icon}>
                <div className={style.text_icon_main}>
                  <div className={style.Bestmobile_text}>Best Mobile</div>
                  <div className={style.Bestmobile_icon}>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div className={style.Bestmobile_carousel}>
                <Carousel
                  responsive={responsive}
                  autoPlaySpeed={1000}
                  autoPlay={false}
                  className="bestmobile_carousel"
                >
                  {BestmobileContent.map((item, index) => {
                    return (
                      <div className={style.Bestmobile_carousel_main}>
                        <div className={style.Bestmobile_carousel_img}>
                          <img src={item.img} alt="mobile" />
                        </div>
                        <div>
                          <div
                            className={style.Bestmobile_carousel_img_tittle1}
                          >
                            {item.tittle1}
                          </div>
                          <div
                            className={style.Bestmobile_carousel_img_tittle2}
                          >
                            {item.tittle2}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
            <div className={style.aside_image}>
              <img className={style.aside_image_container} src={asside_Img} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bestmobile;
