
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
    filmDiv.setAttribute("data-kinopoisk", id);
    doc.getElementById("content").append(filmDiv);
    const sp = doc.createElement('script');
    sp.src = "//yohoho.cc/yo.js";
    doc.getElementById("content").append(sp);
    window.scrollTo(0, 0);
}


function updateFilms() {
    let serials = {
        "serials": [
            { "id": "959274", "name": "Олаф и холодное приключение", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/3cab2b21-0419-4088-9080-d08b3651986e/1920x" },
            { "id": "493208", "name": "Холодное сердце", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/efa923ca-2007-4a79-b759-377fc1a5664f/300x450" },
            { "id": "903831", "name": "Холодное сердце 2", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/0c2824a3-910f-476b-a657-06f6e2da13b1/300x450" },
            { "id": "842477", "name": "Холодное торжество", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/7447259d-40e5-44df-aa3e-7c1c57632e0c/1920x" },
            { "id": "1145146", "name": "Том и Джерри", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/1c1cdde9-6779-4659-bad7-848798834539/300x450" },
            { "id": "775276", "name": "Зверополис", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a7b5374e-0d64-4913-b975-ffb38ce90361/1920x" },
            { "id": "46483", "name": "Ну, погоди", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/b3fd0245-46ef-40ff-8ac4-086cd3fd7a6c/1920x" },
            { "id": "89514", "name": "Рататуй", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/60faa2b2-83b1-49cc-aa4d-164202a40142/1920x" },
            { "id": "478491", "name": "Маша и Медведь", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/55630d77-54d7-4571-858e-40710a7f5820/1920x" },
            { "id": "458", "name": "Корпорация монстров", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/cf8c083b-3fdb-44a2-b6ca-2203ec07fc54/1920x" },
            { "id": "84049", "name": "Рапунцель: Запутанная история", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/fdc6ac65-b118-47fe-9982-9d1888f1a855/1920x" },
            { "id": "707", "name": "Ледниковый период", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ade68e1d-f425-4fab-a28c-b513f3d559eb/1920x" },
            { "id": "325381", "name": "Вверх", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/6aec57ca-9258-4903-89b8-dfcc44070c0f/1920x" },
            { "id": "6006", "name": "Мадагаскар", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/79a82b26-3744-4451-bbe8-b6ce0e332495/1920x" },
            { "id": "42326", "name": "Трое из Простоквашино", "img": "https://www.kino-teatr.ru/movie/posters/big/2/84392.jpg" },
            { "id": "61249", "name": "Тачки", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/b7c0a7ee-38fb-46f5-afb3-d6c688731408/1920x" },
            { "id": "95231", "name": "Чип и Дейл спешат на помощь", "img": "https://static.insales-cdn.com/images/products/1/1781/205334261/d37c9e9b07847e86a29fe7ae059a564caac0881a.jpg" },
            { "id": "540", "name": "Красавица и чудовище", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/6ef180c4-6f5b-4be3-bff8-4db6ef0926a1/1920x" },
            { "id": "7908", "name": "В поисках Немо", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/e8444e49-437f-4dad-8c7a-e056a5468ce9/1920x" },
            { "id": "692957", "name": "В поисках Дори", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/c38f1b51-8d36-487f-a30d-64deb4830fe8/1920x" },
            { "id": "2361", "name": "Аладдин", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/1484ebd9-6bf1-4ff5-858a-7ced20f7d991/1920x" },
            { "id": "229178", "name": "Аладдин (сериал 1994 – 1995)", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/60add1e1-d3ae-4e5c-af67-4fdabadb40ac/1920x" },
            { "id": "839646", "name": "Тачки 3", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/882e6235-6335-4f0d-8ea2-8175ac7c6043/1920x" },
            { "id": "430", "name": "Шрэк", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/ef98d170-1128-4057-895a-f3cbaf2cf775/1920x" },
            { "id": "5273", "name": "Шрэк 2", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/44d6d6e5-366b-402c-baa3-49dfda9ab677/1920x" },
            { "id": "84020", "name": "Шрэк Третий", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/4ac67637-4b81-4327-a868-318491de4c7a/1920x" },
            { "id": "95232", "name": "Человек-паук", "img": "https://static.insales-cdn.com/images/products/1/7567/399482255/000.jpg" },
            { "id": "8129", "name": "101 далматинец", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/00c3eb97-becd-4fdf-bb57-790ad2141ab5/1920x" },
            { "id": "8231", "name": "Золушка", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/a771eaf1-36f3-45e9-93db-5f988321e57a/1920x" },
            { "id": "551", "name": "Белоснежка и семь гномов", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/899610f0-e122-4188-b1c9-48d7543c7109/1920x" },
            { "id": "77465", "name": "Сезон охоты", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ee534ec7-6141-46f0-b2d2-77da30fd3791/1920x" },
            { "id": "597", "name": "Атлантида: Затерянный мир", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/9011ece5-3a9e-4b95-a058-3e9295e8f6ba/1920x" },
            { "id": "7107", "name": "Земля до начала времен", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/90cfeace-6400-4c81-8e76-43d27c85cd24/1920x" },
            { "id": "864", "name": "Планета сокровищ", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/13d2acc6-3dd3-44c4-a352-8dde7ece4227/1920x" },
            { "id": "16117", "name": "Лис и пёс", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/bdb61b82-a30b-4ada-926b-39bfbbf0f95c/1920x" },
            { "id": "462582", "name": "Облачно с прояснениями", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/caaa1468-144a-4138-820d-49beaa043e3a/1920x" },
            { "id": "2260", "name": "Тарзан", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/9c030cac-b937-4006-9edf-949e4a0f786f/1920x" },
            { "id": "260347", "name": "Чиполлино", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/9f8736f6-bdfa-499b-9258-fcb94df466a4/1920x" },
            { "id": "17579", "name": "Робин Гуд", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ba2f669f-1a65-4e28-9dd6-ef97e4ae1fb8/1920x" },
            { "id": "1129833", "name": "Астерикс и тайное зелье", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0dc43cc7-0b1d-42d4-9b1d-9987697a95fc/1920x" },
            { "id": "395106", "name": "Черный Плащ", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/652b299b-c303-4e0b-b436-5c2025078f6f/1920x" },
            { "id": "7971", "name": "Синдбад: Легенда семи морей", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/32cf839f-ff56-4348-b361-56d76ceb5a8e/1920x" },
            { "id": "8133", "name": "Книга джунглей", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0661d23a-0024-4d84-9f49-5d640166823e/1920x" },
            { "id": "94672", "name": "Тимон и Пумба", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/df7ea2ea-a920-4b8a-87a7-2aae387fb015/1920x" },
            { "id": "229458", "name": "Русалочка (сериал 1992 – 1994)", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b89020b3-0c49-4414-9858-b2c011dee0b9/1920x" },
            { "id": "652", "name": "Динозавр", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b7ee937b-e8ad-4a3e-b2ec-f8568b76f6e6/1920x" },
            { "id": "2356", "name": "Приключения Флика", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/419cf654-c545-480a-9d4e-63b644d97eb6/1920x" },
            { "id": "44380", "name": "Дюймовочка", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/861588bc-3132-4b0a-8162-81b6ed00b5f4/300x450" },
            { "id": "19504", "name": "Алиса в стране чудес", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/3ecb0277-fb26-4b46-8d78-a8d71bccd623/1920x" },
            { "id": "1264778", "name": "Вокруг света за 80 дней", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/766c1db8-95d8-4aa7-8649-7b26a2126fff/1920x" },
            { "id": "8220", "name": "Пиноккио", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/8ef883f1-0be7-4eac-8003-33950c164a89/1920x" },
            { "id": "409220", "name": "Феи: Тайна зимнего леса", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/624a3c96-1309-4c25-bc21-70a051b7ac12/1920x" },
            { "id": "1356128", "name": "Щенячий патруль в кино", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/31f4987e-8505-4e1d-9760-98498f04f9ef/1920x" },
            { "id": "94673", "name": "Чудеса на виражах", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/2be79d49-4827-4ca7-a30a-9e34452b13d4/1920x" },
            { "id": "34299", "name": "Спасатели", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/e2d37853-ec60-418f-b845-20c53aee76a0/1920x" },
            { "id": "648762", "name": "Планета динозавров", "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f0c9c818-4007-4c8a-a0a1-9d4523d5fd62/600x900" },
        ]
    }

    let doc = document;
    let i = 0;
    let lengthList = serials.serials.length
    while (i < lengthList) {
        let poster = doc.createElement("input");
        poster.type = "image"
        poster.id = serials.serials[i].id;
        poster.className = "posterImg";
        poster.src = serials.serials[i].img;
        doc.getElementById("poster_list").appendChild(poster);
        poster.onclick = function () {
            console.log('TESTING POSTER');
            try {
                doc.getElementById("yohoho").remove();
                playVideo(poster.id, doc);

            }
            catch {
                playVideo(poster.id, doc);
            }

        }
        i++;
    }











}




