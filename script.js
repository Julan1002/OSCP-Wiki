// JavaScript pour gérer le clic sur les liens de navigation

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');
    const loadingBar = document.querySelector('.loading-bar');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Récupérer l'ID de la cible sans le #
            const targetSection = document.getElementById(targetId);

            // Cacher toutes les sections
            sections.forEach(section => {
                section.classList.remove('visible');
            });

            // Afficher la section cible avec un délai pour l'effet de transition
            setTimeout(() => {
                targetSection.classList.add('visible');
                loadingBar.style.width = '100%'; // Fausse barre de chargement terminée
                setTimeout(() => {
                    loadingBar.style.width = '0'; // Réinitialiser la barre de chargement après un court délai
                }, 500); // Durée de la barre de chargement (0.5s dans cet exemple)
            }, 100);

            // Optionnel : Faire défiler jusqu'à la section cible
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
