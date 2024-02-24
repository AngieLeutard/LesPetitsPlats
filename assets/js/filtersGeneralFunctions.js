// Yellow sticker function

function createNewSticker(name) {
    
    let sticker_wrapper = document.createElement("div");
    sticker_wrapper.classList.add("sticker_wrapper");
    let sticker_text = document.createElement("p");
    sticker_text.classList.add("sticker_text");
    let sticker_unselect = document.createElement("span");
    sticker_unselect.classList.add("sticker_unselect");

    sticker_wrapper.appendChild(sticker_text);
    sticker_wrapper.appendChild(sticker_unselect);

    sticker_text.innerHTML = name;
    sticker_unselect.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`);

    let section = document.querySelector(".stickers_section");
    section.appendChild(sticker_wrapper);
}

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
}

// Filtrage des recettes

function filterByAppliance(recipes, value) {
    let reduced_recipes = recipes.filter((recipe) => {
       return recipe.appliance == value
    });
    return reduced_recipes;
}

function filterByUstensils(recipes, value) {
    let reduced_recipes = recipes.filter(function(recipe) {
        let ustensils = recipe.ustensils;
        return ustensils.find((us) => us == value) == value; 
    });

    return reduced_recipes;
}

function filterByIngredients(recipes, value) {
    let reduced_recipes = recipes.filter(function(recipe) {
        console.log(value)
        let ingredients = recipe.ingredients;
        let reduced_ingredients = ingredients.find((ingredient) => ingredient.ingredient == value);
        if (reduced_ingredients) {
            return reduced_ingredients.ingredient == value;
        }
        return false;
    });

    return reduced_recipes;
}

function filterRecipes(recipes, ingredients, appliance, ustensils, searchInput) {
    let reduced_recipes = recipes;
    if (ingredients.length > 0) {
        reduced_recipes = ingredients.map((ingredient) => filterByIngredients(reduced_recipes, ingredient))[0];
    }
    if (appliance) {
        reduced_recipes = filterByAppliance(reduced_recipes, appliance);

    }
    if (ustensils.length > 0) {
        reduced_recipes = ustensils.map((ustensil) => filterByUstensils(reduced_recipes, ustensil))[0];

    }
    if (searchInput) {
        
    }

    return reduced_recipes
}