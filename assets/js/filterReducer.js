// Remove duplicates

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

// Filters reducer

function filterReducer(arrayToReduce) {

    let filterIngredients = new Array();
    let reduce_filterIngredients = new Array();

    let filterAppliances = new Array();
    let reduce_filterAppliances = new Array();

    let filterUstensils = new Array();
    let reduce_filterUstensils = new Array();

    arrayToReduce.map((recipe) => {
        // Ingredients
        let ingredients = recipe.ingredients;
    
        ingredients.map((ingredient) => {
            filterIngredients.push(ingredient.ingredient);
            reduce_filterIngredients = removeDuplicates(filterIngredients);
        })
    
        // Appareils
        let appliances = recipe.appliance;
    
        filterAppliances.push(appliances);
        reduce_filterAppliances = removeDuplicates(filterAppliances);
    
        // Ustensiles
        let ustensils = recipe.ustensils;
    
        ustensils.map((ustensil) => {
            filterUstensils.push(ustensil);
            reduce_filterUstensils = removeDuplicates(filterUstensils);
        })
    });

    return [reduce_filterIngredients, reduce_filterAppliances, reduce_filterUstensils];
}

