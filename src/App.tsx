import React, { FunctionComponent, useEffect, useState } from "react";
import POKEMONS from "./models/mock-pokemon";
import Pokemon from "./models/pokemon";

const App: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div>
      <h1>Pokédex</h1>
      <p>il y a {pokemons.length} pokemons !</p>
    </div>
  );
};

export default App;
