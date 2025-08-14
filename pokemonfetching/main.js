// fetching pokemon data

/* Data Fetching with Fetch / then method
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))
*/

//Data Fetching with Async Method

fetchData()

async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could Not Fetch Data");
        }
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }catch(error){
        console.error(error)
    }
}