// PRICE-LIST/////////////////////////////////////
const price_list = {
    "media": {
        "monnth": { "community": "$ 15", "pro": "$ 30", "pro_ml": "$ 100" },
        "year": { "community": "$ 150", "pro": "$ 300", "pro_ml": "$ 1000" },
        "lifetime": { "community": "$ 360", "pro": "$ 720", "pro_ml": "$ 2400" }
    },
    "middleware": {
        "monnth": { "iptv_ott": "$ 50" },
        "year": { "iptv_ott": "$ 500" },
        "lifetime": { "iptv_ott": "$ 1200" }
    }
}



///////////////////////////////////////////////////

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

function perMonth() {
    let doc = document;
    doc.getElementById("per_month").className = "focus_btn_active";
    doc.getElementById("per_year").className = "focus_btn";
    doc.getElementById("per_lifetime").className = "focus_btn";
    doc.getElementById("community").textContent = price_list["media"]["monnth"]["community"];
    doc.getElementById("pro").textContent = price_list["media"]["monnth"]["pro"];
    doc.getElementById("pro_ml").textContent = price_list["media"]["monnth"]["pro_ml"];
    doc.getElementById("middleware").textContent = price_list["middleware"]["monnth"]["iptv_ott"];
    doc.getElementById("community_m").textContent = price_list["media"]["monnth"]["community"];
    doc.getElementById("pro_m").textContent = price_list["media"]["monnth"]["pro"];
    doc.getElementById("pro_ml_m").textContent = price_list["media"]["monnth"]["pro_ml"];
    doc.getElementById("middleware_m").textContent = price_list["middleware"]["monnth"]["iptv_ott"];
}

function perYear() {
    let doc = document;
    doc.getElementById("per_month").className = "focus_btn";
    doc.getElementById("per_year").className = "focus_btn_active";
    doc.getElementById("per_lifetime").className = "focus_btn";
    doc.getElementById("community").textContent = price_list["media"]["year"]["community"];
    doc.getElementById("pro").textContent = price_list["media"]["year"]["pro"];
    doc.getElementById("pro_ml").textContent = price_list["media"]["year"]["pro_ml"];
    doc.getElementById("middleware").textContent = price_list["middleware"]["year"]["iptv_ott"];
    doc.getElementById("community_m").textContent = price_list["media"]["year"]["community"];
    doc.getElementById("pro_m").textContent = price_list["media"]["year"]["pro"];
    doc.getElementById("pro_ml_m").textContent = price_list["media"]["year"]["pro_ml"];
    doc.getElementById("middleware_m").textContent = price_list["middleware"]["year"]["iptv_ott"];
}

function perLifetime() {
    let doc = document;
    doc.getElementById("per_month").className = "focus_btn";
    doc.getElementById("per_year").className = "focus_btn";
    doc.getElementById("per_lifetime").className = "focus_btn_active";
    doc.getElementById("community").textContent = price_list["media"]["lifetime"]["community"];
    doc.getElementById("pro").textContent = price_list["media"]["lifetime"]["pro"];
    doc.getElementById("pro_ml").textContent = price_list["media"]["lifetime"]["pro_ml"];
    doc.getElementById("middleware").textContent = price_list["middleware"]["lifetime"]["iptv_ott"];
    doc.getElementById("community_m").textContent = price_list["media"]["lifetime"]["community"];
    doc.getElementById("pro_m").textContent = price_list["media"]["lifetime"]["pro"];
    doc.getElementById("pro_ml_m").textContent = price_list["media"]["lifetime"]["pro_ml"];
    doc.getElementById("middleware_m").textContent = price_list["middleware"]["lifetime"]["iptv_ott"];
}



