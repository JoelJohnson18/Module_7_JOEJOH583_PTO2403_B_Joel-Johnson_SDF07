// JavaScript for the loading circle
window.addEventListener('scroll', function() {
    const loadingCircle = document.querySelector('.loading-circle');
    if (window.scrollY > 100) {
        loadingCircle.style.display = 'block';
    } else {
        loadingCircle.style.display = 'none';
    }
});