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

    let filterNames = new Array();
    let reduce_filterNames = new Array();

    let filterDescriptions = new Array();
    let reduce_filterDescriptions = new Array();

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

        // Name
        let names = recipe.name;
    
        filterNames.push(names);
        reduce_filterNames = removeDuplicates(filterNames);

        // Description
        let descriptions = recipe.description;
    
        filterDescriptions.push(descriptions);
        reduce_filterDescriptions = removeDuplicates(filterDescriptions);

    });

    return [reduce_filterIngredients, reduce_filterAppliances, reduce_filterUstensils, reduce_filterNames, reduce_filterDescriptions];
}