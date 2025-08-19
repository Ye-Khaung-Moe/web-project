const generateJoke = document.querySelector(".jokefetch .joke-btn");
const jokeTitle = document.querySelector(".jokefetch .joke-title");
const jokeAns = document.querySelector(".jokefetch .joke-ans");

const updateJoke = (punchline, setup) => {
    jokeTitle.innerHTML = setup
    jokeAns.innerHTML = punchline
};

const jokefetching = () => {
    fetch("https://official-joke-api.appspot.com/jokes/random/")
    .then(respone => {
        if(!respone.ok){
            throw new Error("Could not fetch data")
        }
        return respone.json()
    })
    .then(data => {
        updateJoke(data.punchline, data.setup)
    })
    .catch(error => console.log(error))
}

generateJoke.addEventListener("click", jokefetching)