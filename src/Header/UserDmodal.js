import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const MenuItem = ({ text}) => {
  return  (
    <span
      className={`text-sm font-medium flex items-center hover:bg-shadow-gray-light px-5 h-10 w-full cursor-pointer`}
    >
      {text}
    </span>
  );
};

const UserDmodal = ({ isOpen }) => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    function updatePosition() {
      const userDashBoardEl = document.getElementById("user-dashboard");

      if (userDashBoardEl) {
        let rect = userDashBoardEl.getBoundingClientRect();

        setPosition({
          right: `${
            ((window.innerWidth - rect.right) / window.innerWidth) * 100
          }%`,
          top: `${(rect.bottom / window.innerHeight) * 100}%`,
        });
      }
    }
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      style={position}
      className="fixed mt-2 hidden 1xz:flex flex-col shadow-2xl justify-between rounded-xl w-60 z-50  bg-white "
    >
          <div className="w-full flex mt-2 flex-col justify-between">
            <MenuItem
              text="Sign up"
            ></MenuItem>
            <MenuItem
              text="Log in"
            ></MenuItem>
          </div>
          <div className="w-full py-[0.5px] z-30 bg-grey-light-50"></div>
          <div className="w-full flex mb-2 mt-2 flex-col justify-between">
            <MenuItem text="Airbnb your home"></MenuItem>
            <MenuItem text="Help center"></MenuItem>
          </div>
    </div>,
    document.body
  );
};

export default UserDmodal;
