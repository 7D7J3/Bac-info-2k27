// Database Kamla mta3 les cours (194 Vidéos)
const coursesData = {
    "Algo & Programmation": {
        "Rappel 2ème et 3ème": ["K5JXPhnLRgk", "anUmFPScezU", "9ClIgr3c0MA", "FAIczg82_S8", "bJOl8Gpijyk", "6RFddI0YWYg", "VUw0jI3QoO4"],
        "Trimestre 1": ["LsSBHXYKaac", "hfTkdp0UmfQ", "tL-y0NPxcbM", "bi-7zW2drJY", "InDFw85-mN8", "Y-7voDpFFpQ", "1t5q-BtpHiM", "24gXLZ0-tL8", "doehlCKXVIs", "wIT2BbFYmvs", "V6e7GcFVT3s", "zgGEGCTn4bg", "1ruppPqt3KY", "isRvFA8QbiU", "B54jAXctkBs", "cDR8asFb5as", "uzqtK7IhX04", "nlbmCQkZQHc", "4b8OPM93MH8"],
        "Trimestre 2": ["9lxnnV171Ts", "KFW-xCngdC0", "XdVqkVmHNPQ", "x54HPYyElHY", "9R_BeAGeIzo", "vJcMFAAxlow", "dR8iww78pFQ", "jz-9xDOAAXo", "zhOiRgP5gDc", "c0Lv5P9R1Ks", "u9dHK5Yj718", "pG_d-d9NyT4", "5DPs2PTkLFU", "UFx-5k9weVU", "mtt2j261WHk", "4aoZe8DdCdc"],
        "Trimestre 3": ["LN3BePic4ZA", "ai3pgdcN438", "azsNLQxkiJw", "-i21Pi9EJhM", "DR_iukhe3zU", "-s_wQEyoU8Q", "VjvekSMvsW4", "EYGiRrctT-A", "w03ZUo4WjXw"],
        "Interface Graphique": ["9ACP7VLEd0s", "fYvTpQY0ol8", "trhCJTxRdeg", "AKR8-0rUwt8", "vfU9GYUSxyQ", "upBeJIeuB_I", "qKkzKXkct9w", "sVv-V8MexcY", "cMUf4ETzRv4", "y9ro35BGDkM", "PbqCrKkItHw", "v6dUDS6lqkY", "6bnr1y5gCuA", "DIFpuR4shas", "xMv-UFwJg_M", "3bgEDUWRdQ8", "maT-9UO1NWg", "yqStV_JJD4Y", "ZZnSAFZhbso"]
    },
    "Mathématiques": {
        "Trimestre 1": ["wRDKMs8_z3A", "4syFXHGbzpg", "XAQ9-hfTygo", "scWTkw1iU4o", "jh1xun9boZ4", "74nTDiO34EE", "-GMiKisOTmk", "NWGUrAkJGwI", "ynbE18DkuB8", "AaZZ2hNSyFM", "C5wldBYUUhY", "ME9qVYPG02k", "lWXKeBOCdSA", "i1fqvWiVIvA", "YNB8PGM5IPc", "mX3y12i-nmc", "1IeHHca_F18", "cMv7nFtHpGg", "oQw8cGdGbYQ"],
        "Trimestre 2": ["LLqUvqxbIFk", "CNIvYQefF-c", "t0CK3zqTdiw", "8QBYx_kZyso", "w2qg0t8anRs", "BcHwkOL6ty0", "FG6gQLiA6Kk", "faShoxwYfdk", "PY6ZipSH8mE", "dyQBWEQEMvo", "uYVFPjKnLMc", "L5Ob5zQZWx8", "zx-D5iWcbr0"],
        "Trimestre 3": ["egToxKxTGWU", "0faFMobSWVU", "ZZeVQkiupIw", "5rEKeLpJHug", "U1KSb815cMI", "k7P6jNNg3ik", "R3LSIig28Fc", "PuYGqCr2Xug", "1q7bMphKX1o", "lgcPyoIdNgs", "WMQOtQqsYZU", "93cWjvS9PsU", "OeekX0G6Xcc", "VpZ2jvY9Uy4", "y49ZNuE2qrw", "Un_E9putrXE"]
    },
    "Physique & Chimie": {
        "Physique T1": ["hAH0U4yJdU8", "_p5-lXf62_E", "mj6U1ZniGLM", "mIsIOa9zpGo", "KYOXitzanaA", "75he0zLHMvk", "pBpeLKX_6b8", "5YTGWRWZ_gc", "F7jaUv0uMAo", "Q1epnmMbeOI", "2riqdA1YaHM", "yU1367szj-w", "Ga-5IK1FY0E", "PWrSoz92sLw"],
        "Chimie": ["3SLmnbcuGpU", "0uTizl9xFcw", "PRXzJl25UFw", "aJsvzYq3XQQ", "OyFA5vu8GpI", "gHbkgvI97Xo", "PnXgRwmm4Lg", "cZTJsQIvnCk"],
        "Physique T2": ["QO7DpvLqKxo", "w1CnIZu7C6w", "fJ0FgMaLw-k", "yYzrIDRq4-0", "v8qB4Kpb3q0", "c4Aag9lW8eY", "2lSVuGnXKUI", "VXiGGajRF0U", "PTqjpNHkw4c"],
        "Physique T3": ["MyGyv33UdNM", "91fzBx7kwJI", "a7t2R2tAB9g", "TamioYQ8nw4", "dlW08Fb2R-Q", "Zn0FvSwuAOA", "7qMDHfahHEg", "n2sdDsv945Q"],
        "Révision Physique": ["rIOrdrDqHtc", "sbG0CTUDNMc", "KXGlETTi1Mk", "dnH461AvNvU", "eeCoMgMMKxc", "0Q7xDpphMaQ", "HOA7C74v23s", "tXTD9qtkiBU"]
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

// URL الجديد متاع الـ Apps Script
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAd7S5kJ2Q6wR_u_-Tlrw55tXg0b0THZS82eKgNM-_C4zBgIAMmGGMyqG94B7L_29M/exec";

// Mapping matière -> page (utilisé par le bandeau "Reprendre où j'étais" de l'accueil)
const subjectPages = {
    "Algo & Programmation": "prog.html",
    "Mathématiques": "math.html",
    "Physique & Chimie": "physique.html",
    "STI (Mme Salma)": "sti-salma.html",
    "STI (Mr Omar)": "sti-omar.html"
};

// URL du Web App Google Apps Script qui gère les NOTES PARTAGÉES.
// (déploiement séparé de SCRIPT_URL — même Code.gs, mais nouvelle URL générée
// lors de la création du nouveau déploiement)
const NOTES_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzlzSl5LCSG33gIdq1zTl5cFLo4Fkd3rGtN_dUOEdX0pU_8pXf4mZ5J8C2K1OC4Hovk/exec";

// Date du Bac (session Tunisie) — le ministère n'a pas encore publié le calendrier 2027,
// cette date est une estimation à ajuster dès que le calendrier officiel sort.
const BAC_DATE = new Date('2027-06-02T08:00:00');

function updateBacCountdown() {
    const chips = document.querySelectorAll('.countdown-chip');
    if (!chips.length) return;
    const diffDays = Math.ceil((BAC_DATE - new Date()) / 86400000);
    const text = diffDays > 0 ? `⏳ J-${diffDays} avant le Bac` : `💪 Bonne chance pour le Bac !`;
    chips.forEach(chip => chip.textContent = text);
}

// Anti-Inspect Protection
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I','J','C','i','j','c'].includes(e.key)) || (e.ctrlKey && ['u','U','s','S'].includes(e.key))) {
        e.preventDefault();
        return false;
    }
});

