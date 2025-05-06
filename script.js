
document.addEventListener('DOMContentLoaded', () => {
    const heroButton = document.querySelector('.btn-primary');

   
    heroButton.addEventListener('mouseenter', () => {
        heroButton.style.backgroundColor = '#0056b3';
    });

    heroButton.addEventListener('mouseleave', () => {
        heroButton.style.backgroundColor = '#007BFF';
    });

    function toggleMode() {
        document.body.classList.toggle("dark-mode");
    }
    
});
