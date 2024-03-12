// Ingredients filter

let ingredients_list = document.querySelector(".ingredient_select");

function displayIngredientsFilters(recipesArray) {

    recipesArray.forEach((selected_value) => {

        let ingredients_wrapper = document.createElement("div");
        ingredients_wrapper.classList.add("list_item_wrapper", "list_item_ingredients");
        let ingredient = document.createElement("li");
        ingredient.classList.add("link_container");
        ingredient.innerHTML = selected_value;
    
        let unselect = document.createElement("span");
        unselect.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
        <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
        <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`);
        unselect.classList.add("unselect");
    
        ingredients_wrapper.appendChild(ingredient);
        ingredients_wrapper.appendChild(unselect);
    
        ingredients_list.appendChild(ingredients_wrapper);
    
        ingredient.addEventListener("click", () => {
    
            updateIngredientsToFilter(selected_value);
    
            // select element
            selectedSticker(ingredient, ingredients_wrapper, unselect);
    
            // yellow sticker
            createNewSticker(selected_value);
    
            let sticker_icon = document.querySelector(".sticker_unselect");
    
            sticker_icon.addEventListener("click", () => {
                unselectedSticker(ingredient, ingredients_wrapper, unselect);
                sticker.remove();
                removeIngredientsToFilter()
            });
    
            let sticker = document.querySelector(".sticker_wrapper");
    
            unselect.addEventListener("click", () => {
                unselectedSticker(ingredient, ingredients_wrapper, unselect);
                sticker.remove(selected_value);
                removeIngredientsToFilter(selected_value)
            });
        });
    });
}