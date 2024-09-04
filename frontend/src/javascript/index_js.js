// JavaScript to toggle the dropdown menu
const burgerButton = document.getElementById('burgerButton');
const dropdownMenu = document.getElementById('dropdownMenu');

burgerButton.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.remove('hidden');
        setTimeout(() => {
            dropdownMenu.classList.add('active');
        }, 10); // Slight delay to allow the transition to trigger
    } else {
        dropdownMenu.classList.remove('active');
        dropdownMenu.addEventListener('transitionend', () => {
            dropdownMenu.classList.add('hidden');
        }, { once: true });
    }
});
