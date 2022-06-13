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
    const id = document.getElementById(menu);
    id.classList.add('disable');
}

// Profile Menu
const profilepic = document.getElementById('profilepic');
profilepic.addEventListener('click', e => {
    disableMenu('socialsWrapper');
    alterState('contactInfoWrapper', 'disable');
});

// Waffle Menu
const waffle = document.getElementById('waffle');
waffle.addEventListener('click', e => {
    disableMenu('contactInfoWrapper');
    alterState('socialsWrapper', 'disable');
});