let inputSearchBar = document.getElementById("input_searchBar");

inputSearchBar.addEventListener("change", (e) => {
    let input_searchBar_value = e.target.value;
    console.log(input_searchBar_value);
});

// function searchRecipe() {

//     inputSearchBar.addEventListener("change", (e) => {
//         let input_searchBar_value = e.target.value;
//         console.log(input_searchBar_value);

//         if (input_searchBar_value = ingredient) {

//             filterByIngredients(input_searchBar_value)
    
//         } else if (input_searchBar_value = appliance) {
    
//             filterByAppliance(input_searchBar_value)
    
//         } else if (input_searchBar_value = ustensils) {
    
//             filterByUstensils(input_searchBar_value)
    
//         }
//     });
    
// }