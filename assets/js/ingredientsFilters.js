// Ingredients filter

let ing_list = document.querySelector(".ingredient_select");

reduce_ig_tableau.forEach((e) => {

    let ing_wrapper = document.createElement("div");
    ing_wrapper.classList.add("list_item_wrapper");
    let ingredient_li = document.createElement("li");
    ingredient_li.classList.add("link_container");
    ingredient_li.innerHTML = e;

    let unselect = document.createElement("span");
    unselect.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`);
    unselect.classList.add("unselect");

    ing_wrapper.appendChild(ingredient_li);
    ing_wrapper.appendChild(unselect);

    ing_list.appendChild(ing_wrapper);

    ingredient_li.addEventListener("click", () => {

        filterByIngredients(e);

        // select element
        selectedSticker(ingredient_li, ing_wrapper, unselect);

        // create new sticker
        createNewSticker(e);

        let stickerIcon = document.querySelector(".sticker_unselect");

        stickerIcon.addEventListener("click", () => {
            // unselect sticker element 
            unselectedSticker(ingredient_li, ing_wrapper, unselect);
            sticker.remove();
        });

        let sticker = document.querySelector(".sticker_wrapper");

        unselect.addEventListener("click", () => {
            // unselect element
            unselectedSticker(ingredient_li, ing_wrapper, unselect);
            sticker.remove();
        });
    });

});