const fetchpokemon = async (pokemon) => {
    
    const APIresponce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await APIresponce.json();

    console.log(APIresponce);
}

fetchpokemon('25');