import React from "react";
import { data } from "../data/data";
import Card from "./Card";

const FreelancersList = () => {
  return (
    <div className="m-5">
      <h2 className="my-6 mx-3 font-bold text-3xl">
        Browse our Highest rated freelancers
      </h2>
      <div className="flex flex-wrap">
        {data.map((freelancer) => (
          <Card key={freelancer.id} freelancer={freelancer} />
        ))}
      </div>
    </div>
  );
};

export default FreelancersList;
