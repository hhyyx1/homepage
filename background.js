document.addEventListener('DOMContentLoaded', function() {
    const timestamp = new Date().getTime();
    let bgUrl;
    if (window.innerWidth < 768) {
        bgUrl = `https://api.maho.cc/random-img/mobile.php?t=${timestamp}`;
    } else {
        bgUrl = `https://moe.jitsu.top/img/?sort=pc&size=original&t=${timestamp}`;
    }
    document.body.style.backgroundImage = `url('${bgUrl}')`;
});