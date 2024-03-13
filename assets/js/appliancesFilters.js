// Appliance filter

let appliance_list = document.querySelector(".appliance_select");

function displayAppliancesFilters(recipesArray) {

    recipesArray.forEach((selected_value) => {

        let appliances_wrapper = document.createElement("div");
        appliances_wrapper.classList.add("list_item_wrapper", "list_item_appliances");
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
            updateAppliancesToFilter(selected_value);
            createNewTag(selected_value);
        })

        if(applianceToFilter.includes(selected_value)) {
            appliances_wrapper.classList.add("link_container_selected");
            unselect.style.display = "block";

            unselect.addEventListener("click", () => {
                removeAppliancesToFilter(selected_value)
                let tag_wrapper = document.querySelector('[data="'+ selected_value +'"]');
                tag_wrapper.remove()
            })
        }
    });
}