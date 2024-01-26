import React from "react";
import { useParams } from "react-router-dom";
import { data, experiences } from "../data/data";

const FreelancerDetails = () => {
  const { id } = useParams();
  const person = data.find((i) => i.id === id);

  return (
    <div className="bg-gray-200 h-[80vh] p-8 flex">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={person.profilePic}
            alt={person.name}
          />
          <div>
            <h2 className="text-2xl font-bold">{person.name}</h2>

            <p className="text-gray-600">{person.shortDescription}</p>
          </div>
        </div>
        <div className="flex font-bold my-3">
          <p className="text-xl py-3 pr-10">{person.hourlyCharge}$/hour </p>
          <p className="text-xl py-3">{person.reviews}🌟 </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Skills</h3>
          <ul className="flex flex-wrap">
            {person.skills.map((skill, index) => (
              <li
                className="bg-[#333945] text-white px-3 rounded-sm  m-1"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Basic Info</h3>
            <p>
              <strong>Age:</strong> {person.age}
            </p>
            <p>
              <strong>Location:</strong> {person.city}, {person.country}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p>
              <strong>University:</strong> {person.university}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div>
              <h3 className="text-xl font-bold mb-2">contact</h3>
              <p className="flex">
                <strong>email:</strong> 📧
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">{experience.company}</h3>
              <p className="text-gray-600">
                {experience.position} | {experience.startDate} -{" "}
                {experience.endDate}
              </p>
              <p className="mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelancerDetails;
