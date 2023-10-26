document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const scrollButton = document.querySelector('.scroll-to-top');

    function handleScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-white');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-white');
            navbar.classList.add('bg-transparent');
        }

        if (window.scrollY > 300) {
            scrollButton.classList.add('d-inline-block');
            scrollButton.classList.remove('d-none');
        } else {
            scrollButton.classList.remove('d-inline-block');
            scrollButton.classList.add('d-none');
        }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
});