// Auto Logout at Midnight (00:00)
function checkMidnightLogout() {
    const lastLoginDate = localStorage.getItem('loginDate');
    const todayDate = new Date().toDateString();

    if (lastLoginDate && lastLoginDate !== todayDate) {
        logoutUser();
    }
}
setInterval(checkMidnightLogout, 10000);

function logoutUser() {
    localStorage.removeItem('bacInfoAccessGranted');
    localStorage.removeItem('loginDate');
    localStorage.removeItem('userName');
    location.reload();
}

// Load YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var isPlaying = false;
var playerReady = false;
let isUserDragging = false;
let generatedCode = "";
let currentEmailAttempt = "";
let currentNameAttempt = "";
let currentVideoId = "";
let progressTimer = null;
const speeds = [1, 1.25, 1.5, 1.75, 2];
let currentSpeedIndex = 0;

function onYouTubeIframeAPIReady() {
    const currentSubject = document.body.getAttribute('data-subject');
    if (currentSubject && coursesData[currentSubject]) {
        const firstChapter = Object.keys(coursesData[currentSubject])[0];
        currentVideoId = coursesData[currentSubject][firstChapter][0];
    }

    if (document.getElementById('player')) {
        player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: currentVideoId || 'K5JXPhnLRgk',
            playerVars: {
                'controls': 0,
                'disablekb': 1,
                'modestbranding': 1,
                'rel': 0,
                'playsinline': 1
            },
            events: {
                'onReady': () => playerReady = true,
                'onStateChange': onPlayerStateChange
            }
        });
        loadNotesForVideo(currentVideoId || 'K5JXPhnLRgk');
    }
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true;
        startTrackingProgress();
    } else {
        isPlaying = false;
        stopTrackingProgress();
    }
}

