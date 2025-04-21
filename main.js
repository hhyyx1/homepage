document.addEventListener('DOMContentLoaded', function() {
    // 初始化 tsparticles
    tsParticles.load("tsparticles", {
        fullScreen: { enable: true, zIndex: 9999 },
        particles: { number: { value: 0 } }
    }).then(container => {
        window.particlesContainer = container;
    }).catch(error => {
        console.error('tsparticles 加载失败:', error);
    });

    // 头像旋转
    const avatar = document.querySelector('.avatar');
    if (!avatar) {
        console.error('未找到头像元素');
        return;
    }
    avatar.addEventListener('mouseover', () => {
        const direction = Math.random() < 0.5 ? 1 : -1;
        avatar.style.transform = `rotate(${360 * direction}deg)`;
    });
    avatar.addEventListener('mouseout', () => {
        avatar.style.transform = `rotate(0deg)`;
    });
});