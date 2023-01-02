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
