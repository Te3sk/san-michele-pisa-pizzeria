import logo from "./logo.svg";
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
      <div className="absolute top-2/4 left- [20%] w-[50%] h-[45%] z-10">
        <a
          href="https://maps.app.goo.gl/t6Jd8ASUKCSgj6Ap9" // Sostituisci con il link a Google Maps
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
          title="Passa a trovarci"
        ></a>
      </div>
      <div className="absolute top-2/4 left-[50%] w-[50%] h-[45%] z-10">
        <a
          href="tel:+393385490377" // Sostituisci con il numero di telefono
          className="block w-full h-full"
          title="Ordinare a casa"
        ></a>
      </div>      
    </div>
  );
}

export default App;
