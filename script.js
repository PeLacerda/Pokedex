const fetchpokemon = async (pokemon) => {
    
    const APIresponce = await fetch('https://pokeapi.co/api/v2/pokemon/$(pokemon)');
    console.log(APIresponce);

}

fetchpokemon();