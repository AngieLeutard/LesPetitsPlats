// Total recettes

let total_recipes = document.querySelector(".total_recipes");
let total_recipes_value = 0;

function displayTotalRecipes(total_recipes_value) {
    total_recipes.innerHTML = `${total_recipes_value} recettes`;
    if (total_recipes_value == 1) {
        total_recipes.innerHTML = `${total_recipes_value} recette`;
    }
}

