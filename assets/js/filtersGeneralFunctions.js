// Filter selected function

function selectedSticker(element, element_wrapper, unselect) {
    element.classList.remove("link_container");
    element.classList.add("link_container_selected");
    element_wrapper.classList.add("selected");
    unselect.style.display = "flex";
}

function unselectedSticker(element, element_wrapper, unselect) {
    element.classList.add("link_container");
    element.classList.remove("link_container_selected");
    element_wrapper.classList.remove("selected");
    unselect.style.display = "none";
    updateRecipes();
}

// Filtrage des recettes

function filterByAppliance(recipes, value) {
    let reduced_recipes = recipes.filter((recipe) => {
       return recipe.appliance == value
    });
    return reduced_recipes;
}

function filterByUstensils(recipes, ustensilsToFilter) {
    let reduced_recipes = recipes.filter(function(recipe) {
        let ustensils = recipe.ustensils;
        return ustensilsToFilter.every((ustensil) => ustensils.includes(ustensil)); 
    });
    return reduced_recipes;
}

function filterByIngredients(recipes, ingredientsToFilter) {
    let reduced_recipes = recipes.filter(function(recipe) {
        let ingredients = recipe.ingredients.map((ingredient) => ingredient.ingredient);
        return ingredientsToFilter.every((ingredient) => ingredients.includes(ingredient));
    });
    return reduced_recipes;
}

function filterWithInputValue(recipes, inputValue) {

    let reduced_recipes = []

    for(let i = 0; i < recipes.length; i++) {

        if(recipes[i].name.toLowerCase().includes(inputValue)) {
            reduced_recipes.push(recipes[i]);
            continue;
        }
        if(recipes[i].description.toLowerCase().includes(inputValue)) {
            reduced_recipes.push(recipes[i]);
            continue;
        }
        for (let y = 0; y < recipes[i].ingredients.length; y++) { 
            if(recipes[i].ingredients[y].ingredient.toLowerCase().includes(inputValue)) {
                reduced_recipes.push(recipes[i]);
            }
        }
    }

    return reduced_recipes
}

function filterRecipes(recipes, ingredients, appliance, ustensils, inputValue) {
    let reduced_recipes = recipes;
    if (ingredients.length > 0) {
        reduced_recipes = filterByIngredients(reduced_recipes, ingredients);
    }
    if (appliance) {
        reduced_recipes = filterByAppliance(reduced_recipes, appliance);
    }
    if (ustensils.length > 0) {
        reduced_recipes = filterByUstensils(reduced_recipes, ustensils);
    }
    if (inputValue != "") {
        reduced_recipes = filterWithInputValue(reduced_recipes, inputValue);
    }
    return reduced_recipes
}

// Remove filters

function removeFiltersIngredients() {
    let filtersToRemove = document.querySelectorAll(".list_item_ingredients");
    filtersToRemove.forEach((filter) => filter.remove())
}

function removeFiltersAppliances() {
    let filtersToRemove = document.querySelectorAll(".list_item_appliances");
    filtersToRemove.forEach((filter) => filter.remove());
}

function removeFiltersUstensils() {
    let filtersToRemove = document.querySelectorAll(".list_item_ustensils");
    filtersToRemove.forEach((filter) => filter.remove())
}