
function clickDown() {
    let offerDiv = document.getElementById("hide");
    let arrowDown = document.getElementById("arrow_down");
    let arrowUp = document.getElementById("arrow_up");
    arrowDown.style.display = "none";
    arrowUp.style.display = "inline-block";
    offerDiv.style.display = "flex";
}


function clickUp() {
    let offerDiv = document.getElementById("hide");
    let arrowDown = document.getElementById("arrow_down");
    let arrowUp = document.getElementById("arrow_up");
    arrowDown.style.display = "inline-block";
    arrowUp.style.display = "none";
    offerDiv.style.display = "none";
}

// if (screen.width < 767) {
//     viewport = document.querySelector("meta[name=viewport]");
//     viewport.setAttribute('content', 'width=device-width');
// }

// if (screen.width > 767) {
//     viewport = document.querySelector("meta[name=viewport]");
//     viewport.setAttribute('content', 'width=1920px');
// }

// window.addEventListener('resize', function (event) {

//     if (screen.width < 767) {
//         viewport = document.querySelector("meta[name=viewport]");
//         viewport.setAttribute('content', 'width=device-width');
//     }

//     if (screen.width > 767) {
//         viewport = document.querySelector("meta[name=viewport]");
//         viewport.setAttribute('content', 'width=1920px');
//     }

// }, true);


//FOR OLD BROWSERS==================================================================================================================
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
//==================================================================================================================================