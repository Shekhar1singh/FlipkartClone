import React from "react";
import Header from "../../Component/Header/header";
import Bankoffers from "../../Component/Bankoffers/bankoffers";
import Carouselrun from "../../Component/BannerCarousel/carousel";
import Featurebrand from "../../Component/FeaturBrand/featurebrand";
import Categories from "../../Component/Categories/categories";
import Bestmobile from "../../Component/BestmobileCarousel/bestmobilecarousel";
import GridIngSection from "../../Component/GridImgSection/gridsection";
import TopDeals from "../../Component/TopDeals/topdeals";
import GridIngSection2 from "../../Component/GridImgSection2/gridImg";
import Footer from "../../Component/Footer";
let Img1 =
  "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8bc07230b5ef20f4.jpg?q=20";
let Img2 =
  "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/93c68a7eadd552e6.png?q=20";
let Img3 =
  "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3a0f369e4b2ef15a.jpg?q=20";

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <Carouselrun />
      <Bankoffers />
      <Bestmobile />
      <GridIngSection
        src1={Img1}
        altext="f13"
        src2={Img2}
        altext2="waterheater"
        src3={Img3}
        altext3="asuslaptop"
      />
      <Featurebrand />
      <TopDeals />
      <GridIngSection2 />
      <Footer />
    </>
  );
};

export default Home;
