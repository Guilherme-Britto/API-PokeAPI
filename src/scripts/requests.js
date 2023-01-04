/* Monte a lógica das requisições aqui */
async function getPokemon () {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        renderCards(res.results)
        return res
    })

    return pokemon
}

getPokemon()

async function getPokemonByName (name) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        renderCards([res])
        return res
    })

    return pokemon
}



function renderSearch(){

    const input = document.querySelector('input')
    const button = document.querySelector('button')

    button.addEventListener('click', () => {

        if(input.value == ""){
            return getPokemon()
        }

        getPokemonByName (input.value)
    })
}

renderSearch()