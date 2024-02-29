import GridIngSection from "../GridImgSection/gridsection";
import GridIngSection2 from "../GridImgSection2/gridImg";
import style from "./mobile_background.module.css";
const MobileBackground = () => {
  let UnderProducts10000 = [
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/i/x/-original-imagt4qptrkzwmxa.jpeg?q=70",
      mob_name: "realme C51 (Mint Green,64GB)",
      rating: "4.3",
      rating_count: "65,744",
      price: "8,999",
      discount: "10,999",
      offer: "18%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/p/2/-original-imaguechhujc7ujh.jpeg?q=70",
      mob_name: "Infinix SMART 8HD (Shiny Gold, 64 GB)",
      rating: "4.3",
      rating_count: "13,289",
      price: "6,299",
      discount: "7,999",
      offer: "21%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/9/6/-original-imagwfffndz6tfhk.jpeg?q=70",
      mob_name: "SAMSUNG GALAXY F04(Opal Green,64GB)",
      rating: "4.2",
      rating_count: "93,776",
      price: "7,999",
      discount: "11,499",
      offer: "30%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/j/j/-original-imagnvvwvzyhfvx9.jpeg?q=70",
      mob_name: "Motorola G32 (Mineral Gray, 128GB)",
      rating: "4.1",
      rating_count: "1,07,649",
      price: "9,999",
      discount: "18,499",
      offer: "47%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/o/1/-original-imagx4dpnqkcz5yc.jpeg?q=70",
      mob_name: "POCO M6 5G(Orion Blue, 128 GB)",
      rating: "4.3",
      rating_count: "6,039",
      price: "9,999",
      discount: "12,999",
      offer: "23%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/h/3/-original-imagwfffzjftbg27.jpeg?q=70",
      mob_name: "Infinix SMART 8HD (Galaxy White,64GB)",
      rating: "4.3",
      rating_count: "13,289",
      price: "6,299",
      discount: "7,999",
      offer: "21%",
    },
  ];

  let UnderProducts20000 = [
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70",
      mob_name: "vivo T2X 5G (Marine Blue, 128 GB)",
      rating: "4.4",
      rating_count: "3,31,565",
      price: "12,999",
      discount: "18,999",
      offer: "31%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70",
      mob_name: "vivo T2x 5G(Aurora Gold,128 GB)",
      rating: "4.4",
      rating_count: "3,31,565",
      price: "12,999",
      discount: "18,999",
      offer: "31%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70",
      mob_name: "realme C53(champion Gol,128 GB)",
      rating: "4.4",
      rating_count: "98,776",
      price: "10,999",
      discount: "13,999",
      offer: "21%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/j/d/-original-imagtqqddnkayg4x.jpeg?q=70",
      mob_name: "realme 11 5G (Glory Gold, 128 GB)",
      rating: "4.3",
      rating_count: "51,343",
      price: "16,999",
      discount: "20,499",
      offer: "19%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/a/8/c67-5g-rmx3782-realme-original-imagvzwbfgergg2f.jpeg?q=70",
      mob_name: "realme C67 5G (sunny oasol 128GB)",
      rating: "4.4",
      rating_count: "16,999",
      price: "9,999",
      discount: "12,999",
      offer: "23%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/e/3/g84-5g-paym0018in-motorola-original-imagsy5zmhvkcfsx.jpeg?q=70",
      mob_name: "Motorola g84 5G (viva Mangenta, 256 GB)",
      rating: "4.2",
      rating_count: "29,767",
      price: "17,999",
      discount: "22,999",
      offer: "21%",
    },
  ];

  let UnderProducts20000more = [
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
      mob_name: "Apple iphone 15 (Blue, 128 GB)",
      rating: "4.6",
      rating_count: "10,979",
      price: "72,990",
      discount: "79,999",
      offer: "8%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/n/u/-original-imagx9egm9mgmvab.jpeg?q=70",
      mob_name: "SAMSUNG Glaxy S24 Ultra 5G(Titanium Gray)",
      rating: "4.6",
      rating_count: "308",
      price: "1,39,999",
      discount: "1,44,999",
      offer: "3%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/c/r/-original-imagx24ftn9fyuam.jpeg?q=70",
      mob_name: "Motorola Edge 40 Neo (Peach Fuzz, 128 GB)",
      rating: "4.4",
      rating_count: "23,318",
      price: "22,999",
      discount: "27,499",
      offer: "17%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
      mob_name: "Apple iPhone 13 (starlight,128 GB)",
      rating: "4.6",
      rating_count: "2,77,060",
      price: "52,999",
      discount: "59,900",
      offer: "11%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70",
      mob_name: "vivi T2 5G (Gold, 258 GB)",
      rating: "4.5",
      rating_count: "64,039",
      price: "24,999",
      discount: "27,999",
      offer: "10%",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/5/f/-original-imagwu9fyya8h6mg.jpeg?q=70",
      mob_name: "REDMI Note 13Pro +5G(Fusion Purple,256 GB)",
      rating: "4.2",
      rating_count: "2,289",
      price: "31,299",
      discount: "33,999",
      offer: "5%",
    },
  ];
  return (
    <>
      <div className={style.MobileBackground}>
        <div className={style.MobileBackground_upper_text}>
          Mobile Phone Republic Day Sale
        </div>
        <div className={style.firstImg}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/89f368eb6ee2bf64.jpg?q=50" />
        </div>
        <div className={style.SecondImg}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/fe26ade3c4ade4c5.jpg?q=50" />
        </div>
        <div className={style.ThirdImg}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/d8476293f58294b0.jpg?q=50" />
        </div>
        <div className={style.ForthImg}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/5c7f8739fc2d3aa5.jpg?q=50" />
        </div>
        <div className={style.FifthImg}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/3b01b4a4c08191f6.jpg?q=50" />
        </div>
        <div className={style.gridStyle}>
          <GridIngSection2 />
        </div>
        <div className={style.gridStyle}>
          <GridIngSection2 />
        </div>
        <div className={style.gridStyle}>
          <GridIngSection2 />
        </div>
        <div className={style.gridStyle}>
          <GridIngSection2 />
        </div>
        <div className={style.gridStyle}>
          <GridIngSection2 />
        </div>
        <div className={style.SixththImg}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/0a6878a34f504f1f.jpg?q=50" />
        </div>
        <div className={style.mobile_under_1000}>
          <div className={style.mobile_under_1000_main}>
            <div className={style.text_button}>
              <div>Under Rs 10,000</div>
              <button>VIEW ALL</button>
            </div>
            <div className={style.line}></div>
            <div className={style.map}>
              {UnderProducts10000.map((item, index) => {
                return (
                  <div className={style.mobile_card}>
                    <div className={style.mobile_card_main}>
                      <div className={style.imge_p}>
                        <img src={item.img} />
                      </div>
                    </div>

                    <div className={style.card_details}>
                      <div className={style.rating_p}>
                        <p>{item.mob_name}</p>
                      </div>
                      <div className={style.ratings}>
                        <div className={style.num_star}>
                          <div className={style.num_star_p}>
                            <p>{item.rating}</p>
                          </div>
                          <div>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" />
                          </div>
                        </div>
                        <div className={style.rating_count}>
                          <p>({item.rating_count})</p>
                        </div>
                      </div>
                      <div className={style.price_discount_offer}>
                        <div className={style.price_discount_offer_main}>
                          <div className={style.price}>
                            <p>Rs {item.price}</p>
                          </div>
                          <div className={style.discount}>
                            <p>Rs {item.discount}</p>
                          </div>
                          <div className={style.offer}>
                            <p>{item.offer} off</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.icon}>
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={style.blank}></div>
        <div className={style.mobile_under_1000}>
          <div className={style.mobile_under_1000_main}>
            <div className={style.text_button}>
              <div>Under ₹10,000 to ₹20,0000</div>
              <button>VIEW ALL</button>
            </div>
            <div className={style.line}></div>
            <div className={style.map}>
              {UnderProducts20000.map((item, index) => {
                return (
                  <div className={style.mobile_card}>
                    <div className={style.mobile_card_main}>
                      <div className={style.imge_p}>
                        <img src={item.img} />
                      </div>
                    </div>

                    <div className={style.card_details}>
                      <div className={style.rating_p}>
                        <p>{item.mob_name}</p>
                      </div>
                      <div className={style.ratings}>
                        <div className={style.num_star}>
                          <div className={style.num_star_p}>
                            <p>{item.rating}</p>
                          </div>
                          <div>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" />
                          </div>
                        </div>
                        <div className={style.rating_count}>
                          <p>({item.rating_count})</p>
                        </div>
                      </div>
                      <div className={style.price_discount_offer}>
                        <div className={style.price_discount_offer_main}>
                          <div className={style.price}>
                            <p>Rs {item.price}</p>
                          </div>
                          <div className={style.discount}>
                            <p>Rs {item.discount}</p>
                          </div>
                          <div className={style.offer}>
                            <p>{item.offer} off</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.icon}>
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={style.blank}></div>
        <div className={style.mobile_under_1000}>
          <div className={style.mobile_under_1000_main}>
            <div className={style.text_button}>
              <div>Premium Mobiles ₹20,000+</div>
              <button>VIEW ALL</button>
            </div>
            <div className={style.line}></div>
            <div className={style.map}>
              {UnderProducts20000more.map((item, index) => {
                return (
                  <div className={style.mobile_card}>
                    <div className={style.mobile_card_main}>
                      <div className={style.imge_p}>
                        <img src={item.img} />
                      </div>
                    </div>

                    <div className={style.card_details}>
                      <div className={style.rating_p}>
                        <p>{item.mob_name}</p>
                      </div>
                      <div className={style.ratings}>
                        <div className={style.num_star}>
                          <div className={style.num_star_p}>
                            <p>{item.rating}</p>
                          </div>
                          <div>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" />
                          </div>
                        </div>
                        <div className={style.rating_count}>
                          <p>({item.rating_count})</p>
                        </div>
                      </div>
                      <div className={style.price_discount_offer}>
                        <div className={style.price_discount_offer_main}>
                          <div className={style.price}>
                            <p>Rs {item.price}</p>
                          </div>
                          <div className={style.discount}>
                            <p>Rs {item.discount}</p>
                          </div>
                          <div className={style.offer}>
                            <p>{item.offer} off</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.icon}>
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileBackground;
