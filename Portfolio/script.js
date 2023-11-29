// Adicionando animação ao rolar a página
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', reveal);
    function reveal() {
        var reveals = document.querySelectorAll('.section-content');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('show');
            }
        }
    }
});