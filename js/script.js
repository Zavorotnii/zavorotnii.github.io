document.addEventListener('keyup', (e) => {
    if (e.code === "Enter") {
        searchFilm()
    }
    else { }
})

function searchFilm() {
    let doc = document;
    let id = doc.getElementById("id_film").value;
    try {
        doc.getElementById("yohoho").remove();
        playVideo(id, doc)
    }
    catch {
        playVideo(id, doc)
    }
}

function playVideo(id, doc) {
    let filmDiv = doc.createElement("div");
    filmDiv.id = "yohoho";
    filmDiv.setAttribute("data-kinopoisk", id)
    doc.getElementById("content").append(filmDiv)
    const sp = doc.createElement('script');
    sp.src = "//yohoho.cc/yo.js";
    doc.getElementById("content").append(sp)
}




