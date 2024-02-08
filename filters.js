// Total recettes

let total_recipes = document.querySelector(".total_recipes");
let total_recipes_value = recipes.length;

total_recipes.innerHTML = `${total_recipes_value} recettes`;
if (total_recipes_value == 1) {
    total_recipes.innerHTML = `${total_recipes_value} recette`;
}

// Remove duplicates

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

// Arrays for filters

let ig_tableau = new Array();
let reduce_ig_tableau = new Array();

let ap_tableau = new Array();
let reduce_ap_tableau = new Array();

let us_tableau = new Array();
let reduce_us_tableau = new Array();

// Filters 

recipes.map((recipe) => {

    // Ingredients
    let ingredients = recipe.ingredients;

    ingredients.map((ingredient) => {
        ig_tableau.push(ingredient.ingredient);
        reduce_ig_tableau = removeDuplicates(ig_tableau);
    })

    // Appareils
    let appliances = recipe.appliance;

    ap_tableau.push(appliances);
    reduce_ap_tableau = removeDuplicates(ap_tableau);

    // Ustensiles
    let ustensils = recipe.ustensils;

    ustensils.map((ustensil) => {
        us_tableau.push(ustensil);
        reduce_us_tableau =removeDuplicates(us_tableau);
    })

})

let ing_list = document.querySelector(".ingredient_select");
let app_list = document.querySelector(".appliance_select");
let ust_list = document.querySelector(".ustensil_select");


reduce_ig_tableau.forEach((e) => {
    let ingredient_li = document.createElement("li");
    ingredient_li.classList.add("link_container");
    ingredient_li.innerHTML = e;
    ing_list.appendChild(ingredient_li);
});

reduce_ap_tableau.forEach((e) => {
    let appliance_li = document.createElement("li");
    appliance_li.classList.add("link_container");
    appliance_li.innerHTML = e;
    app_list.appendChild(appliance_li);
});

reduce_us_tableau.forEach((e) => {
    let ustensil_li = document.createElement("li");
    ustensil_li.classList.add("link_container");
    ustensil_li.innerHTML = e;
    ust_list.appendChild(ustensil_li);
});