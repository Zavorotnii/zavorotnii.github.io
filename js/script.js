
function getID() {
    console.log('ID - ' + document.getElementById("id_film").value);
    search(document.getElementById("id_film").value);
}


function search(id) {
    console.log('SEARCH FILM - ' + id);

    try {
        document.getElementById("yohoho").remove();
        playVideo(id)
        console.log('DEL LAST VIDEO');
    }
    catch {
        playVideo(id)
    }
}

function playVideo(id) {
    let filmDiv = document.createElement("div");
    filmDiv.id = "yohoho";
    filmDiv.setAttribute("data-kinopoisk", id)
    document.getElementById("content").append(filmDiv)
    const sp = document.createElement('script');
    sp.src = "//yohoho.cc/yo.js";
    document.getElementById("content").append(sp)
}