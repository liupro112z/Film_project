import { Outlet } from "react-router-dom";
import '../Footer.css';
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;