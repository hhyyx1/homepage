document.addEventListener('DOMContentLoaded', function() {
    const timestamp = new Date().getTime();
    let bgUrl;
    if (window.innerWidth < 768) {
        bgUrl = `[invalid url, do not cite]
    } else {
        bgUrl = `[invalid url, do not cite]&t=${timestamp}`;
    }
    document.body.style.backgroundImage = `url('${bgUrl}')`;
});