import React from "react";

import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* card no 1 */}
        <div className="cursor-pointer w-full shadow-xl mx-auto flex flex-col p-4 my-8 rounded-2xl hover:scale-105 duration-500">
          <img className="w-20 bg-white p-2 mx-auto mt-[-3rem]" src={Single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">149$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up To 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto py-3">Start Trial</button>
        </div>
        {/* card no 2 */}
        <div className="cursor-pointer bg-gray-200 w-full shadow-xl mx-auto flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500">
          <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">159$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-white mx-8 mt-8">600 GB Storage</p>
            <p className="py-2 border-b border-white mx-8">2 Granted User</p>
            <p className="py-2 border-b border-white mx-8">Send Up To 3 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto py-3">Start Trial</button>
        </div>
        {/* card no 3 */}
        <div className="cursor-pointer w-full shadow-xl mx-auto flex flex-col p-4 my-8 rounded-2xl hover:scale-105 duration-500">
          <img className="w-20 bg-white p-2 mx-auto mt-[-3rem]" src={Triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">169$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">700 GB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up To 4 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto py-3">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
