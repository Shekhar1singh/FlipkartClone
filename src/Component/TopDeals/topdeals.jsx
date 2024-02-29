import style from "./topdeals.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopDeals = () => {
  let TopdealsContent = [
    {
      img: "https://rukminim1.flixcart.com/image/210/210/xif0q/shoe/h/1/4/-original-imagtbtd2ggn4mdb.jpeg?q=80",
      tittle1: "PUMA,NEW Balance & more",
      tittle2: "Min.60-80% Off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/210/210/xif0q/shoe/1/o/b/7-if7252-7-adidas-crywht-arcngt-luclem-original-imagr5vh9bgfq2by.jpeg?q=80",
      tittle1: "ADIDAS, Skechers & more",
      tittle2: "Min.50-80% Off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/210/210/xif0q/shoe/9/y/8/9-rsl027-red-tape-white-blue-original-imagszhhyk7nndwg.jpeg?q=80",
      tittle1: "Red Tap, Wildcraft..",
      tittle2: "Min 60% Off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/210/210/xif0q/jean/0/n/l/32-mss22mjn307-metronaut-original-imagk7qgdr5uwfgh.jpeg?q=80",
      tittle1: "Pepe Jeans, Raymond",
      tittle2: "65-90% off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/210/210/ksru0sw0/watch/d/c/7/1-ax1723-armani-exchange-men-original-imag69rdhm6qnexj.jpeg?q=80",
      tittle1: "Armani Exchange, Guess &",
      tittle2: "Up to 80% off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/210/210/xif0q/shoe/z/y/q/-original-imagt6zyehvn3fpz.jpeg?q=80",
      tittle1: "Sparx, Liberty & more..",
      tittle2: "Under Rs 799",
    },
    {
      img: "https://rukminim1.flixcart.com/image/210/210/xif0q/shoe/x/a/o/5-na-5-vector-x-pearlwhite-black-original-imagk367fdnk6fkp.jpeg?q=80",
      tittle1: "Vector X, Nivia..",
      tittle2: "Under rs 799",
    },
    {
      img: "https://rukminim1.flixcart.com/image/210/210/xif0q/jean/s/l/r/29-141150501-only-original-imaghnntqpcbdyqu.jpeg?q=80",
      tittle1: "Levi's, ONLY, Dressberry",
      tittle2: "60-90% off",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
      <div className={style.Topdeals}>
        <div className={style.Topdeals_main}>
          <div className={style.Topdeals_container}>
            <div className={style.Topdeals_container_main}>
              <div className={style.text_icon}>
                <div className={style.text_icon_main}>
                  <div className={style.Topdeals_text}>Top Deals</div>
                  <div className={style.Topdeals_icon}>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div className={style.Topdeals_carousel}>
                <Carousel
                  responsive={responsive}
                  autoPlaySpeed={1000}
                  autoPlay={false}
                  className="Topdeals_carousel"
                >
                  {TopdealsContent.map((item, index) => {
                    return (
                      <div className={style.Topdeals_carousel_main}>
                        <div className={style.Topdeals_carousel_img}>
                          <img src={item.img} alt="mobile" />
                        </div>
                        <div>
                          <div className={style.Topdeals_carousel_img_tittle1}>
                            {item.tittle1}
                          </div>
                          <div className={style.Topdeals_carousel_img_tittle2}>
                            {item.tittle2}
                          </div>
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
export default TopDeals;
