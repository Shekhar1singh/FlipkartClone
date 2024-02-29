import CategoriesNav from "../../Component/Categories_Nav/categoriesnav";
import Footer from "../../Component/Footer";
import InsideHeader from "../../Component/InsideHeader/insideheader";
import LoginPage from "../../Component/Loginpage";
import TvStorePage from "../../Component/TvStorePage/tvstore";

const Tv = () => {
  return (
    <>
      <InsideHeader />
      <CategoriesNav />
      <TvStorePage />
      <Footer />
    </>
  );
};
export default Tv;
