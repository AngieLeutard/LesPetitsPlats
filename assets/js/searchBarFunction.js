// General SearchBar

let general_input_searchBar = document.getElementById("general_searchBar");
let general_searchBar_button = document.getElementById("general_searchBar_button");
let general_ul_searchBar = document.getElementById('suggestions');
let general_input_searchBar_x_button = document.getElementById('header_input_button');
let general_input_searchBar_value = "";

general_input_searchBar.addEventListener("change", (e) => {
    general_input_searchBar_value = e.target.value;
});

general_searchBar_button.addEventListener("click", () => {
    removeFiltersIngredients()
    removeFiltersAppliances()
    removeFiltersUstensils()

    updateInputValueToFilter(general_input_searchBar_value);

    general_ul_searchBar.classList.remove("suggestions_wrapper_bg");
    general_ul_searchBar.innerHTML = ``;
})
    
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

        updateInputValueToFilter(general_input_searchBar_value);
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

ingredients_input_searchBar_button.addEventListener("click", () => {
    let reduced_filters = filterReducer(recipes);
    let results = reduced_filters[0].filter((ingredient) => ingredient.toLowerCase().includes(ingredients_input_searchBar_value));
    removeFiltersIngredients()
    displayIngredientsFilters(results);
    console.log(results)
});

appliances_input_searchBar_button.addEventListener("click", () => {
    let reduced_filters = filterReducer(recipes);
    let results = reduced_filters[1].filter((appliance) => appliance.toLowerCase().includes(appliances_input_searchBar_value));
    removeFiltersAppliances()
    displayAppliancesFilters(results);
    console.log(results)
});

ustensils_input_searchBar_button.addEventListener("click", () => {
    let reduced_filters = filterReducer(recipes);
    let results = reduced_filters[2].filter((ustensil) => ustensil.toLowerCase().includes(ustensils_input_searchBar_value));
    removeFiltersUstensils()
    displayUstensilsFilters(results);
    console.log(results)
});