let ingredientsToFilter = [];
let applianceToFilter = "";
let ustensilsToFilter = [];

function updateIngredientsToFilter(ingredient) {
    console.log(ingredient)
    ingredientsToFilter.push(ingredient);
    updateRecipes();
}

function updateRecipes() {
    console.log(ingredientsToFilter)
    let recipesToDisplay = filterRecipes(recipes, ingredientsToFilter, applianceToFilter, ustensilsToFilter, "");
    console.log(recipesToDisplay)
    displayRecipesGallery(recipesToDisplay);
}