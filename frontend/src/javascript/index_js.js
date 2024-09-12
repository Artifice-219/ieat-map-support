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

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const featuresSection = document.querySelector('.features').parentElement;

    if (!navbar) {
        console.error('Navbar element not found');
        return;
    }

    if (!featuresSection) {
        console.error('Features section element not found');
        return;
    }

    window.addEventListener('scroll', () => {
        const featuresTop = featuresSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (featuresTop < windowHeight / 1) {
            navbar.classList.add('shrink');
            navbar.classList.add('ShrinknavOption');
            navbar.classList.add('ShrinknavItem');
        } else {
            navbar.classList.remove('shrink');
            navbar.classList.remove('ShrinknavOption');
            navbar.classList.remove('ShrinknavItem');
        }
    });
});





