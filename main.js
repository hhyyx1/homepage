document.addEventListener('DOMContentLoaded', function() {
    tsParticles.load("tsparticles", {
        fullScreen: { enable: true, zIndex: 9999 },
        particles: { number: { value: 0 } }
    }).then(container => {
        window.particlesContainer = container;
    });

    // 头像旋转功能
    const avatar = document.querySelector('.avatar');
    avatar.addEventListener('mouseover', () => {
        const direction = Math.random() < 0.5 ? 1 : -1;
        avatar.style.transform = `rotate(${360 * direction}deg)`;
    });
    avatar.addEventListener('mouseout', () => {
        avatar.style.transform = `rotate(0deg)`;
    });
});