let ingredientsToFilter = [];
let applianceToFilter = "";
let ustensilsToFilter = [];
let inputValueToFilter = "";
let recipesToDisplay = [];


// add element to filter

function updateIngredientsToFilter(ingredient) {
    ingredientsToFilter.push(ingredient);
    updateRecipes();
}

function updateAppliancesToFilter(appliance) {
    applianceToFilter = appliance;
    updateRecipes();
}

function updateUstensilsToFilter(ustensil) {
    ustensilsToFilter.push(ustensil);
    updateRecipes();
}

function updateInputValueToFilter(inputValue) {
    inputValueToFilter = inputValue;
    updateRecipes();
}

// remove element to filter

function removeIngredientsToFilter(ingredient) {
    ingredientsToFilter = ingredientsToFilter.filter(item => item !== ingredient)
    updateRecipes();
    console.log(ingredientsToFilter)
}

function removeAppliancesToFilter() {
    applianceToFilter = "";
    updateRecipes();
    console.log(applianceToFilter)
}

function removeUstensilsToFilter(ustensil) {
    ustensilsToFilter = ustensilsToFilter.filter(item => item !== ustensil)
    updateRecipes();
    console.log(ustensil)
}

function updateRecipes() {
    recipesToDisplay = filterRecipes(recipes, ingredientsToFilter, applianceToFilter, ustensilsToFilter, inputValueToFilter);
    displayRecipesGallery(recipesToDisplay);
    displayTotalRecipes(recipesToDisplay.length);
    removeFiltersIngredients();
    removeFiltersAppliances();
    removeFiltersUstensils();
    let reduced_filters = filterReducer(recipesToDisplay);
    displayIngredientsFilters(reduced_filters[0]);
    displayAppliancesFilters(reduced_filters[1]);
    displayUstensilsFilters(reduced_filters[2]);
}