function startTrackingProgress() {
    stopTrackingProgress();
    progressTimer = setInterval(() => {
        if (!isUserDragging && playerReady && player && typeof player.getCurrentTime === 'function' && typeof player.getDuration === 'function') {
            const currentTime = player.getCurrentTime();
            const duration = player.getDuration();

            if (duration > 0) {
                const percentage = (currentTime / duration) * 100;
                updateUIProgress(currentTime, duration, percentage);
            }
        }
    }, 500);
}

function stopTrackingProgress() {
    if (progressTimer) clearInterval(progressTimer);
}

function formatTime(sec) {
    let m = Math.floor(sec / 60);
    let s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function updateUIProgress(current, duration, percentage) {
    const progressBar = document.getElementById('progressBar');
    const timeDisplay = document.getElementById('timeDisplay');
    const badge = document.getElementById(`badge-${currentVideoId}`);

    if (progressBar && !isUserDragging) progressBar.value = percentage;
    if (timeDisplay) timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;

    if (badge) {
        badge.textContent = `${Math.floor(percentage)}%`;
        badge.classList.remove('badge-red', 'badge-orange', 'badge-green');
        if (percentage < 40) badge.classList.add('badge-red');
        else if (percentage < 80) badge.classList.add('badge-orange');
        else badge.classList.add('badge-green');
    }
}

// Display Name Function — n7ib fih w yestaamel ki l'esm mawjoud fi localStorage
// (jeya mel login form), 3adech ma fama prompt() ki ma fama esm.
function updateDisplayName() {
    const nameSpan = document.getElementById('usernameDisplay');
    const savedName = localStorage.getItem('userName');

    if (nameSpan) {
        nameSpan.textContent = (savedName && savedName.trim() !== '') ? savedName.trim() : 'Élève';
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    checkMidnightLogout();
    updateDisplayName();

    // Logout Button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm("Voulez-vous vraiment vous déconnecter ?")) {
                logoutUser();
            }
        });
    }

    const currentSubject = document.body.getAttribute('data-subject');
    const treeContainer = document.getElementById('subjectTree');

    if (treeContainer && currentSubject && coursesData[currentSubject]) {
        treeContainer.innerHTML = '';
        const subjectData = coursesData[currentSubject];

        for (let chapter in subjectData) {
            let chapterTitle = document.createElement('div');
            chapterTitle.className = 'chapter-heading';
            chapterTitle.innerText = chapter;
            treeContainer.appendChild(chapterTitle);

            subjectData[chapter].forEach(function(videoId, index) {
                let link = document.createElement('a');
                link.className = 'video-link';
                link.innerHTML = `
                    <span>▶ Séance ${index + 1}</span>
                    <span class="badge-status badge-red" id="badge-${videoId}">0%</span>
                `;
                link.onclick = function() { loadVideo(chapter, index + 1, videoId, link); };
                treeContainer.appendChild(link);
            });
        }
    }

    // Controls Logic
    const playBtn = document.getElementById('playPauseBtn');
    const rewindBtn = document.getElementById('rewindBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const speedBtn = document.getElementById('speedBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const progressBar = document.getElementById('progressBar');
    const playerWrapper = document.querySelector('.player-wrapper');

    if (speedBtn) {
        speedBtn.addEventListener('click', function() {
            if (playerReady && player && player.setPlaybackRate) {
                currentSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
                const newSpeed = speeds[currentSpeedIndex];
                player.setPlaybackRate(newSpeed);
                speedBtn.innerText = `⚡ ${newSpeed}x`;
            }
        });
    }

    if (fullscreenBtn && playerWrapper) {
        fullscreenBtn.addEventListener('click', function() {
            if (!document.fullscreenElement) {
                playerWrapper.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });
    }

    if (progressBar) {
        progressBar.addEventListener('mousedown', () => isUserDragging = true);
        progressBar.addEventListener('touchstart', () => isUserDragging = true);

        const handleSeek = function() {
            if (playerReady && player && player.getDuration) {
                const targetPercent = parseFloat(this.value);
                const targetTime = (player.getDuration() * targetPercent) / 100;
                player.seekTo(targetTime, true);
            }
        };

        progressBar.addEventListener('input', handleSeek);
        progressBar.addEventListener('change', handleSeek);
        progressBar.addEventListener('mouseup', () => isUserDragging = false);
        progressBar.addEventListener('touchend', () => isUserDragging = false);
    }

    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (rewindBtn) rewindBtn.addEventListener('click', () => seekRelative(-10));
    if (forwardBtn) forwardBtn.addEventListener('click', () => seekRelative(10));

    // Smart Login Logic
    const loginForm = document.getElementById('loginForm');
    const codeForm = document.getElementById('codeForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('userName').value.trim();
            const email = document.getElementById('userEmail').value.trim().toLowerCase();
            const pass = document.getElementById('userPass').value.trim();

            currentEmailAttempt = email;
            currentNameAttempt = name;

            let verifiedEmails = JSON.parse(localStorage.getItem('verifiedEmails') || "[]");

            if (verifiedEmails.includes(email)) {
                localStorage.setItem('bacInfoAccessGranted', 'true');
                localStorage.setItem('loginDate', new Date().toDateString());
                localStorage.setItem('userName', name);
                updateDisplayName();
                unlockPlatform();
                return;
            }

            // إيجاد كود جديد
            generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

            // بعث المعطيات + الكود للـ Apps Script
            fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: pass,
                    code: generatedCode
                })
            }).then(() => {
                loginForm.style.display = 'none';
                codeForm.style.display = 'block';
            }).catch(() => {
                alert("Erreur lors de l'envoi.");
            });
        });
    }

    if (codeForm) {
        codeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const enteredCode = document.getElementById('verificationCodeInput').value.trim();

            if (enteredCode === generatedCode) {
                let verifiedEmails = JSON.parse(localStorage.getItem('verifiedEmails') || "[]");
                if (!verifiedEmails.includes(currentEmailAttempt)) {
                    verifiedEmails.push(currentEmailAttempt);
                    localStorage.setItem('verifiedEmails', JSON.stringify(verifiedEmails));
                }

                localStorage.setItem('bacInfoAccessGranted', 'true');
                localStorage.setItem('loginDate', new Date().toDateString());
                localStorage.setItem('userName', currentNameAttempt || 'Élève');
                updateDisplayName();
                unlockPlatform();
            } else {
                alert("Code incorrect ! Contactez l'administrateur.");
            }
        });
    }

    if (localStorage.getItem('bacInfoAccessGranted') === 'true') {
        unlockPlatform();
    }

    // Note form (partagée avec tout le monde, avec le nom de l'auteur)
    const noteForm = document.getElementById('noteForm');
    if (noteForm) {
        noteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = document.getElementById('noteInput');
            const text = input.value.trim();
            if (!text || !currentVideoId) return;
            const name = localStorage.getItem('userName') || 'Élève';

            fetch(NOTES_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ videoId: currentVideoId, name: name, text: text })
            }).then(() => {
                input.value = '';
                loadNotesForVideo(currentVideoId);
            }).catch(() => alert("Erreur lors de l'envoi de la note."));
        });
    }

    // Documents PDF : recherche + modal de preview
    const pdfsSearch = document.getElementById('pdfsSearch');
    if (pdfsSearch) {
        pdfsSearch.addEventListener('input', function() {
            renderPdfItems(this.value);
        });
    }

    const pdfPreviewClose = document.getElementById('pdfPreviewClose');
    if (pdfPreviewClose) pdfPreviewClose.addEventListener('click', closePdfPreview);

    const pdfPreviewModal = document.getElementById('pdfPreviewModal');
    if (pdfPreviewModal) {
        pdfPreviewModal.addEventListener('click', function(e) {
            if (e.target === pdfPreviewModal) closePdfPreview();
        });
    }

    showResumeBannerIfAny();
    showHomeResumeBanner();
    updateBacCountdown();
    loadPdfsForSubject();
});

