// Appliance filter

let appliance_list = document.querySelector(".appliance_select");

reduce_ap_tableau.forEach((selected_value) => {

    let appliances_wrapper = document.createElement("div");
    appliances_wrapper.classList.add("list_item_wrapper");
    let appliance = document.createElement("li");
    appliance.classList.add("link_container");
    appliance.innerHTML = selected_value;

    let unselect = document.createElement("span");
    unselect.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`);
    unselect.classList.add("unselect");

    appliances_wrapper.appendChild(appliance);
    appliances_wrapper.appendChild(unselect);

    appliance_list.appendChild(appliances_wrapper);

    appliance.addEventListener("click", () => {

        filterByAppliance(selected_value);
        removeCards();

        // select element
        selectedSticker(appliance, appliances_wrapper, unselect);

        // create new sticker
        createNewSticker(selected_value)

        let sticker_icon = document.querySelector(".sticker_unselect");

        sticker_icon.addEventListener("click", () => {
            // unselect sticker element 
            unselectedSticker(appliance, appliances_wrapper, unselect);
            sticker.remove();
        });

        let sticker = document.querySelector(".sticker_wrapper");

        unselect.addEventListener("click", () => {
            // unselect element
            unselectedSticker(appliance, appliances_wrapper, unselect);
            sticker.remove();
            displayRecipesGallery(recipes);
        });
    })
});