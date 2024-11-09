const burgerButton = document.getElementById('burgerButton');
const dropdownMenu = document.getElementById('dropdownMenu');

burgerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    if (dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.remove('hidden');
        setTimeout(() => {
            dropdownMenu.classList.add('active');
        }, 10);
    } else {
        closeDropdown();
    }
});

document.addEventListener('click', (event) => {
    if (!dropdownMenu.contains(event.target) && !burgerButton.contains(event.target)) {
        closeDropdown();
    }
});

function closeDropdown() {
    dropdownMenu.classList.remove('active');
    dropdownMenu.addEventListener('transitionend', () => {
        dropdownMenu.classList.add('hidden');
    }, { once: true });
}


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const shrinkItem = document.getElementById('ShrinknavItem');
    const shrinkOptions = document.getElementById('ShrinknavOption');

    const featuresSection = document.querySelector('.features').getBoundingClientRect();

    if (window.scrollY > featuresSection.top) {
        navbar.classList.add('shrink-navbar');
        shrinkItem.classList.add('shrink-item');
        shrinkOptions.classList.add('shrink-item');
         shrinkItem.classList.add('shrink-logo');
    } else {
        navbar.classList.remove('shrink-navbar');
        shrinkItem.classList.remove('shrink-item');
        shrinkOptions.classList.remove('shrink-item');
        shrinkItem.classList.remove('shrink-logo');
    }
});







