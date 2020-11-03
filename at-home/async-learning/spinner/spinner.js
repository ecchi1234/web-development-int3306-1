const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }

    rotateCount = (timestamp - startTime) / 3;
    if (rotateCount > 359) {
        rotateCount %= 360;
    }
    spinner.style.transform = `rotate(${rotateCount}deg)`;
    rAF = requestAnimationFrame(draw);

}

draw();