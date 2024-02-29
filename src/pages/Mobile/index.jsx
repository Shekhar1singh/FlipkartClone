import React from "react";
import MobileBackground from "../../Component/MobilePageBackgroung/mobile_background";
import CategoriesNav from "../../Component/Categories_Nav/categoriesnav";
import InsideHeader from "../../Component/InsideHeader/insideheader";
import Footer from "../../Component/Footer";

const Mobile = () => {
  return (
    <>
      <InsideHeader />
      <CategoriesNav />
      <MobileBackground />
      <Footer />
    </>
  );
};

export default Mobile;
