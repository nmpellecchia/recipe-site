const categories = document.querySelectorAll('.category');
const search = document.querySelector('.search-bar');

async function populateSearchList() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const r = await resp.json();
    const ingList = r.meals

    const suggestions = document.querySelector('#ing-list');

    ingList.forEach(ing => {
        const opt = document.createElement('option');
        opt.value = ing.strIngredient;
        suggestions.appendChild(opt);
    });

};

function handleInput(e) {
    e.preventDefault();
    
    const target = e.target
    const ingredientsList = target.querySelectorAll('option');
    const value = target.querySelector('input').value;
    let valid = false;
    
    ingredientsList.forEach(ingredient => {
        const validValue = ingredient.value
        if(value === validValue) {
            valid = true;
        };
    });
    if(valid) {
        //RegEx to replace spaces with underscores. Needed for API
        const val = (value.toLowerCase()).replace(/ /g,"_");
        getMealIng(val);
    } else {
        window.alert('Plase submit a valid input(From the list)')
    };

    target.reset()
};

async function getMealCat(category) {
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const r = await resp.json(); // randomizer between 0 and length to get meal
    const rdm = Math.floor(Math.random() * ((r.meals).length - 0) + 0);
    const meal = r.meals[rdm];

    getMealName(meal.strMeal);
};

async function getMealName(mealName) {
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    const r = await resp.json();
    const meal = r.meals[0];

    populateRecipe(meal);
};

async function getMealRand() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const r = await resp.json();
    const meal = r.meals[0];

    populateRecipe(meal, true);
};

async function getMealIng(mealIng) {
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealIng}`);
    const r = await resp.json();
    const rdm = Math.floor(Math.random() * ((r.meals).length - 0) + 0);
    const meal = r.meals[rdm];

    getMealName(meal.strMeal);
};

function populateRecipe(meal, rand = false) {
    const recipe = document.querySelector('.recipe-name');
    const recipeImg = document.querySelector('.recipe-img');
    const ingredientList = document.querySelector('.ingredient-list');
    const instructions = document.querySelector('.instructions-text');
    const ingredients = getIngredients(meal);

    recipe.textContent = `${rand ? 'Random' : selectEmoji(meal.strCategory)} | ${meal.strMeal}`;
    recipeImg.src = meal.strMealThumb;
    instructions.innerHTML = meal.strInstructions;
    ingredientList.innerHTML = ingredients.join('');

};

function getIngredients(meal) {
    const ingredients = [];
    const measures = [];
    const list = []
    
    Object.entries(meal).forEach(entrie => {
        if(entrie[0].includes('strIngredient') && entrie[1]) { //Checks if it's an ingredient and not empty
            ingredients.push(entrie[1]);
        }
        if(entrie[0].includes('strMeasure') && entrie[1]) {
            measures.push(entrie[1]);
        };
    });
    for (i=0; i<ingredients.length; i++) {
        list.push(`<li>${measures[i]} - ${ingredients[i]}</li>`);
    };
    return list;
};

function selectEmoji(cat) {
    const categories = {
        Vegetarian: "🥑",
        Beef: "🥩",
        Chicken: "🍗",
        Seafood: "🍤",
        Dessert: "🍰"
    };
    if(categories[cat]) {
        return categories[cat];
    } else {
        return '🔍';
    }
};

populateSearchList();
getMealRand();

search.addEventListener('submit',(e) => handleInput(e));
categories.forEach( cat => {
    cat.addEventListener('click',(e) => {
        getMealCat(e.currentTarget.id)}
)});
