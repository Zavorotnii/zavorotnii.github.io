document.addEventListener('keyup', (e) => {
    if (e.code === "Enter") {
        console.log('getID')
        getID()
    }
    else {
        console.log('no');

    }
})

function getFocus() {
    document.getElementById("id_film").focus();
}


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

function createPlayer(linkChange) {
    const newVideo = document.createElement('video');
    newVideo.id = 'videoStream';
    newVideo.className = 'video-js vjs-default-skin';
    newVideo.setAttribute("controls", "controls");
    newVideo.setAttribute("muted", "muted");
    newVideo.setAttribute("autoplay", "any");
    newVideo.setAttribute('data-setup', '{ "fluid": false,  "inactivityTimeout": 0}');
    document.getElementById('video').append(newVideo);
    const newSource = document.createElement('source');
    newSource.type = "application/x-mpegURL";
    newSource.src = link + linkChange;
    document.getElementById('videoStream').appendChild(newSource)
    const sp = document.createElement('script');
    sp.setAttribute('type', 'text/javascript');
    sp.src = "js/hubufm-player.js";
    document.getElementById('videoStream').appendChild(sp);
}
