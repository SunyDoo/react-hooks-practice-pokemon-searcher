import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeList, setPokeList] = useState([])
  const [searchPoke, setSearchPoke] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then((r) => r.json())
      .then((pokes) => setPokeList(pokes));
  }, []);

  const pokeToDisplay = pokeList.filter((mon) => {
    if (searchPoke === "") {
      return true;
    } else {
      return mon.name.toLowerCase().includes(searchPoke)
    }
  })

  function handleAddPoke (pokeData){
    setPokeList([...pokeList, pokeData]);
  }



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm postNewPoke={handleAddPoke}/>
      <br />
      <Search onSearchChange={setSearchPoke} search ={searchPoke} />
      <br />
      <PokemonCollection pokemon={pokeToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
