import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center mx-auto">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-6">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            mollitia at quod perspiciatis soluta aut. Eius voluptatem doloribus
            quae reprehenderit, enim, explicabo perferendis ducimus mollitia
            pariatur quasi necessitatibus officia molestias
          </p>
          <button className="bg-black text-[#00df9a] w-[180px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 cursor-pointer">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
