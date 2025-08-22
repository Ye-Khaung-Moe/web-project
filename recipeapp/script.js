const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");

//Funtion to Get Recipe / Recipe container
const fetchRecipe = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipe Data...</h2>"
   try{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        const respone = await data.json();
        console.log(respone.meals[0])

        recipeContainer.innerHTML = " "
        respone.meals.forEach(meal => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <p><span> ${meal.strArea}</span> Dish</p>
                <p>Belong To <span>${meal.strCategory}</span> Category </p>
            `
            const button = document.createElement('button');
            button.textContent = "View Recipe";
            recipeDiv.appendChild(button);

            //Adding EventListener to recipe button
            button.addEventListener("click", () => {
                openRecipePopup(meal)
            });

            recipeContainer.appendChild(recipeDiv)
        });
    } catch {
        recipeContainer.innerHTML = "<h2>Recipe Not Found :( </h2>"
    }
}

//Function to fetch Ingredients and Measurement 
const fetchIngredients = (meal) => {
    let ingredientsList = "";
    for(let i=1; i<=20; i++){
        const ingredient = meal[`strIngredient${i}`];
        if(ingredient){
            const measure = meal[`strMeasure${i}`];
            ingredientsList += `<li>${measure} ${ingredient}</li>`
        }
        else{
            break;
        }
    }
    return ingredientsList;
}

//Function to Open Recipe Popup
const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
        <h2 class="recipeName">${meal.strMeal}</h2>
        <h3>Ingredents:</h3>
        <ul class="ingredientList">${fetchIngredients(meal)}</ul>
        <div class="recipeInstructions">
            <h3>Instruction:</h3>
            <p >${meal.strInstructions}</p>
        </div>
    `
    
    recipeDetailsContent.parentElement.style.display = "block";
}

//Function of Close Button
recipeCloseBtn.addEventListener('click', () =>{
    recipeDetailsContent.parentElement.style.display = "none";
});

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if(!searchInput){
        recipeContainer.innerHTML = `<h2>Type The Meal in Searchbox</h2>`
        return;
    }
    fetchRecipe(searchInput)
});