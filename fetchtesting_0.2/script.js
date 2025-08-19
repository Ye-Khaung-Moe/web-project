const generateDog = document.querySelector(".dogFetch .generateDog")
const dogImg = document.querySelector(".dogFetch .dogPhoto")

const fetchingDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch")
        }
        return response.json()
    })
    .then(data => {
        dogImg.src = data.message
    })
    .catch(error => console.log(error))
}

generateDog.addEventListener("click", fetchingDog)