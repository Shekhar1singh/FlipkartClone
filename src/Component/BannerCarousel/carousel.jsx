import style from "../BannerCarousel/carousel.module.css";
import Img_skyheigh from "../../Assets/skyheighbanner.webp";
import Img_indigo from "../../Assets/indigobanner.webp";
import Img_intelpower from "../../Assets/intelpowerbanner.webp";
import Img_lg from "../../Assets/lgbanner.webp";
import Img_rep from "../../Assets/republicdayoffbanner.webp";
import Img_salelive from "../../Assets/saleislivebanner.webp";
import Img_iphone from "../../Assets/iphone15banner.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carouselrun = () => {
  let Images = [
    { img: `${Img_skyheigh}` },
    { img: `${Img_indigo}` },
    { img: `${Img_intelpower}` },
    { img: `${Img_lg}` },
    { img: `${Img_rep}` },
    { img: `${Img_salelive}` },
    { img: `${Img_iphone}` },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
      <div className={style.carousel}>
        <div className={style.carousel_main}>
          <Carousel
            responsive={responsive}
            autoPlaySpeed={2000}
            autoPlay={true}
            infinite={true}
            showDots={true}
            className="banner"
          >
            {Images.map((item, index) => {
              return (
                <div className={style.img_style}>
                  <img src={item.img} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default Carouselrun;
