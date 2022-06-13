const inputs = document.querySelectorAll('input');
inputs.forEach(el => {
    el.addEventListener('blur', e => {
        if (e.target.value.length > 0) {
            e.target.classList.add('validInput');
        } else {
            e.target.classList.remove('validInput');
        }
    });
});

// Menus
function alterState(altered_id, altered_class) {
    const menu = document.getElementById(altered_id);
    if(menu.classList.contains(altered_class))
    {
        menu.classList.remove(altered_class);
    } else {
        menu.classList.add(altered_class);
    }
}

function disableMenu(menu) {
    const id = document.querySelector(menu);
    id.classList.add('disable');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Profile Menu
const profilepic = document.getElementById('profilepic');
profilepic.addEventListener('click', e => {
    alterState('contactInfoWrapper', 'disable');
});

// Waffle Menu
const waffle = document.getElementById('waffle');
waffle.addEventListener('click', e => {
    alterState('socialsWrapper', 'disable');
});

// Search Bar Menu
const searchbar = document.getElementById('searchBar');
const inputWrapper = document.getElementById('inputWrapper');
const searchList = document.getElementById('searchlist');
searchBar.addEventListener('click', e => {
    inputWrapper.classList.add('expand');
    searchList.classList.remove('disable');
});

document.addEventListener("click", function(event) {
    // Waffle offclick
    if (!event.target.closest("#waffle") && !event.target.closest("#socialsWrapper")) {
        disableMenu('#socialsWrapper');
    }

    // Profile offclick
    if (!event.target.closest("#profilepic") && !event.target.closest("#contactInfoWrapper")) {
        disableMenu('#contactInfoWrapper');
    }

    // Searchbar offclick
    if (!event.target.closest("#searchBar") && !event.target.closest("#inputWrapper")) {
        inputWrapper.classList.remove('expand');
        searchList.classList.add('disable');
    }
});