// ---------- "Reprendre où j'étais" ----------
function saveResumePoint(chapter, index, videoId) {
    const subject = document.body.getAttribute('data-subject');
    if (!subject) return;
    const point = { subject, chapter, index, videoId, ts: Date.now() };
    localStorage.setItem('lastWatched_' + subject, JSON.stringify(point));
    localStorage.setItem('lastWatchedGlobal', JSON.stringify(point));
}

function showResumeBannerIfAny() {
    const subject = document.body.getAttribute('data-subject');
    const banner = document.getElementById('resumeBanner');
    if (!subject || !banner) return;
    const raw = localStorage.getItem('lastWatched_' + subject);
    if (!raw) return;
    try {
        const point = JSON.parse(raw);
        document.getElementById('resumeLabel').textContent = `${point.chapter} — Séance ${point.index}`;
        banner.style.display = 'flex';
        document.getElementById('resumeBtn').onclick = function() {
            const badge = document.getElementById('badge-' + point.videoId);
            const linkEl = badge ? badge.closest('.video-link') : null;
            loadVideo(point.chapter, point.index, point.videoId, linkEl);
            banner.style.display = 'none';
        };
    } catch (e) { /* données corrompues, on ignore */ }
}

function showHomeResumeBanner() {
    const banner = document.getElementById('resumeBannerHome');
    if (!banner) return;
    const raw = localStorage.getItem('lastWatchedGlobal');
    if (!raw) return;
    try {
        const point = JSON.parse(raw);
        const page = subjectPages[point.subject];
        if (!page) return;
        document.getElementById('resumeLabelHome').textContent = `${point.subject} — ${point.chapter} — Séance ${point.index}`;
        document.getElementById('resumeLinkHome').href = page;
        banner.style.display = 'flex';
    } catch (e) { /* données corrompues, on ignore */ }
}

