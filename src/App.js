import imagenRM from "./img/rick-morty.png"
import credencial from "./img/credentials.png"
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";


function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  console.log(characters)

  return (
    <div className="App">
      <header className="App-header">
      
        <h1 className="title"> Rick and Morty </h1>
        <h2 className="title-2"> Fhatima Reyes Alejandre - S20006773</h2>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imagenRM} alt="Rick & Morty" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
            <img src={credencial} alt="center" width={190} align="left"></img>
          </>
        )}
      </header>
      
    </div>
    
  );
}

export default App;
