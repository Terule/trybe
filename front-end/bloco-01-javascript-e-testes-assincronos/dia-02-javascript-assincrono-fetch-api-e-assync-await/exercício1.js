// const fetch = require('node-fetch');
function append(data) {
  const pokedex = document.querySelector('#pokedex');
  const pokeCard = document.createElement('div');
  const pokemonName = document.createElement('div');
  const divImg = document.createElement('div');
  const pokemonImg = document.createElement('img');
  
  pokemonImg.src = data.sprites.other['official-artwork'].front_default;
  divImg.appendChild(pokemonImg)
  pokemonName.innerText	= `#${data.id}
  ${data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1)}`;

  pokeCard.classList.add('card')
  pokeCard.appendChild(divImg)
  pokeCard.appendChild(pokemonName)


  pokedex.appendChild(pokeCard)
}

function getAllPokemon () {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=905&offset=0')
    .then((response) => response.json())
    .then((response1) => response1.results.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response2) => response2.json())
        .then((data) => append(data))
    }));
}

function getPokemon(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => append(data));
};

window.onload = getAllPokemon;