import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = ()=>{
    setNav(!nav)
  }
  return (
    <div className="text-white h-24 flex justify-between items-center max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="md:flex hidden">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">Resources</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {nav ? <AiOutlineClose size={28}/> : <AiOutlineMenu size={28} />}
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[40%] h-full bg-gray-600 md:hidden ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b cursor-pointer">Home</li>
          <li className="p-4 border-b cursor-pointer">Company</li>
          <li className="p-4 border-b cursor-pointer">Resources</li>
          <li className="p-4 border-b cursor-pointer">About</li>
          <li className="p-4 border-b cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
