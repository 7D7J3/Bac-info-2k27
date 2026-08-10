let player;
let progressTimer = null;
let currentVideoId = "dQw4w9WgXcQ"; // Default Video ID

// 1. YouTube API Ready
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

// 2. Track Video State (Play / Pause)
function onPlayerStateChange(event) {
    const statusText = document.getElementById('videoStateStatus');
    
    if (event.data === YT.PlayerState.PLAYING) {
        if (statusText) statusText.textContent = "الحالة: يشتغل الآن...";
        startTrackingProgress();
    } else {
        if (statusText) statusText.textContent = "الحالة: متوقف";
        stopTrackingProgress();
    }
}

// 3. Update Progress Bar Calculation
function startTrackingProgress() {
    stopTrackingProgress(); // Clear old timers if any
    
    progressTimer = setInterval(() => {
        if (player && player.getDuration) {
            const currentTime = player.getCurrentTime();
            const duration = player.getDuration();
            
            if (duration > 0) {
                const percentage = Math.floor((currentTime / duration) * 100);
                updateUIProgress(percentage);
            }
        }
    }, 1000); // تحديث كل ثانية
}

function stopTrackingProgress() {
    if (progressTimer) clearInterval(progressTimer);
}

// 4. Update UI Elements
function updateUIProgress(percentage) {
    const fill = document.getElementById('progressBarFill');
    const text = document.getElementById('progressText');
    const badge = document.getElementById(`badge-${currentVideoId}`);

    if (text) text.textContent = `${percentage}%`;
    if (fill) {
        fill.style.width = `${percentage}%`;
        
        // Change colors according to level
        fill.classList.remove('level-red', 'level-orange', 'level-green');
        if (percentage < 40) {
            fill.classList.add('level-red');
        } else if (percentage < 80) {
            fill.classList.add('level-orange');
        } else {
            fill.classList.add('level-green');
        }
    }

    if (badge) {
        badge.textContent = `${percentage}%`;
        badge.classList.remove('badge-red', 'badge-orange', 'badge-green');
        if (percentage < 40) badge.classList.add('badge-red');
        else if (percentage < 80) badge.classList.add('badge-orange');
        else badge.classList.add('badge-green');
    }
}

// Controls
function playVideo() { if (player) player.playVideo(); }
function pauseVideo() { if (player) player.pauseVideo(); }
