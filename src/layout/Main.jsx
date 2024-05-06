import { Outlet } from "react-router-dom";
import Header from "../components/Headers/Header";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
