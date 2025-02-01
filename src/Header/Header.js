import icon from "../data/airbnbLogo.svg";
import globe from "../data/globe.svg";
import MainForm from "./Form/MainForm";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import UserDashboard from "./UserDashboard";
function Header({ headerRef }) {
  const location = useLocation();

  // Determine if the user is on specific pages based on the URL path
  const isHouseDetailPage = location.pathname.includes("/house/");

  // Select which slice of the Redux store to use
  const currentSlice = isHouseDetailPage ? "houseSlice" : "app";
  const startScroll = useSelector((store) => store[currentSlice]?.startScroll);
  const minimizeHeader = useSelector((store) => store.app.minimize);

  // Generate class names for the "after" element depending on page state and scroll position
  const afterClass = generateAfterClass({
    startScroll,
    minimizeHeader,
  });

  return (
    <div
      id="header"
      className={`w-full py-2 1xz:py-0 relative bg-white flex flex-col 1smd:items-center items-start justify-center ${afterClass}`}
    >
      <div
        className={`grid grid-cols-3 ${
          isHouseDetailPage
            ? "max-w-7xl w-full px-10 1lg:px-20"
            : "w-full 1xl:px-20 px-10"
        }`}
      >
        <LogoSection /> 
          <CenterButtons
            startScroll={startScroll}
            minimizeHeader={minimizeHeader}
          />
        <div className="h-20 1xz:flex hidden items-center justify-end">
          <button className="text-sm h-[2.5rem] cursor-auto hidden 1smm:flex items-center justify-center rounded-full hover:bg-shadow-gray-light text-nowrap max-w-36 px-2 w-full font-[450]">
            Airbnb your home
          </button>

          <button className="min-h-9 cursor-auto hidden 1smm:flex items-center justify-center rounded-full hover:bg-shadow-gray-light min-w-9">
            <img className="h-4 w-4" src={globe} alt="Global" />
          </button>
          <UserDashboard />
        </div>
      </div>
      <div className="w-full 1smd:w-auto hidden 1xz:flex 1smd:block items-center justify-start 1smd:pl-0 pl-[16rem]">
      <MainForm headerRef={headerRef} />
    </div>
    </div>
  );
}

// Helper Components

// Renders the Airbnb logo and text
function LogoSection() {
  return (
    <div className="w-8">
      <a href="/">
        <div className="1xz:flex hidden h-20 items-center">
          <img className="mr-2 h-10 " src={icon} alt="Airbnb Logo" />
          <h1 className="text-2xl 1lg:flex-center hidden leading-8 text-pink text-start font-semibold">
            airbnb
          </h1>
        </div>
      </a>
    </div>
  );
}

// Renders the center buttons (Stays and Experiences)
function CenterButtons({ startScroll, minimizeHeader }) {
  const translateClasses = startScroll
    ? "1sm:translate-y-12 1md:translate-y-0"
    : minimizeHeader
    ? "translate-y-0"
    : "-translate-y-20 1md:translate-x-0 1sm:-translate-x-56";

  return (
    <div
      className={`flex h-20 transition-transform duration-[0.3s] ease-in-out ${translateClasses} justify-center items-center`}
    >
      <button className=" hidden 1smd:block  px-4 py-2 rounded-md font-medium">
        Stays
      </button>
      <p className="h-[2.5rem] 1smd:flex items-center hidden justify-center hover:bg-gray-100 hover:text-slate-600 rounded-full text-center w-[8rem] text-grey font-light">
        Experiences
      </p>
    </div>
  );
}


function generateAfterClass({
  startScroll,
  minimizeHeader
}) {
  const transitionClasses = minimizeHeader
    ? "1md:after:translate-y-[6rem] after:opacity-0"
    : "1md:after:translate-y-[-0.2rem] 1sm:after:translate-y-[-0.2rem] after:opacity-100";

  return `after:content-[''] after:hidden after:1xz:block  ${
    !startScroll
      ? `${transitionClasses}`
      : "1md:after:translate-y-[5.5rem] 1sm:after:translate-y-[8.2rem]"
  } after:transition-transform after:duration-[0.3s] after:ease-in-out after:w-full after:bg-grey-dim after:z-50 after:h-[1px]`;
}

export default Header;
