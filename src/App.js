import About2 from "./components/About/About2";
import Banner from "./components/Banner";
import CountDown from "./components/Countdown/CountDown";
import Design from "./components/Design";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Judges from "./components/Judges/Judges";
import OrganisingTeam from "./components/Organising/OrganisingTeam";
import Session from "./components/Session/Session";
import Sponsers from "./components/Sponsers/Sponsers";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[#000] bg-no-repeat bg-center bg-cover relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-white">
          <Header />
          <Banner />
        </div>
        <div className="w-full h-full absolute top-0 left-0">
          <Design />
        </div>
      </div>
      
        <About2 />
   

    
      <Session/>
     
     
       <Sponsers/>
      
      <Judges/>
      <OrganisingTeam/>
      <Footer/>
    </>
  );
}

export default App;
