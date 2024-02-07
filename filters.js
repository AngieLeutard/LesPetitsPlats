// Total recettes

let total_recipes = document.querySelector(".total_recipes");
let total_recipes_value = recipes.length;

total_recipes.innerHTML = `${total_recipes_value} recettes`;
if (total_recipes_value == 1) {
    total_recipes.innerHTML = `${total_recipes_value} recette`;
}

// Filters
recipes.map((recipe) => {

    // Ingredients
    let ing_list = document.querySelector(".ingredient_select");
    let ingredients = recipe.ingredients;

    ingredients.map((ingredient) => {

        let ingredient_li = document.createElement("li");
        ingredient_li.classList.add("link_container");
        ingredient_li.innerHTML = ingredient.ingredient;

        ing_list.appendChild(ingredient_li);
    })

    // Appareils

    let app_list = document.querySelector(".appliance_select");
    let appliances = recipe.appliance;

    let appliance_li = document.createElement("li");
    appliance_li.classList.add("link_container");
    appliance_li.innerHTML = appliances;

    app_list.appendChild(appliance_li);

    // Ustensiles
    let ust_list = document.querySelector(".ustensil_select");
    let ustensils = recipe.ustensils;

    ustensils.map((ustensil) => {

        let ustensil_li = document.createElement("li");
        ustensil_li.classList.add("link_container");
        ustensil_li.innerHTML = ustensil;

        ust_list.appendChild(ustensil_li);
    })

})
    


