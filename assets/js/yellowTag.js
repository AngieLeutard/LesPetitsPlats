function createNewTag(name) {

    let tag_wrapper = document.createElement("div");
    tag_wrapper.classList.add("sticker_wrapper");
    tag_wrapper.setAttribute('data', name);

    let tag_dataValue = tag_wrapper.getAttribute('data');
    console.log(tag_dataValue);

    let tag_text = document.createElement("p");
    tag_text.classList.add("sticker_text");

    let tag_unselect_button = document.createElement("span");
    tag_unselect_button.classList.add("sticker_unselect");

    tag_wrapper.appendChild(tag_text);
    tag_wrapper.appendChild(tag_unselect_button);

    tag_text.innerHTML = name;
    tag_unselect_button.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
    <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`);

    let section = document.querySelector(".stickers_section");
    section.appendChild(tag_wrapper);

    let reduced_filters = filterReducer(recipesToDisplay);

    tag_unselect_button.addEventListener("click", () => {
        
        if(reduced_filters[0].includes(tag_dataValue)) {
            removeIngredientsToFilter(tag_dataValue)
            tag_wrapper.remove()
        }
        if(reduced_filters[1].includes(tag_dataValue)) {
            removeAppliancesToFilter()
            tag_wrapper.remove()
        }
        if(reduced_filters[2].includes(tag_dataValue)) {
            removeUstensilsToFilter(tag_dataValue)
            tag_wrapper.remove()
        }
    });
}