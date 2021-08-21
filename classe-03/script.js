const pokemon = document.querySelector('#poke');
const nome = document.querySelector('.nome');
const img = document.querySelector('.img');
const tipo = document.querySelector('.tipo');

pokemon.addEventListener('change', function() {
    const promiseRespost = fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.value);


    promiseRespost.then((resposta) => {
        if (!resposta.ok) {
            return;
        }
        const promisebody = resposta.json();

        promisebody.then((body) => {
            nome.textContent = body.name;
            img.src = body.sprites.front_default;
            img.alt = body.name;

            let tiposDePokemon = [];
            body.types.forEach((x) => {
                tiposDePokemon.push(x.type.name);
            });
            tipo.textContent = tiposDePokemon.join(" / ");
        })
    })
});