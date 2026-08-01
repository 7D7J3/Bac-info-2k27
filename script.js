// Database Kamla mta3 les cours (194 Vidéos)
const coursesData = {
    "Algo & Programmation": {
        "Rappel 2ème et 3ème": [
            "K5JXPhnLRgk", "anUmFPScezU", "9ClIgr3c0MA", "FAIczg82_S8", "bJOl8Gpijyk", "6RFddI0YWYg", "VUw0jI3QoO4"
        ],
        "Trimestre 1": [
            "LsSBHXYKaac", "hfTkdp0UmfQ", "tL-y0NPxcbM", "bi-7zW2drJY", "InDFw85-mN8", "Y-7voDpFFpQ", "1t5q-BtpHiM", 
            "24gXLZ0-tL8", "doehlCKXVIs", "wIT2BbFYmvs", "V6e7GcFVT3s", "zgGEGCTn4bg", "1ruppPqt3KY", "isRvFA8QbiU", 
            "B54jAXctkBs", "cDR8asFb5as", "uzqtK7IhX04", "nlbmCQkZQHc", "4b8OPM93MH8"
        ],
        "Trimestre 2": [
            "9lxnnV171Ts", "KFW-xCngdC0", "XdVqkVmHNPQ", "x54HPYyElHY", "9R_BeAGeIzo", "vJcMFAAxlow", "dR8iww78pFQ", 
            "jz-9xDOAAXo", "zhOiRgP5gDc", "c0Lv5P9R1Ks", "u9dHK5Yj718", "pG_d-d9NyT4", "5DPs2PTkLFU", "UFx-5k9weVU", 
            "mtt2j261WHk", "4aoZe8DdCdc"
        ],
        "Trimestre 3": [
            "LN3BePic4ZA", "ai3pgdcN438", "azsNLQxkiJw", "-i21Pi9EJhM", "DR_iukhe3zU", "-s_wQEyoU8Q", "VjvekSMvsW4", 
            "EYGiRrctT-A", "w03ZUo4WjXw"
        ],
        "Interface Graphique": [
            "9ACP7VLEd0s", "fYvTpQY0ol8", "trhCJTxRdeg", "AKR8-0rUwt8", "vfU9GYUSxyQ", "upBeJIeuB_I", "qKkzKXkct9w", 
            "sVv-V8MexcY", "cMUf4ETzRv4", "y9ro35BGDkM", "PbqCrKkItHw", "v6dUDS6lqkY", "6bnr1y5gCuA", "DIFpuR4shas", 
            "xMv-UFwJg_M", "3bgEDUWRdQ8", "maT-9UO1NWg", "yqStV_JJD4Y", "ZZnSAFZhbso"
        ]
    },
    "Mathématiques": {
        "Trimestre 1": [
            "wRDKMs8_z3A", "4syFXHGbzpg", "XAQ9-hfTygo", "scWTkw1iU4o", "jh1xun9boZ4", "74nTDiO34EE", "-GMiKisOTmk", 
            "NWGUrAkJGwI", "ynbE18DkuB8", "AaZZ2hNSyFM", "C5wldBYUUhY", "ME9qVYPG02k", "lWXKeBOCdSA", "i1fqvWiVIvA", 
            "YNB8PGM5IPc", "mX3y12i-nmc", "1IeHHca_F18", "cMv7nFtHpGg", "oQw8cGdGbYQ"
        ],
        "Trimestre 2": [
            "LLqUvqxbIFk", "CNIvYQefF-c", "t0CK3zqTdiw", "8QBYx_kZyso", "w2qg0t8anRs", "BcHwkOL6ty0", "FG6gQLiA6Kk", 
            "faShoxwYfdk", "PY6ZipSH8mE", "dyQBWEQEMvo", "uYVFPjKnLMc", "L5Ob5zQZWx8", "zx-D5iWcbr0"
        ],
        "Trimestre 3": [
            "egToxKxTGWU", "0faFMobSWVU", "ZZeVQkiupIw", "5rEKeLpJHug", "U1KSb815cMI", "k7P6jNNg3ik", "R3LSIig28Fc", 
            "PuYGqCr2Xug", "1q7bMphKX1o", "lgcPyoIdNgs", "WMQOtQqsYZU", "93cWjvS9PsU", "OeekX0G6Xcc", "VpZ2jvY9Uy4", 
            "y49ZNuE2qrw", "Un_E9putrXE"
        ]
    },
    "Physique & Chimie": {
        "Physique T1": [
            "hAH0U4yJdU8", "_p5-lXf62_E", "mj6U1ZniGLM", "mIsIOa9zpGo", "KYOXitzanaA", "75he0zLHMvk", "pBpeLKX_6b8", 
            "5YTGWRWZ_gc", "F7jaUv0uMAo", "Q1epnmMbeOI", "2riqdA1YaHM", "yU1367szj-w", "Ga-5IK1FY0E", "PWrSoz92sLw"
        ],
        "Chimie": [
            "3SLmnbcuGpU", "0uTizl9xFcw", "PRXzJl25UFw", "aJsvzYq3XQQ", "OyFA5vu8GpI", "gHbkgvI97Xo", "PnXgRwmm4Lg", "cZTJsQIvnCk"
        ],
        "Physique T2": [
            "QO7DpvLqKxo", "w1CnIZu7C6w", "fJ0FgMaLw-k", "yYzrIDRq4-0", "v8qB4Kpb3q0", "c4Aag9lW8eY", "2lSVuGnXKUI", 
            "VXiGGajRF0U", "PTqjpNHkw4c"
        ],
        "Physique T3": [
            "MyGyv33UdNM", "91fzBx7kwJI", "a7t2R2tAB9g", "TamioYQ8nw4", "dlW08Fb2R-Q", "Zn0FvSwuAOA", "7qMDHfahHEg", "n2sdDsv945Q"
        ],
        "Révision Physique": [
            "rIOrdrDqHtc", "sbG0CTUDNMc", "KXGlETTi1Mk", "dnH461AvNvU", "eeCoMgMMKxc", "0Q7xDpphMaQ", "HOA7C74v23s", "tXTD9qtkiBU"
        ]
    },
    "STI (Mme Salma)": {
        "BD": ["nOhQ8yOtwPo", "lUhWMzL8ucU", "CLq5J17d5fs", "p7rgqUvu9pc"],
        "Web (HTML/CSS/JS/PHP)": ["Nfq9zm4HM2I", "bDkgeJYFZaE", "yjiCpP0seEQ", "SbxSIwjWuaE"],
        "Pratique": ["FDOb8ZYAddA", "My6UdlP8Xj0", "4z54sW9FBII", "MPBhS5toq1w", "-qan0Tu6rnY", "jwNIphYng-8", "qvCqSFXyGYI", "Dhtuhd1zrW0", "fFa1N5adyh0"],
        "Théorique": ["FDOb8ZYAddA", "4z54sW9FBII", "-qan0Tu6rnY", "-nP0ZrLrG9E", "OF3a-CC46_w", "O3XGz1J0Dcc", "h_bGVQiI3IU", "Gm2TyqhvfqM", "Y6bnNTL43s0", "mnSoV40flEs", "tqIw3mPrJ3I", "trSYAbJUOe4"],
        "Bac Théorique": ["d6OMU17xZxY", "sDbrZgSqeN0", "7S431jh8oeU", "f0ECdu6HCyk", "Dw_-BAL150Q", "3AxqpmcWPlA", "zt1mSFZeSlQ", "dZLWACXnw34", "KrlpdsHyTIM", "rVlDHxJyWT4", "12ZQ6wjV37s", "Eoc34yrKotM"],
        "Bac Pratique": ["-nP0ZrLrG9E", "WHQfkfHvt44", "neFED6AEPME", "VSesY9Z2VWk", "8wikOQI3308", "e4OXXqdV3YY", "rVlDHxJyWT4", "6GecxuDL0B0", "12ZQ6wjV37s", "TUgBdRIAUQo", "IaIhkjl3I6k", "YiXVdEpbASM"]
    },
    "STI (Mr Omar)": {
        "Notion BD & SGBD": ["-nP0ZrLrG9E", "WHQfkfHvt44", "neFED6AEPME", "VSesY9Z2VWk", "8wikOQI3308", "e4OXXqdV3YY", "rVlDHxJyWT4", "6GecxuDL0B0", "12ZQ6wjV37s", "TUgBdRIAUQo", "IaIhkjl3I6k", "YiXVdEpbASM"],
        "Structure BD": ["4OlPIQ67Xso"],
        "LDD & LMD": ["6wBvSPaU7W8", "paa0f4AMVXU", "2v8AsZV-Arg", "a5mRCa3r85A"],
        "Web & JS": ["htmsE7aW96A", "MJ2RaGQ-q-U", "qu2K_TwXGf4", "2YvgPaKVfco", "6dnat3KjtLY", "30ytYN09wbY", "_3xe8JCYE8U", "FhWz9q9c0jk", "fbWl54vPNEI"],
        "PHP": ["J9EBhF6XzXA", "YTycfNlhuhM", "gyb22p5MJNE"],
        "Travaux Théoriques": ["6MJ4c8y3ysE", "KRY_Lrp0CHs", "gikuP_vv_cc", "gk1v0I-AU8k", "1bl701dCbpo", "Ylik9HJsLlA", "T7oImSYEBdo", "lvSO3syMRAU", "KrlpdsHyTIM", "d0Ci6C44yYc"],
        "Travaux Pratiques": ["-g-dXug1PZQ", "VBAoxqZ2YBo", "T5tltq3_7BI", "r5OqVrBpxuI", "XT-E6v3gPlM", "chMX5NroGvk", "bX_9f112k8g", "PuwGm11bxtg"],
        "Révision STI": ["1cKLkCQiz3A", "BNiew7n0-Mg"]
    }
};

