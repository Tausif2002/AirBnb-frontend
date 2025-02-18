import React, { useRef } from "react";
import { useSelector } from "react-redux";

import Header from "./Header/Header";
import Options from "./Main/Options";
import House from "./Main/House";
import Footer from "./Footer";

import styles from "./input.css";

const Home = () => {
  const { startScroll, minimize } = useSelector((state) => state.app);

  const headerRef = useRef(null);

 

  const getHeaderClasses = () => {
    const baseClasses =
      "fixed transition-all duration-300 ease-in-out bg-white w-full flex items-start justify-center top-0";
    const zIndexClass = minimize ? "z-50" : "z-10";
    const heightClass = startScroll
      ? minimize
        ? "animate-collapse"
        : "1sm:h-[11rem]"
      : minimize
      ? "animate-expand"
      : "h-[5rem]";

    return `${baseClasses} ${zIndexClass} ${heightClass}`;
  };

  const getOptionsClasses = () => {
    const baseClasses =
      "transition-all duration-300 ease-in-out fixed z-10 w-full bg-white shadow-md 1sm:shadow-none flex-center";
    const visibilityClass = startScroll
      ? "1md:translate-y-0 1sm:translate-y-[3rem]"
      : "1sm:-translate-y-[5.9rem] !shadow-md";
    const positionClass = "1sm:top-[10.8rem] top-[5.7rem]";

    return `${baseClasses} ${visibilityClass} ${positionClass}`;
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div ref={headerRef} id="header" className={getHeaderClasses()}>
        <Header headerRef={headerRef} />
      </div>
      <div className={getOptionsClasses()}>
        <Options />
      </div>
      <div className="w-full flex justify-center items-center mt-[7rem] 2xl:mt-[14rem] 1sm:mt-[13rem]">
        <House />
      </div>
        <div className="w-full hidden 1smd:flex-center bg-white border-t border-grey-light-50  bottom-0 h-10">
          <Footer />
        </div>

    </div>
  );
};

export default Home;
