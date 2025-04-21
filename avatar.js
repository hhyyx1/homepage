document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('.avatar');
    avatar.addEventListener('click', function(event) {
        const x = event.clientX;
        const y = event.clientY;
        addParticles(x, y);
    });
});

function addParticles(x, y) {
    for (let i = 0; i < 30; i++) {
        const color = ["rgba(255,182,185,.9)", "rgba(250,227,217,.9)", "rgba(187,222,214,.9)", "rgba(138,198,209,.9)"][Math.floor(Math.random() * 4)];
        const radius = 16 + Math.random() * 16;
        const duration = 1.2 + Math.random() * 0.6;
        const particleOptions = {
            shape: { type: "circle" },
            size: { value: radius },
            color: { value: color },
            opacity: { value: 0.9 },
            move: { enable: true, speed: 5, direction: "none", random: true, straight: false, outMode: "destroy" },
            life: { duration: duration }
        };
        window.particlesContainer.addParticle({ x, y }, particleOptions);
    }
    const duration2 = 1.2 + Math.random() * 0.6;
    const particleOptions2 = {
        shape: { type: "circle", stroke: { width: 6, color: "#FFF" } },
        size: { value: 20 },
        color: { value: "#FFF" },
        opacity: { value: 0.5 },
        move: { enable: false },
        life: { duration: duration2 }
    };
    window.particlesContainer.addParticle({ x, y }, particleOptions2);
}