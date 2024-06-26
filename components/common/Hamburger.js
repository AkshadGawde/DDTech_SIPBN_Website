import React from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Hamburger = ({ open, setOpen }) => {
  return (
    <button className="menu-toggle" onClick={() => setOpen(!open)}>
      {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
    </button>
  );
};

export default Hamburger;
