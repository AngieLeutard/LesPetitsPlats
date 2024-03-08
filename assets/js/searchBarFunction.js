// General SearchBar

let general_input_searchBar = document.getElementById("general_searchBar");
let general_searchBar_button = document.getElementById("general_searchBar_button");

let general_input_searchBar_value = "";

general_input_searchBar.addEventListener("change", (e) => {
    general_input_searchBar_value = e.target.value;
    // if (input_searchBar_value >= 3) {
        
    // }
});

general_searchBar_button.addEventListener("click", () => {
    removeFiltersIngredients()
    removeFiltersAppliances()
    removeFiltersUstensils()

    updateInputValueToFilter(general_input_searchBar_value);
})

// Filters searchBar

let ingredients_input_searchBar = document.getElementById("ingredients_searchBar");
let appliances_input_searchBar = document.getElementById("appliances_searchBar");
let ustensils_input_searchBar = document.getElementById("ustensils_searchBar");

let ingredients_input_searchBar_button = document.getElementById("ingredients_searchBar_button");
let appliances_input_searchBar_button = document.getElementById("appliances_searchBar_button");
let ustensils_input_searchBar_button = document.getElementById("ustensils_searchBar_button");

let ingredients_input_searchBar_value = "";
let appliances_input_searchBar_value = "";
let ustensils_input_searchBar_value = "";

// Get value

ingredients_input_searchBar.addEventListener("change", (e) => {
    ingredients_input_searchBar_value = e.target.value;
});

appliances_input_searchBar.addEventListener("change", (e) => {
    appliances_input_searchBar_value = e.target.value;
});

ustensils_input_searchBar.addEventListener("change", (e) => {
    ustensils_input_searchBar_value = e.target.value;
});

// EventListener 

ingredients_input_searchBar_button.addEventListener("click", () => {
    let reduced_filters = filterReducer(recipes);
    let results = reduced_filters[0].filter((ingredient) => ingredient.toLowerCase().includes(ingredients_input_searchBar_value));
    removeFiltersIngredients()
    displayIngredientsFilters(results);
    console.log(results)
});

appliances_input_searchBar_button.addEventListener("click", () => {
    let reduced_filters = filterReducer(recipes);
    let results = reduced_filters[1].filter((appliance) => appliance.toLowerCase().includes(appliances_input_searchBar_value));
    removeFiltersAppliances()
    displayAppliancesFilters(results);
    console.log(results)
});

ustensils_input_searchBar_button.addEventListener("click", () => {
    let reduced_filters = filterReducer(recipes);
    let results = reduced_filters[2].filter((ustensil) => ustensil.toLowerCase().includes(ustensils_input_searchBar_value));
    removeFiltersUstensils()
    displayUstensilsFilters(results);
    console.log(results)
});