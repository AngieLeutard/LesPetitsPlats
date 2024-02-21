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

function selectedSticker(e_li, e_wrapper, unselect) {
    e_li.classList.remove("link_container");
    e_li.classList.add("link_container_selected");
    e_wrapper.classList.add("selected");
    unselect.style.display = "flex";
}

function unselectedSticker(e_li, e_wrapper, unselect) {
    e_li.classList.add("link_container");
    e_li.classList.remove("link_container_selected");
    e_wrapper.classList.remove("selected");
    unselect.style.display = "none";
}

// Filtrage des recettes

function filterByAppliance(value) {
    let reduced_recipes = recipes.filter(function(recipe) {
        return recipe.appliance == value; 
    });
    console.log(reduced_recipes);
}

function filterByUstensils(value) {
    let reduced_recipes = recipes.filter(function(recipe) {
        let ustensils = recipe.ustensils;
        return ustensils.find((us) => us == value) == value; 
    });
    console.log(reduced_recipes);
}

function filterByIngredients(value) {
    let reduced_recipes = recipes.filter(function(recipe) {
        let ingredients = recipe.ingredients;
        ingredients.map((obj) => {
            let ing = obj.ingredient;
            console.log(ing)
            return ing == value;
        })
    });
    console.log(reduced_recipes);
}

