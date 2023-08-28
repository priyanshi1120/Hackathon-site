import React from "react";
import smoke from "../assets/smoke.gif";
import smoke2 from "../assets/smoke2.gif";

import { useState, useEffect } from "react";
import CountDown from "./Countdown/CountDown";

const Banner = () => {
  const [imageLoaded, setImageLoaded] = useState(true);
  console.log("img", imageLoaded);

  useEffect(() => {
    const img = new Image();
    img.src = smoke;
    img.onload = () => {
      setImageLoaded(true);
      setTimeout(() => {
        setImageLoaded(false);
      }, 7000); // Change 5000 to the desired time in milliseconds
    };
  }, []);
  

  return (
    <div className="w-full flex justify-content-center m-auto items-center">
      <section style={{ position: "relative", width: "100%", height: "100%" }}>
        <h2 className="firstSubtitle uppercase text-lg font-medium">A hackathon like never before</h2>
        <div>
        {imageLoaded ? <img src={smoke} alt="" /> : <img src={smoke2} alt="" /> }

          <h1>
            {/* <span>A HACKATHON LIKE NEVER BEFORE</span> */}
            {/* <br/> */}
            <span>H</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
            <span>A</span>
            <span>T</span>
            <span>H</span>
            <span>O</span>
            <span>N</span>
          </h1>
          <div class="countdown-container">
            <div id="countdown" class="text-2xl font-bold text-white mt-4">
              <h2 className="uppercase">largest hackathon in SVIET</h2>
              <h2 className="capitalize mb-7"> 27th - 29th october 2023</h2>
              <CountDown />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
