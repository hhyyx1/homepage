document.addEventListener('DOMContentLoaded', function() {
    firework({
        excludeElements: ["a"],
        particles: [{
            shape: "circle",
            move: ["emit"],
            easing: "easeOutExpo",
            colors: [
                "rgba(255,182,185,.9)",
                "rgba(250,227,217,.9)",
                "rgba(187,222,214,.9)",
                "rgba(138,198,209,.9)"
            ],
            number: 30,
            duration: [1200, 1800],
            shapeOptions: {
                radius: [16, 32]
            }
        }, {
            shape: "circle",
            move: ["diffuse"],
            easing: "easeOutExpo",
            colors: ["#FFF"],
            number: 1,
            duration: [1200, 1800],
            shapeOptions: {
                radius: 20,
                alpha: 0.5,
                lineWidth: 6
            }
        }]
    });
});