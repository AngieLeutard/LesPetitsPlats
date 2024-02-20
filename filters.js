// Total recettes

let total_recipes = document.querySelector(".total_recipes");
let total_recipes_value = recipes.length;

total_recipes.innerHTML = `${total_recipes_value} recettes`;
if (total_recipes_value == 1) {
    total_recipes.innerHTML = `${total_recipes_value} recette`;
}

// Remove duplicates

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

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
        reduce_us_tableau =removeDuplicates(us_tableau);
    })

})

// Ingredients filter

let ing_list = document.querySelector(".ingredient_select");

reduce_ig_tableau.forEach((e) => {

    let ing_wrapper = document.createElement("div");
    ing_wrapper.classList.add("list_item_wrapper");
    let ingredient_li = document.createElement("li");
    ingredient_li.classList.add("link_container");
    ingredient_li.innerHTML = e;

    let unselect = document.createElement("span");
    unselect.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`);
    unselect.classList.add("unselect");

    ing_wrapper.appendChild(ingredient_li);
    ing_wrapper.appendChild(unselect);

    ing_list.appendChild(ing_wrapper);

    ingredient_li.addEventListener("click", () => {

        // select element
        selectedSticker(ingredient_li, ing_wrapper, unselect);

        // create new sticker
        createNewSticker(e);

        let stickerIcon = document.querySelector(".sticker_unselect");

        stickerIcon.addEventListener("click", () => {
            // unselect sticker element 
            unselectedSticker(ingredient_li, ing_wrapper, unselect);
            sticker.remove();
        });

        let sticker = document.querySelector(".sticker_wrapper");

        unselect.addEventListener("click", () => {
            // unselect element
            unselectedSticker(ingredient_li, ing_wrapper, unselect);
            sticker.remove();
        });
    });

});

// Appliance filter

let app_list = document.querySelector(".appliance_select");

reduce_ap_tableau.forEach((e) => {

    let app_wrapper = document.createElement("div");
    app_wrapper.classList.add("list_item_wrapper");
    let appliance_li = document.createElement("li");
    appliance_li.classList.add("link_container");
    appliance_li.innerHTML = e;

    let unselect = document.createElement("span");
    unselect.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`);
    unselect.classList.add("unselect");

    app_wrapper.appendChild(appliance_li);
    app_wrapper.appendChild(unselect);

    app_list.appendChild(app_wrapper);

    appliance_li.addEventListener("click", () => {

        // select element
        selectedSticker(appliance_li, app_wrapper, unselect);

        // create new sticker
        createNewSticker(e)

        let stickerIcon = document.querySelector(".sticker_unselect");

        stickerIcon.addEventListener("click", () => {
            // unselect sticker element 
            unselectedSticker(appliance_li, app_wrapper, unselect);
            sticker.remove();
        });

        let sticker = document.querySelector(".sticker_wrapper");

        unselect.addEventListener("click", () => {
            // unselect element
            unselectedSticker(appliance_li, app_wrapper, unselect);
            sticker.remove();
        });
    })
});

// Ustensils filter

let ust_list = document.querySelector(".ustensil_select");

reduce_us_tableau.forEach((e) => {
    
    let ust_wrapper = document.createElement("div");
    ust_wrapper.classList.add("list_item_wrapper");
    let ustensil_li = document.createElement("li");
    ustensil_li.classList.add("link_container");
    ustensil_li.innerHTML = e;

    let unselect = document.createElement("span");
    unselect.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`);
    unselect.classList.add("unselect");

    ust_wrapper.appendChild(ustensil_li);
    ust_wrapper.appendChild(unselect);

    ust_list.appendChild(ust_wrapper);

    ustensil_li.addEventListener("click", () => {
        // select element
        selectedSticker(ustensil_li, ust_wrapper, unselect);

        // create new sticker
        createNewSticker(e)

        // element de la list unselect
        let sticker = document.querySelector(".sticker_wrapper");

        unselect.addEventListener("click", () => {
            unselectedSticker(ustensil_li, ust_wrapper, unselect);
            sticker.remove();
        });

        // etiquettes jaune unselect

        let stickerIcon = document.querySelector(".sticker_unselect");
        stickerIcon.addEventListener("click", () => {
            unselectedSticker(ustensil_li, ust_wrapper, unselect);
            sticker.remove();
        });
    })
});