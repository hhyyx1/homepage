document.addEventListener('DOMContentLoaded', function() {
    const timestamp = new Date().getTime();
    let bgUrl;
    if (window.innerWidth < 768) {
        bgUrl = `https://api.maho.cc/random-img/mobile.php?t=${timestamp}`;
    } else {
        bgUrl = `https://moe.jitsu.top/api/?sort=pc&size=original&t=${timestamp}`;
    }
    const img = new Image();
    img.onload = function() {
        document.body.style.backgroundImage = `url('${bgUrl}')`;
    };
    img.onerror = function() {
        console.error('背景图加载失败，使用备用图片');
        document.body.style.backgroundImage = `url('https://picsum.photos/1920/1080')`;
    };
    img.src = bgUrl;
});