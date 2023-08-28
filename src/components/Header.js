import React from "react";

const Header = () => {
  const navLinks = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/prizes",
      display: "Prizes",
    },
    {
      path: "/sponsors",
      display: "Sponsors",
    },
  
  ];
  return (
    <div className="w-full text-white py-10 flex justify-between items-center border-b-[1px] border-b-gray-100">
      <div>
        <ul className="flex gap-6 text-sm uppercase font-semibold">
        {navLinks.map((data,index)=>{
          return(
          <li>{data.display}</li>
        )})}
        </ul>
      </div>
      <div>
        <button className="border border-gray-100 py-1 px-6 rounded-xl text-base uppercase font-semibold">
       Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
