import maps from "./assets/maps-and-flags.png";
import telephone from "./assets/phone-call.png";
import landing from "./assets/san-mich.jpg";
import "./App.css";

function App() {
  return (
    <div className="">
      {/* Div interno fisso */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={landing} alt="logo" className="w-full object-cover" />
      </div>

      {/* Rettangolo header sotto l'immagine */}
      <div className="absolute top-0 w-full bg-[#ffda55] h-32 z-[-1]"></div>

      {/* Rettangolo footer sotto l'immagine */}
      <div className="absolute bottom-0 w-full bg-[#fab31b] h-32 z-[-1]"></div>

      {/* Bottoni invisibili */}
      <div className="absolute top-[76%] left-[21%] w-[22%] h-[8%] z-9 bg-[#fab31b] rounded-lg"></div>
      <div className="absolute top-[76%] left-[57%] w-[22%] h-[8%] z-9 bg-[#fab31b] rounded-lg"></div>
      <button
        className="absolute top-[77%] left-[21%] w-[22%] h-[6%] z-10 shadow-inner shadow-[#ffffff] bg-[#d63000] rounded-lg flex flex-row items-center justify-center"
        onClick={() =>
          window.open("https://maps.app.goo.gl/t6Jd8ASUKCSgj6Ap9", "_blank")
        }
      >
        <img
          src={maps}
          alt="maps"
          className="h-[80%] absolute left-1/2 transform -translate-x-1/2"
        />
      </button>
      <button
        className="absolute top-[77%] left-[57%] w-[22%] h-[6%] z-10 bg-[#d63000] shadow-[#ffffff] shadow-inner rounded-lg flex flex-row items-center"
        onClick={() =>
          window.open("tel:+393385490377", "_blank")
        }
      >
        <img
          src={telephone}
          alt="maps"
          className="h-[78%] absolute left-1/2 transform -translate-x-1/2"
        />
      </button>
    </div>
  );
}

export default App;
