import React from "react";
import { Link } from "react-router-dom";

const Card = ({ freelancer }) => {
  return (
    <div className="bg-gray-200  m-1 rounded-[5%] w-[30%]">
      <div className="flex p-3">
        <img
          className="w-[33%] rounded-[100%]"
          alt="s"
          src={freelancer.profilePic}
        />
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold">{freelancer.name}</h2>
          <h2 className="text-xl">{freelancer.forte}</h2>
        </div>
      </div>
      <div className="flex py-1">
        <h2 className="text-lg font-bold ml-9 ">
          {freelancer.hourlyCharge}$/hour
        </h2>
        <h2 className="text-lg font-bold ml-24">
          {freelancer.city},{freelancer.country}
        </h2>
      </div>
      <div className="flex flex-wrap p-2">
        {freelancer.skills.slice(0, 7).map((i) => (
          <h6
            key={i}
            className="bg-[#2F363F] text-white rounded-[10%] px-3 ml-2 mb-2 text-sm"
          >
            {i}
          </h6>
        ))}
      </div>
      <Link to={`/freelancer/${freelancer.id}`}>
        {" "}
        <button className="text-lg bg-green-500 font-bold rounded-[5%] px-2 py-1 ml-4 my-4">
          view profile
        </button>
      </Link>
    </div>
  );
};

export default Card;
