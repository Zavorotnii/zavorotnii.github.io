setInterval(bg1, 12000);

function bg1() {
    document.getElementById("header").style.backgroundImage = "url(/img/img1.png)"
    setTimeout(bg2, 4000);
}

function bg2() {
    document.getElementById("header").style.backgroundImage = "url(/img/img3.png)"
    setTimeout(bg3, 4000);
}

function bg3() {
    document.getElementById("header").style.backgroundImage = "url(/img/img2.png)"
}

