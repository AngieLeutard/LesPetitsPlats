// General SearchBar

let general_input_searchBar = document.getElementById("general_searchBar");
let general_searchBar_button = document.getElementById("general_searchBar_button");
let general_ul_searchBar = document.getElementById('suggestions');
let general_input_searchBar_x_button = document.getElementById('header_input_button');
let general_input_searchBar_value = "";

general_input_searchBar.addEventListener("change", (e) => {
    general_input_searchBar_value = e.target.value;
});

general_input_searchBar.addEventListener("click", () => {
    if(general_input_searchBar_value != "") {
        removeErrorText()
    }
});

general_searchBar_button.addEventListener("click", () => {
    removeFiltersIngredients()
    removeFiltersAppliances()
    removeFiltersUstensils()

    updateInputValueToFilter(general_input_searchBar_value);

    general_ul_searchBar.classList.remove("suggestions_wrapper_bg");
    general_ul_searchBar.innerHTML = ``;
})

// Autocomplete
    
general_input_searchBar.addEventListener('input', changeAutoComplete);
general_ul_searchBar.addEventListener('click', selectItem);
  
function changeAutoComplete({ target }) {
    let data = target.value;
    general_ul_searchBar.innerHTML = ``;
    general_input_searchBar_x_button.style.display = "block";
    if (data.length >= 3) {
        let autoCompleteValues = autoComplete(data);
        autoCompleteValues.forEach(value => { addItem(value); });
        general_ul_searchBar.classList.add("suggestions_wrapper_bg")
    } else {
        general_ul_searchBar.classList.remove("suggestions_wrapper_bg");
        general_input_searchBar_x_button.style.display = "none";
    }
}

function autoComplete(inputValue) {
    let reduced_filters = filterReducer(recipes);
    let suggestionsArray = [];
    suggestionsArray = reduced_filters[0].concat(reduced_filters[3]);
    return suggestionsArray.filter(
        (value) => value.toLowerCase().includes(inputValue.toLowerCase())
    );
}

function addItem(value) {
    general_ul_searchBar.innerHTML = general_ul_searchBar.innerHTML + `<li>${value}</li>`;
}

function selectItem({ target }) {
    if (target.tagName === 'LI') {
        general_input_searchBar.value = target.textContent;
        general_ul_searchBar.innerHTML = ``;
        general_ul_searchBar.classList.remove("suggestions_wrapper_bg");

        updateInputValueToFilter(general_input_searchBar.value);
    }
}

