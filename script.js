// 1. قاعدة البيانات الكاملة للدروس مقسمة حسب المواد
const lessonsData = [
    {
        moduleTitle: "Informatique & Algorithmique",
        lessons: [
            { id: "w7ejDZ8SWv8", title: "1.1 HTML & CSS Crash Course" },
            { id: "hdI2bqOjy3c", title: "1.2 JavaScript Fundamentals" },
            { id: "32M1al-Y6Ag", title: "1.3 Python Programming Basics" },
            { id: "_uQrJ0TkZlc", title: "1.4 Algorithme & Structure de Données" }
        ]
    },
    {
        moduleTitle: "Mathématiques",
        lessons: [
            { id: "3GG8Of3f9lM", title: "2.1 Limites et Continuité" },
            { id: "eI4ang4M8L8", title: "2.2 Nombres Complexes" },
            { id: "Y50_gS6_M_M", title: "2.3 Calcul Intégral" }
        ]
    },
    {
        moduleTitle: "Sciences Physiques",
        lessons: [
            { id: "N8vU_kR8jCo", title: "3.1 Circuit RC & RL" },
            { id: "P2x3Yx8XvQo", title: "3.2 Oscillations Électriques RLC" },
            { id: "8pI7S2S-IxE", title: "3.3 Chimie & Dosage" }
        ]
    },
    {
        moduleTitle: "STI (Systèmes & Technologies)",
        lessons: [
            { id: "9a0a1a2b3c4", title: "4.1 Systèmes Numériques" },
            { id: "5d6e7f8g9h0", title: "4.2 Réseaux & Bases de Données" }
        ]
    }
];

let player;
let progressTimer = null;
let currentVideoId = lessonsData[0].lessons[0].id;
const videoProgressData = {};

// 2. تعبئة الـ Sidebar أوتوماتيكياً من الـ Data
function renderSidebar() {
    const sidebarContainer = document.querySelector('.sidebar');
    if (!sidebarContainer) return;

    let htmlContent = `<h3>Course Curriculum</h3>`;

    lessonsData.forEach((module, moduleIndex) => {
        htmlContent += `
            <div class="accordion-item">
                <div class="chapter-heading">${module.moduleTitle}</div>
                <div class="accordion-content active">
        `;

        module.lessons.forEach((lesson) => {
            const isActive = lesson.id === currentVideoId ? 'active-link' : '';
            htmlContent += `
                <a class="video-link ${isActive}" onclick="loadVideo('${lesson.id}', '${lesson.title}', this)">
                    <span>${lesson.title}</span>
                    <span class="badge-status badge-red" id="badge-${lesson.id}">0%</span>
                </a>
            `;
        });

        htmlContent += `
                </div>
            </div>
        `;
    });

    sidebarContainer.innerHTML = htmlContent;
}

// 3. YouTube API Setup
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubeIframe', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    const statusText = document.getElementById('videoStateStatus');
    
    if (event.data === YT.PlayerState.PLAYING) {
        if (statusText) statusText.textContent = "Status: Playing...";
        startTrackingProgress();
    } else {
        if (statusText) statusText.textContent = "Status: Paused";
        stopTrackingProgress();
    }
}

// 4. Progress Tracking Logic
function startTrackingProgress() {
    stopTrackingProgress();
    progressTimer = setInterval(() => {
        if (player && typeof player.getCurrentTime === 'function' && typeof player.getDuration === 'function') {
            const currentTime = player.getCurrentTime();
            const duration = player.getDuration();
            
            if (duration > 0) {
                const percentage = Math.floor((currentTime / duration) * 100);
                videoProgressData[currentVideoId] = percentage;
                updateUIProgress(percentage);
            }
        }
    }, 1000);
}

function stopTrackingProgress() {
    if (progressTimer) clearInterval(progressTimer);
}

function updateUIProgress(percentage) {
    const fill = document.getElementById('progressBarFill');
    const text = document.getElementById('progressText');
    const badge = document.getElementById(`badge-${currentVideoId}`);

    if (text) text.textContent = `${percentage}%`;

    if (fill) {
        fill.style.width = `${percentage}%`;
        fill.classList.remove('level-red', 'level-orange', 'level-green');
        if (percentage < 40) fill.classList.add('level-red');
        else if (percentage < 80) fill.classList.add('level-orange');
        else fill.classList.add('level-green');
    }

    if (badge) {
        badge.textContent = `${percentage}%`;
        badge.classList.remove('badge-red', 'badge-orange', 'badge-green');
        if (percentage < 40) badge.classList.add('badge-red');
        else if (percentage < 80) badge.classList.add('badge-orange');
        else badge.classList.add('badge-green');
    }
}

// 5. Switch Video
function loadVideo(videoId, title, element) {
    currentVideoId = videoId;

    const titleEl = document.getElementById('videoTitle');
    if (titleEl) titleEl.textContent = title;

    document.querySelectorAll('.video-link').forEach(link => link.classList.remove('active-link'));
    if (element) element.classList.add('active-link');

    if (player && typeof player.loadVideoById === 'function') {
        player.loadVideoById(videoId);
    } else {
        const iframe = document.getElementById('youtubeIframe');
        if (iframe) iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
    }

    const savedProgress = videoProgressData[videoId] || 0;
    updateUIProgress(savedProgress);
}

function playVideo() { if (player && typeof player.playVideo === 'function') player.playVideo(); }
function pauseVideo() { if (player && typeof player.pauseVideo === 'function') player.pauseVideo(); }

// 6. Initialize App on Page Load
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
});
