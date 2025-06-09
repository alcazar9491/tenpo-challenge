import type { JSX } from "react";
import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";


const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="w-full flex flex-wrap justify-center  ">
      <Header />
      <div className="w-full flex flex-wrap justify-center  py-[2%]">
       {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