// ---------- Notes partagées (visibles par tout le monde, avec nom de l'auteur) ----------
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
}

function loadNotesForVideo(videoId) {
    const list = document.getElementById('notesList');
    if (!list) return;

    if (!NOTES_SCRIPT_URL || NOTES_SCRIPT_URL.indexOf('COLLEZ_ICI') === 0) {
        list.innerHTML = '<p class="notes-empty">Notes partagées pas encore configurées côté admin.</p>';
        return;
    }

    list.innerHTML = '<p class="notes-empty">Chargement des notes...</p>';
    fetch(NOTES_SCRIPT_URL + '?videoId=' + encodeURIComponent(videoId))
        .then(res => res.json())
        .then(notes => {
            if (!notes || !notes.length) {
                list.innerHTML = '<p class="notes-empty">Aucune note pour cette séance — sois le premier à en ajouter une !</p>';
                return;
            }
            list.innerHTML = notes.map(n => `
                <div class="note-item">
                    <span class="note-author">${escapeHtml(n.name || 'Élève')}</span>
                    <p class="note-text">${escapeHtml(n.text)}</p>
                </div>
            `).join('');
        })
        .catch(() => { list.innerHTML = '<p class="notes-empty">Impossible de charger les notes pour le moment.</p>'; });
}

// ---------- Documents PDF (cours / séries / corrections), gérés depuis le Google Sheet "PDFs" ----------
let allPdfItems = [];

function getPdfIcon(title) {
    const t = (title || '').toLowerCase();
    if (t.indexOf('correc') !== -1) return '✅';
    if (t.indexOf('série') !== -1 || t.indexOf('serie') !== -1 || t.indexOf('exercice') !== -1) return '📝';
    if (t.indexOf('cours') !== -1) return '📘';
    return '📁';
}

function extractDriveId(link) {
    const folderMatch = (link || '').match(/\/folders\/([a-zA-Z0-9_-]+)/);
    if (folderMatch) return { id: folderMatch[1], type: 'folder' };
    const fileMatch = (link || '').match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch) return { id: fileMatch[1], type: 'file' };
    return null;
}

function buildPreviewUrl(link) {
    const parsed = extractDriveId(link);
    if (!parsed) return null;
    if (parsed.type === 'folder') {
        return 'https://drive.google.com/embeddedfolderview?id=' + parsed.id + '#grid';
    }
    return 'https://drive.google.com/file/d/' + parsed.id + '/preview';
}

