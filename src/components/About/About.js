import React from "react";
import aboutBg from "../../assets/about-bg.png";
const About = () => {
  return (
    <section className="">
      <div className="max-w-screen-xl m-auto">
        <div className="grid grid-cols-2 p-6  ">
          <div className="flex justify-center">
            <div>
              <h2 className="text-6xl font-bold uppercase my-20 ">About Us</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi fugit officiis molestias repellendus adipisci aliquid
                explicabo ea perferendis vero id.
              </p>
              <p className="my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi fugit officiis molestias repellendus adipisci aliquid
                explicabo ea perferendis vero id.
              </p>
            </div>
          </div>
          <div animate={{ scale: 2 }} className="">
            <img src={aboutBg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
