document.addEventListener('DOMContentLoaded', function() {
    tsParticles.load("tsparticles", {
        fullScreen: { enable: true, zIndex: 9999 },
        particles: { number: { value: 0 } }
    }).then(container => {
        window.particlesContainer = container;
    });
});