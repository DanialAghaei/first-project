import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-8 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <FaDribbbleSquare size={38} />
          <FaFacebookSquare size={38} />
          <FaInstagram size={38} />
          <FaGithubSquare size={38} />
          <FaTwitterSquare size={38} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-2xl text-gray-300">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Loremms</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Design</li>
            <li className="py-2 text-sm">Commerce</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-2xl text-gray-400">Package</h6>
          <ul>
            <li className="py-2 text-sm">Loremms</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Design</li>
            <li className="py-2 text-sm">Commerce</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-2xl text-gray-300">Pricing</h6>
          <ul>
            <li className="py-2 text-sm">Loremms</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Design</li>
            <li className="py-2 text-sm">Commerce</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
