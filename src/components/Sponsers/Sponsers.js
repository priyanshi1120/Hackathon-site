import "./Sponsers.css";
import bg from "../../assets/Screenshot 2023-08-25 163625.png";
const Sponsers = () => {
  return (
    <div className=" sponser-container text-center bg-black ">
      <span className=" mx-auto session-layout-text text-7xl font-bold text-center text-white  p-5 -mt-16">
        SPONSORS
      </span>
      <h4 className="text-2xl flex pt-10  justify-center italic text-white  mb-16 ">
        Coming Soon{" "}
      </h4>

      <div className="sponsers ">
        <img className="m-auto p-32" src={bg} alt="" />
      </div>
    </div>
  );
};

export default Sponsers;
