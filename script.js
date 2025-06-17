const pokemonNum = document.querySelector('.pokemon_num');
const pokemonName = document.querySelector('.pokemon_name');
const pokemonImg = document.querySelector('pokemon_img');

const fetchpokemon = async (pokemon) => {
    const APIresponce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponce.json();
    return data;
}

const RenderPokemon = async (pokemon) => {
    const data = await fetchpokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonNum.innerHTML = data.id;
    pokemonImg.src = data['sprites']['version']['generation-v']['black-white']
}

RenderPokemon('25')