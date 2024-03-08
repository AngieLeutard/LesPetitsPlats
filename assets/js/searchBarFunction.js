let input_searchBar = document.getElementById("input_searchBar");
let searchBar_button = document.getElementById("searchBar_button");

let input_searchBar_value = "";

input_searchBar.addEventListener("change", (e) => {
    input_searchBar_value = e.target.value;
    console.log(input_searchBar_value)
    // if (input_searchBar_value >= 3) {
        
    // }
});

searchBar_button.addEventListener("click", () => {
    removeFiltersIngredients()
    removeFiltersAppliances()
    removeFiltersUstensils()

    updateInputValueToFilter(input_searchBar_value);
})


// Au fur et à mesure du remplissage les mots clés ne correspondant pas à la
// frappe dans le champ disparaissent. Par exemple, si l’utilisateur entre “coco” dans
// la liste d’ingrédients, seuls vont rester “noix de coco” et “lait de coco”.

