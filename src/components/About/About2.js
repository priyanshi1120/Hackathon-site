import React from "react";
import "./about.css";
import moonImg from "../../assets/moon.png";
const About2 = () => {
  return (
    <>
    <section className="about flex justify-center  items-center">
      <div class="element  md:p-14 p-2  lg:p-9 sm:p-6 xs-p-2">
        <div>
          <h2 className="text-6xl flex  justify-center  font-bold uppercase mt-8 mb-16  ">
            About Us
          </h2>
          <p className="px-20 text-justify	">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            fugit offici is molestias repellendus adipisci aliquid explicabo ea
            perferendis vero id.
            <br />
            fugit offici is molestias repellendus adipisci aliquid explicabo ea
            perferendis vero id.onsectetur adipisicing elit. Veritatis totam rem
            dolores officia voluptatem rerum architecto ducimus tempore adipisci
            qui!
            <br />
            endus adipisci aliquid explicabo ea perferendis vero id. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Commodi fugit
            officiis molestias repell
          </p>
        </div>
     
      </div>
      
    </section>
    <div className="moonImg"><img src={moonImg} width={200} alt=""/></div>
</>
  );
};

export default About2;
