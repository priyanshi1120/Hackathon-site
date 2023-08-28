import React from "react";
import judge1 from '../../assets/judge1.jpeg'

const Judges = () => {
  return (
    <div className="bg-black pb-40">
      <h2 className="text-6xl flex px-20 pt-20 session-layout-text justify-center  font-bold uppercase  mb-8   ">
        JUDGES
      </h2>
      <h4 className="text-2xl flex   justify-center italic text-white  mb-16 ">Coming Soon </h4>
      <div className="flex items-center blur-div   justify-center bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={judge1} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="text-3xl font-bold text-white">Priyanshi </h1>
                <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere provident aperiam quia.
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                    See more
                </button>
              </div>
            </div>
          </div>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={judge1} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="text-3xl font-bold text-white">Priyanshi </h1>
                <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere provident aperiam quia.
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                    See more
                </button>
              </div>
            </div>
          </div>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={judge1} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="text-3xl font-bold text-white">Priyanshi </h1>
                <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere provident aperiam quia.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;
