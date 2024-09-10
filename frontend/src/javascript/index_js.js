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
