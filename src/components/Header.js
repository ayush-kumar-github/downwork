import React from "react";

const Header = () => {
  return (
    <div className="flex p-2 bg-[#333945] 	">
      <h3 className="text-white ml-5 text-2xl">Dontwork</h3>

      <div className="flex ml-auto p-2 text-white text-base cursor-pointer">
        <h2>👨profile</h2>
        <h2 className="ml-6">logout</h2>
      </div>
    </div>
  );
};

export default Header;
