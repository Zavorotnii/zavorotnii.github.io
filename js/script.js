setInterval(bg1, 12000);

function bg1() {
    document.getElementById("header").style.backgroundImage = "url(/img/img7.png)"
    setTimeout(bg2, 4000);
}

function bg2() {
    document.getElementById("header").style.backgroundImage = "url(/img/img4.png)"
    setTimeout(bg3, 4000);
}

function bg3() {
    document.getElementById("header").style.backgroundImage = "url(/img/img6.png)"
}


function text_service() {
    document.getElementById("main_page").style.display = "none"
    document.getElementById("contact_info").style.display = "none"
    document.getElementById("text_service").style.display = "block"
}

function contact() {
    document.getElementById("main_page").style.display = "none"
    document.getElementById("text_service").style.display = "none"
    document.getElementById("contact_info").style.display = "block"
}

function about() {
    document.getElementById("contact_info").style.display = "none"
    document.getElementById("text_service").style.display = "none"
    document.getElementById("main_page").style.display = "block"
}






//FOR OLD BROWSERS==================================================================================================================
// function testWebP(callback) {

//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {

//     if (support == true) {
//         document.querySelector('body').classList.add('webp');
//     } else {
//         document.querySelector('body').classList.add('no-webp');
//     }
// });
// //==================================================================================================================================
