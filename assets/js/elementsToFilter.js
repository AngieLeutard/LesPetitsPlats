let ingredientsToFilter = [];
let applianceToFilter = "";
let ustensilsToFilter = [];
let inputValueToFilter = "";

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
    ingredientsToFilter.splice(ingredient);
    updateRecipes();
}

function removeUstensilsToFilter(ustensil) {
    ustensilsToFilter.splice(ustensil);
    updateRecipes();
}

function updateRecipes() {
    let recipesToDisplay = filterRecipes(recipes, ingredientsToFilter, applianceToFilter, ustensilsToFilter, inputValueToFilter);
    console.log(recipesToDisplay);
    displayRecipesGallery(recipesToDisplay);
    displayTotalRecipes(recipesToDisplay.length);
    filterReducer(recipesToDisplay);
    displayIngredientsFilters(reduce_filterIngredients);
}