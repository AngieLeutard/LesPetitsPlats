let card_wrapper = document.querySelector(".recipes_cards_wrapper");

function displayRecipesGallery(arr) {
    removeCards()
    arr.map((recipe) => {

        // card
        let card = document.createElement("div");
        card.classList.add("recipe_card");
    
        // picture
        let picture = document.createElement("img");
        picture.classList.add("recipe_card_picture");
        picture.setAttribute("src", `./assets/images/${recipe.image}`);
    
        // time
        let time = document.createElement("div");
        time.classList.add("recipe_card_time");
    
        let time_text = document.createElement("p");
        time_text.classList.add("recipe_card_time_text");
        time_text.innerHTML = `${recipe.time}min`;
    
        time.appendChild(time_text);
    
        // recipe description wrapper
        let description_wrapper = document.createElement("div");
        description_wrapper.classList.add("recipe_card_description_wrapper");
    
        // name
        let recipe_name = document.createElement("h2");
        recipe_name.classList.add("recipe_card_name");
        recipe_name.innerHTML = recipe.name;
    
        // recette
        let recipe_title = document.createElement("p");
        recipe_title.classList.add("recipe_card_title");
        recipe_title.innerHTML = "RECETTE";
    
        // description
        let recipe_description = document.createElement("p");
        recipe_description.classList.add("recipe_card_description");
        recipe_description.innerHTML = recipe.description;
    
        // recette
        let recipe_ingredients = document.createElement("p");
        recipe_ingredients.classList.add("recipe_card_title");
        recipe_ingredients.innerHTML = "INGREDIENTS";
    
        // recipe ingredients wrapper
        let ingredients_wrapper = document.createElement("div");
        ingredients_wrapper.classList.add("recipe_card_ingredients_wrapper");
    
        let ingredients = recipe.ingredients;
    
        ingredients.map((ingredient) => {
    
            let ingredient_details = document.createElement("div");
            ingredient_details.classList.add("ingredient_wrapper");
            
            let ingredient_name = document.createElement("p");
            ingredient_name.classList.add("ingredient_name");
            ingredient_name.innerHTML = ingredient.ingredient;
        
            let ingredient_quantity = document.createElement("p");
            ingredient_quantity.classList.add("ingredient_quantity");
            ingredient_quantity.innerHTML = `${ingredient.quantity}`;
    
            if (ingredient.unit) {
                ingredient_quantity.innerHTML = `${ingredient.quantity} ${ingredient.unit}`;
            } else if (ingredient.quantity == undefined) {
                ingredient_quantity.innerHTML = "";
            }
    
            ingredient_details.appendChild(ingredient_name);
            ingredient_details.appendChild(ingredient_quantity);
    
            ingredients_wrapper.appendChild(ingredient_details);
        })
    
        // appendChild
    
        description_wrapper.appendChild(recipe_name);
        description_wrapper.appendChild(recipe_title);
        description_wrapper.appendChild(recipe_description);
        description_wrapper.appendChild(recipe_ingredients);
        description_wrapper.appendChild(ingredients_wrapper);
    
        card.appendChild(picture);
        card.appendChild(time);
        card.appendChild(description_wrapper);
    
        card_wrapper.appendChild(card);
    })

    if(arr.length == 0) {
        emptyGallery(general_input_searchBar_value)
    }
}

window.addEventListener("load", () => {
    displayRecipesGallery(recipes);
    displayTotalRecipes(recipes.length);
    let reduced_filters = filterReducer(recipes);
    displayIngredientsFilters(reduced_filters[0]);
    displayAppliancesFilters(reduced_filters[1]);
    displayUstensilsFilters(reduced_filters[2]);
});

function removeCards() {
    let cardsToRemove = document.querySelectorAll(".recipe_card");
    cardsToRemove.forEach((card) => card.remove())
}

function emptyGallery(inputValue) {
    let errorText = document.createElement("p");
    errorText.classList.add("errorText");
    errorText.textContent = `Aucune recette ne contient "${inputValue}", vous pouvez chercher "tarte aux pommes", "poisson", etc.`

    card_wrapper.appendChild(errorText)
}

function removeErrorText() {
    let errorText = document.querySelector(".errorText");
    errorText.remove()
}

