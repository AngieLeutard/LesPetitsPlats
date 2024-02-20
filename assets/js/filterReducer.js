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

// Filters reducer

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
        reduce_us_tableau = removeDuplicates(us_tableau);
    })
});