function openPdfPreview(link, title) {
    const modal = document.getElementById('pdfPreviewModal');
    const frame = document.getElementById('pdfPreviewFrame');
    const titleEl = document.getElementById('pdfPreviewTitle');
    const openLink = document.getElementById('pdfPreviewOpenLink');
    if (!modal || !frame) return;

    frame.src = buildPreviewUrl(link) || '';
    if (titleEl) titleEl.textContent = title || 'Document';
    if (openLink) openLink.href = link;
    modal.style.display = 'flex';
}

function closePdfPreview() {
    const modal = document.getElementById('pdfPreviewModal');
    const frame = document.getElementById('pdfPreviewFrame');
    if (modal) modal.style.display = 'none';
    if (frame) frame.src = '';
}

function renderPdfItems(filterText) {
    const container = document.getElementById('pdfsList');
    const countEl = document.getElementById('pdfsCount');
    if (!container) return;

    const filter = (filterText || '').toLowerCase().trim();
    const filtered = !filter ? allPdfItems : allPdfItems.filter(it =>
        (it.chapter || '').toLowerCase().indexOf(filter) !== -1 ||
        (it.title || '').toLowerCase().indexOf(filter) !== -1
    );

    if (countEl) {
        countEl.textContent = allPdfItems.length
            ? `(${allPdfItems.length} document${allPdfItems.length > 1 ? 's' : ''})`
            : '';
    }

    if (!filtered.length) {
        container.innerHTML = `<p class="notes-empty">${allPdfItems.length ? 'Aucun document ne correspond à ta recherche.' : 'Aucun document ajouté pour cette matière pour le moment.'}</p>`;
        return;
    }

    const byChapter = {};
    filtered.forEach(it => {
        const chapter = it.chapter || 'Général';
        if (!byChapter[chapter]) byChapter[chapter] = [];
        byChapter[chapter].push(it);
    });

    container.innerHTML = Object.keys(byChapter).map(chapter => `
        <div class="pdf-chapter">
            <div class="pdf-chapter-title">${escapeHtml(chapter)}</div>
            <div class="pdf-links">
                ${byChapter[chapter].map(it => `
                    <button type="button" class="pdf-link" data-link="${escapeHtml(it.link)}" data-title="${escapeHtml(it.title || 'Document')}">
                        ${getPdfIcon(it.title)} ${escapeHtml(it.title || 'Document')}
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.pdf-link').forEach(btn => {
        btn.addEventListener('click', () => openPdfPreview(btn.getAttribute('data-link'), btn.getAttribute('data-title')));
    });
}

function loadPdfsForSubject() {
    const container = document.getElementById('pdfsList');
    const subject = document.body.getAttribute('data-subject');
    if (!container || !subject) return;

    if (!NOTES_SCRIPT_URL || NOTES_SCRIPT_URL.indexOf('COLLEZ_ICI') === 0) {
        container.innerHTML = '<p class="notes-empty">Documents pas encore configurés côté admin.</p>';
        return;
    }

    container.innerHTML = '<p class="notes-empty">Chargement des documents...</p>';
    fetch(NOTES_SCRIPT_URL + '?type=pdfs&subject=' + encodeURIComponent(subject))
        .then(res => res.json())
        .then(items => {
            allPdfItems = items || [];
            renderPdfItems('');
        })
        .catch(() => { container.innerHTML = '<p class="notes-empty">Impossible de charger les documents pour le moment.</p>'; });
}

function loadVideo(chapter, index, id, element) {
    currentVideoId = id;
    const videoTitle = document.getElementById('videoTitle');
    if (videoTitle) videoTitle.innerText = `${chapter} ➔ Séance ${index}`;

    document.querySelectorAll('.video-link').forEach(l => l.classList.remove('active-link'));
    if (element) element.classList.add('active-link');

    if (playerReady && player && player.loadVideoById) {
        player.loadVideoById(id);
    }

    saveResumePoint(chapter, index, id);
    loadNotesForVideo(id);
}

function seekRelative(seconds) {
    if (playerReady && player && player.getCurrentTime) {
        player.seekTo(player.getCurrentTime() + seconds, true);
    }
}

function togglePlay() {
    if (playerReady && player) {
        if (isPlaying) player.pauseVideo();
        else player.playVideo();
    }
}

function unlockPlatform() {
    let modal = document.getElementById('loginModal');
    if (modal) modal.style.display = 'none';
}
