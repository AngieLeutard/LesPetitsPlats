// Ustensils filter

let ust_list = document.querySelector(".ustensil_select");

reduce_us_tableau.forEach((e) => {
    
    let ust_wrapper = document.createElement("div");
    ust_wrapper.classList.add("list_item_wrapper");
    let ustensil_li = document.createElement("li");
    ustensil_li.classList.add("link_container");
    ustensil_li.innerHTML = e;

    let unselect = document.createElement("span");
    unselect.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`);
    unselect.classList.add("unselect");

    ust_wrapper.appendChild(ustensil_li);
    ust_wrapper.appendChild(unselect);

    ust_list.appendChild(ust_wrapper);

    ustensil_li.addEventListener("click", () => {

        filterByUstensils(e);

        // select element
        selectedSticker(ustensil_li, ust_wrapper, unselect);

        // create new sticker
        createNewSticker(e)

        // element de la list unselect
        let sticker = document.querySelector(".sticker_wrapper");

        unselect.addEventListener("click", () => {
            unselectedSticker(ustensil_li, ust_wrapper, unselect);
            sticker.remove();
        });

        // etiquettes jaune unselect

        let stickerIcon = document.querySelector(".sticker_unselect");
        stickerIcon.addEventListener("click", () => {
            unselectedSticker(ustensil_li, ust_wrapper, unselect);
            sticker.remove();
        });
    })
});