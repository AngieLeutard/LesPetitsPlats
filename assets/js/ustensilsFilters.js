// Ustensils filter

let ustensils_list = document.querySelector(".ustensil_select");

reduce_us_tableau.forEach((selected_value) => {
    
    let ustensils_wrapper = document.createElement("div");
    ustensils_wrapper.classList.add("list_item_wrapper");
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

        filterByUstensils(selected_value);

        // select element
        selectedSticker(ustensil, ustensils_wrapper, unselect);

        // create new sticker
        createNewSticker(selected_value)

        // element de la list unselect
        let sticker = document.querySelector(".sticker_wrapper");

        unselect.addEventListener("click", () => {
            unselectedSticker(ustensil, ustensils_wrapper, unselect);
            sticker.remove();
        });

        // etiquettes jaune unselect

        let sticker_icon = document.querySelector(".sticker_unselect");
        sticker_icon.addEventListener("click", () => {
            unselectedSticker(ustensil, ustensils_wrapper, unselect);
            sticker.remove();
        });
    })
});