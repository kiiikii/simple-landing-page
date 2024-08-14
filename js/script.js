// Example: Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});