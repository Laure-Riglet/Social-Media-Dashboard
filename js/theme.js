const darkMode = {
    init: function() {
        const darkToggler = document.querySelector('input');
        darkToggler.addEventListener('click', darkMode.turnToDarkMode);
    },

    turnToDarkMode: function() {
        const body = document.querySelector('body');
        body.classList.toggle('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', darkMode.init);
console.log('JS init OK !');