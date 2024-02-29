// import Carouselrun from "./Component/BannerCarousel/carousel";
// import Categories from "./Component/Categories/categories";
// import Header from "./Component/Header/header";
import "./Assets/style.css"
// import Home from "./pages/Home";
// import Bankoffers from "./Component/Bankoffers/bankoffers";
// import Bestmobile from "./Component/BestmobileCarousel/bestmobilecarousel";
// import GridIngSection from "./Component/GridImgSection/gridsection";
// import TopDeals from "./Component/TopDeals/topdeals";
// import GridIngSection2 from "./Component/GridImgSection2/gridImg";
// import Featurebrand from "./Component/FeaturBrand/featurebrand";
// import CategoriesNav from "./Component/Categories_Nav/categoriesnav";
// import InsideHeader from "./Component/InsideHeader/insideheader";
// import MobileBackground from "./Component/MobilePageBackgroung/mobile_background";
// import TvStorePage from "./Component/TvStorePage/tvstore";

import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mobile from "./pages/Mobile";
import Tv from "./pages/Tv";
import Login from "./pages/Login";




function App() {
  return (
    <>
    {/* <Home/> */}
    {/* <InsideHeader/>
    <CategoriesNav/>
    <TvStorePage/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mobile" element={<Mobile/>} />
        <Route path="/tv" element={<Tv/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>


    
    </>
  );
}

export default App;
