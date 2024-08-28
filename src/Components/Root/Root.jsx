import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-475px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