general_input_searchBar_x_button.addEventListener("click", () => {
    general_input_searchBar_value = "";
    general_input_searchBar.value = general_input_searchBar_value;
    general_ul_searchBar.innerHTML = ``;
    general_input_searchBar_x_button.style.display = "none";
    general_ul_searchBar.classList.remove("suggestions_wrapper_bg");
    updateInputValueToFilter("")

    removeErrorText()
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

let ingredients_input_x_icon = document.getElementById("ingredient_input_button");
let appliances_input_x_icon = document.getElementById("appliance_input_button");
let ustensils_input_x_icon = document.getElementById("ustensils_input_button");

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

ingredients_input_x_icon.addEventListener("click", () => {
    removeFiltersIngredients()

    let reduced_filters = filterReducer(recipes);
    let filtersToDisplay = reduced_filters[0];

    ingredients_input_searchBar_value = "";
    ingredients_input_searchBar.value = ingredients_input_searchBar_value;

    // let filtersIngredients = document.querySelectorAll(".list_item_ingredients");
    // filtersIngredients.forEach(ingredient => ingredient.style.display = "block");
    displayIngredientsFilters(filtersToDisplay)

    ingredients_input_x_icon.style.display = "none"
})

appliances_input_x_icon.addEventListener("click", () => {
    removeFiltersAppliances()

    let reduced_filters = filterReducer(recipes);
    let filtersToDisplay = reduced_filters[1];

    appliances_input_searchBar_value = "",
    appliances_input_searchBar.value = appliances_input_searchBar_value;

    // let filtersAppliances = document.querySelectorAll(".list_item_appliances");
    // filtersAppliances.forEach(appliance => appliance.style.display = "block");
    displayAppliancesFilters(filtersToDisplay)

    appliances_input_x_icon.style.display = "none";
})

ustensils_input_x_icon.addEventListener("click", () => {
    removeFiltersUstensils()

    let reduced_filters = filterReducer(recipes);
    let filtersToDisplay = reduced_filters[2];

    ustensils_input_searchBar_value = "",
    ustensils_input_searchBar.value = ustensils_input_searchBar_value;

    // let filtersUstensils = document.querySelectorAll(".list_item_ustensils");
    // filtersUstensils.forEach(ustensil => ustensil.style.display = "block");
    displayUstensilsFilters(filtersToDisplay)

    ustensils_input_x_icon.style.display = "none";
})

ingredients_input_searchBar_button.addEventListener("click", () => {
    let reduced_filters = filterReducer(recipes);
    let results = reduced_filters[0].filter((ingredient) => ingredient.toLowerCase().includes(ingredients_input_searchBar_value));
    removeFiltersIngredients()
    displayIngredientsFilters(results);
});

appliances_input_searchBar_button.addEventListener("click", () => {
    let reduced_filters = filterReducer(recipes);
    let results = reduced_filters[1].filter((appliance) => appliance.toLowerCase().includes(appliances_input_searchBar_value));
    removeFiltersAppliances()
    displayAppliancesFilters(results);
});

ustensils_input_searchBar_button.addEventListener("click", () => {
    let reduced_filters = filterReducer(recipes);
    let results = reduced_filters[2].filter((ustensil) => ustensil.toLowerCase().includes(ustensils_input_searchBar_value));
    removeFiltersUstensils()
    displayUstensilsFilters(results);
});

// Autocomplete

ingredients_input_searchBar.addEventListener('input', ingredientsAutoComplete);
appliances_input_searchBar.addEventListener('input', appliancesAutoComplete);
ustensils_input_searchBar.addEventListener('input', ustensilsAutoComplete)
  
function ingredientsAutoComplete({ target }) {
    let filtersIngredients = document.querySelectorAll(".list_item_ingredients");
    let reduced_filters = filterReducer(recipes)

    let data = target.value;

    if (data.length >= 1) {
        filtersIngredients.forEach(ingredient => ingredient.style.display = "none");
        ingredients_input_x_icon.style.display = "flex"
    }
    if(data.length >= 2) {
        let autocompleteToDisplay = reduced_filters[0].filter((ingredient) => ingredient.toLowerCase().includes(data.toLowerCase()))
        displayIngredientsFilters(autocompleteToDisplay);
    }
    if(data.length == 0) {
        displayIngredientsFilters(reduced_filters[0]);
        ingredients_input_x_icon.style.display = "none";
    }
}

function appliancesAutoComplete({ target }) {
    let filtersAppliances = document.querySelectorAll(".list_item_appliances");
    let reduced_filters = filterReducer(recipes)

    let data = target.value;

    if (data.length >= 1) {
        filtersAppliances.forEach(appliance => appliance.style.display = "none");
        appliances_input_x_icon.style.display = "flex";
    }
    if(data.length >= 2) {
        let autocompleteToDisplay = reduced_filters[1].filter((appliance) => appliance.toLowerCase().includes(data.toLowerCase()))
        displayAppliancesFilters(autocompleteToDisplay);
    }
    if(data.length == 0) {
        displayAppliancesFilters(reduced_filters[1])
        appliances_input_x_icon.style.display = "none";
    }
}

function ustensilsAutoComplete({ target }) {
    let filtersUstensils = document.querySelectorAll(".list_item_ustensils");
    let reduced_filters = filterReducer(recipes)

    let data = target.value;

    if (data.length >= 1) {
        filtersUstensils.forEach(ustensil => ustensil.style.display = "none");
        ustensils_input_x_icon.style.display = "flex";
    }
    if(data.length >= 2) {
        let autocompleteToDisplay = reduced_filters[2].filter((ustensil) => ustensil.toLowerCase().includes(data.toLowerCase()))
        displayUstensilsFilters(autocompleteToDisplay);
    }
    if(data.length == 0) {
        displayUstensilsFilters(reduced_filters[2])
        ustensils_input_x_icon.style.display = "none";
    }
}
