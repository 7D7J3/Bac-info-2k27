let player;
let progressTimer = null;
let currentVideoId = "w7ejDZ8SWv8"; // Default: HTML & CSS Course
const videoProgressData = {}; // Store progress per video

// 1. YouTube API Initialization
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: currentVideoId,
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// 2. Track Video Playback State
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

// 3. Progress Tracking Loop
function startTrackingProgress() {
    stopTrackingProgress();
    
    progressTimer = setInterval(() => {
        if (player && player.getDuration) {
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

// 4. Update UI Bars & Badges
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

// 5. Switch Video Function
function loadVideo(videoId, title, element) {
    currentVideoId = videoId;
    document.getElementById('videoTitle').textContent = title;

    // Update Active UI Link
    document.querySelectorAll('.video-link').forEach(link => link.classList.remove('active-link'));
    if (element) element.classList.add('active-link');

    // Load and play new video
    if (player && player.loadVideoById) {
        player.loadVideoById(videoId);
    }

    // Restore saved progress if available
    const savedProgress = videoProgressData[videoId] || 0;
    updateUIProgress(savedProgress);
}

// Control Helpers
function playVideo() { if (player) player.playVideo(); }
function pauseVideo() { if (player) player.pauseVideo(); }
