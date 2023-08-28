import React from "react";
import judge1 from "../../assets/judge1.jpeg";

const OrganisingTeam = () => {
  return (
    <div className=" bg-black organising-team-container">
          <h2 className="text-6xl flex px-20 py-20 session-layout-text justify-center  font-bold uppercase  mb-8   ">
     ORGANISING TEAM
      </h2>
      <div className="flex items-center   justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          <div className=" w-48 bg-white/5 border border-gray-200/5 rounded-lg shadow0">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={judge1}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-white">
                Priyanshi Sharma
              </h5>
              <span className="text-sm text-gray-400">Developer </span>
            </div>
          </div>
          <div className=" w-48 bg-white/5 border border-gray-200/5 rounded-lg shadow0">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={judge1}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-white">
                Priyanshi Sharma
              </h5>
              <span className="text-sm text-gray-400">Developer </span>
            </div>
          </div>
          <div className=" w-48 bg-white/5 border border-gray-200/5 rounded-lg shadow0">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={judge1}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-white">
                Priyanshi Sharma
              </h5>
              <span className="text-sm text-gray-400">Developer </span>
            </div>
          </div>
          <div className=" w-48 bg-white/5 border border-gray-200/5 rounded-lg shadow0">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={judge1}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-white">
                Priyanshi Sharma
              </h5>
              <span className="text-sm text-gray-400">Developer </span>
            </div>
          </div>
          <div className=" w-48 bg-white/5 border border-gray-200/5 rounded-lg shadow0">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={judge1}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-white">
                Priyanshi Sharma
              </h5>
              <span className="text-sm text-gray-400">Developer </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisingTeam;
