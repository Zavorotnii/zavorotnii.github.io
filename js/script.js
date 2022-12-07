function show_f_nav(atr) {
    const x = document.getElementById(atr)
    const rotated = document.getElementById(atr + "_a")
    if (x.style.display == "block") {
        rotated.style.transform = "rotate(0deg)";
        x.style.display = "none";
    } else {
        x.style.display = "block";
        rotated.style.transform = "rotate(180deg)";
    }
}


