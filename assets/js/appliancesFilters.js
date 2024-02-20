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

        filterByAppliance(e);
        removeCards();

        // select element
        selectedSticker(appliance_li, app_wrapper, unselect);

        // create new sticker
        createNewSticker(e)

        let stickerIcon = document.querySelector(".sticker_unselect");

        stickerIcon.addEventListener("click", () => {
            // unselect sticker element 
            unselectedSticker(appliance_li, app_wrapper, unselect);
            sticker.remove();
            displayRecipesGallery(recipes);
        });

        let sticker = document.querySelector(".sticker_wrapper");

        unselect.addEventListener("click", () => {
            // unselect element
            unselectedSticker(appliance_li, app_wrapper, unselect);
            sticker.remove();
            displayRecipesGallery(recipes);
        });
    })
});