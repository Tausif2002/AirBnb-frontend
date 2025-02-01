import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import menu from "../data/Menu-Icon.svg";
import person from "../data/person.svg";
import UserDmodal from "./UserDmodal";

// Custom hook to handle modal behavior
const useModalControl = (buttonRef, isOpen, setIsOpen) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsOpen(false);
      }
    };

    const handleBlur = () => {
      setIsOpen(false);
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setIsOpen, buttonRef]);
};

// Separate component for the user avatar
const UserAvatar = ({ userData }) => {

    return (
      <img src={person} className="h-8 opacity-50 w-8" alt="Default avatar" />
    );
  

};

// Main dashboard button component
const DashboardButton = ({ onClick, userData }) => {
  return (
    <button className="w-[3.8rem] items-center flex justify-between">
      <img src={menu} className="h-4 w-4" alt="Menu" />
      <UserAvatar  />
    </button>
  );
};

const UserDashboard = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const buttonRef = useRef(null);

  // Use the custom hook
  useModalControl(buttonRef, isUserModalOpen, setIsUserModalOpen);

  const toggleModal = (e) => {
    e.stopPropagation();
    setIsUserModalOpen(!isUserModalOpen);
  };

  return (
    <>
      <div
        id="user-dashboard"
        ref={buttonRef}
        onClick={toggleModal}
        className={`py-[7px] pl-[14px] ml-[0.75rem] pr-[8px] hover:shadow-3xl transition-all rounded-3xl border-[1px] border-grey-light `}
      >
        <DashboardButton onClick={toggleModal}  />
      </div>
      <UserDmodal isOpen={isUserModalOpen} />
    </>
  );
};

export default UserDashboard;
