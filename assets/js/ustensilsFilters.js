// Ustensils filter

let ustensils_list = document.querySelector(".ustensil_select");

function displayUstensilsFilters(recipesArray) {
    
    recipesArray.forEach((selected_value) => {
        
        let ustensils_wrapper = document.createElement("div");
        ustensils_wrapper.classList.add("list_item_wrapper", "list_item_ustensils");
        let ustensil = document.createElement("li");
        ustensil.classList.add("link_container");
        ustensil.innerHTML = selected_value;
    
        let unselect = document.createElement("span");
        unselect.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
        <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
        <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`);
        unselect.classList.add("unselect");
    
        ustensils_wrapper.appendChild(ustensil);
        ustensils_wrapper.appendChild(unselect);
    
        ustensils_list.appendChild(ustensils_wrapper);
    
        ustensil.addEventListener("click", () => {
            updateUstensilsToFilter(selected_value);
            createNewTag(selected_value);
        })

        if(ustensilsToFilter.includes(selected_value)) {
            ustensils_wrapper.classList.add("link_container_selected");
            unselect.style.display = "block";

            unselect.addEventListener("click", () => {
                removeUstensilsToFilter(selected_value)
                let tag_wrapper = document.querySelector('[data="'+ selected_value +'"]');
                tag_wrapper.remove()
            })
        }
    });
}