// Security Protections (Bloquer le Clic Droit & Inspecter)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
    }
});

// Build Sidebar Menu
const treeContainer = document.getElementById('subjectTree');

if (treeContainer) {
    treeContainer.innerHTML = '';
    for (let subject in coursesData) {
        let subjectItem = document.createElement('div');
        subjectItem.className = 'accordion-item';
        
        let title = document.createElement('div');
        title.className = 'accordion-title';
        title.innerHTML = `<span>${subject}</span> <span>▼</span>`;
        title.onclick = function() {
            let content = title.nextElementSibling;
            if (content) {
                content.classList.toggle('active');
            }
        };

        let content = document.createElement('div');
        content.className = 'accordion-content';

        for (let chapter in coursesData[subject]) {
            let chapterTitle = document.createElement('div');
            chapterTitle.className = 'chapter-heading';
            chapterTitle.innerText = chapter;
            content.appendChild(chapterTitle);

            coursesData[subject][chapter].forEach(function(videoId, index) {
                let link = document.createElement('a');
                link.className = 'video-link';
                link.innerText = `▶ Séance ${index + 1}`;
                link.onclick = function() {
                    loadVideo(subject, chapter, index + 1, videoId);
                };
                content.appendChild(link);
            });
        }

        subjectItem.appendChild(title);
        subjectItem.appendChild(content);
        treeContainer.appendChild(subjectItem);
    }
}

// Load Video - Strict Embedded Player Only (Aucun bouton externe)
function loadVideo(subject, chapter, index, id) {
    const videoTitle = document.getElementById('videoTitle');
    const iframe = document.getElementById('mainIframe');
    
    if (videoTitle) {
        videoTitle.innerText = `${subject} ➔ ${chapter} (Séance ${index})`;
    }
    
    if (iframe) {
        iframe.src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&controls=1&iv_load_policy=3&fs=1`;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    }

    // Supprimer le bouton YouTube s'il existe
    let externalBtn = document.getElementById('directYoutubeBtn');
    if (externalBtn) {
        externalBtn.remove();
    }
}

// Handle Form Submission & Unlock Access
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function() {
        localStorage.setItem('bacInfoAccessGranted', 'true');
    });
}

// Check Access on Page Load
window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('bacInfoAccessGranted') === 'true') {
        let modal = document.getElementById('loginModal');
        let status = document.getElementById('accessStatus');
        if (modal) modal.style.display = 'none';
        if (status) {
            status.className = 'status-unlocked';
            status.innerText = '🔓 Accès Autorisé';
        }
    }
});

function notifyPdfDownload() {
    alert("Téléchargement du support PDF en cours...");
}
