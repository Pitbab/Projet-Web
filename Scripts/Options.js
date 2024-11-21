
// Get the sliders and the volume display elements
const bgVolumeSlider = document.getElementById('bgVolumeSlider');
const bgVolumeValue = document.getElementById('bgVolumeValue');

const sfxVolumeSlider = document.getElementById('sfxVolumeSlider');
const sfxVolumeValue = document.getElementById('sfxVolumeValue');

// Set initial volumes
let bgVolume = 0.05;
let sfxVolume = 1;

// Update the volume text display for Background Music
function updateBgVolumeText() {
    bgVolumeValue.textContent = `${Math.round(bgVolume * 100)}%`;
}

// Update the volume text display for Sound Effects
function updateSfxVolumeText() {
    sfxVolumeValue.textContent = `${Math.round(sfxVolume * 100)}%`;
}

// Function to set the volume for all audio elements
function updateAudioVolume() {
    BackgroundMusic.volume = bgVolume;
    UpgradeSound.volume = sfxVolume;
    AchievementSound.volume = sfxVolume;
}

// Event listener for the background music volume slider change
bgVolumeSlider.addEventListener('input', function() {
    bgVolume = bgVolumeSlider.value;
    updateBgVolumeText();
    updateAudioVolume();
});

// Event listener for the sound effects volume slider change
sfxVolumeSlider.addEventListener('input', function() {
    sfxVolume = sfxVolumeSlider.value;
    updateSfxVolumeText();
    updateAudioVolume();
});

// Initialize the volume text display
updateBgVolumeText();
updateSfxVolumeText();

// Set initial volume for all audio elements
updateAudioVolume();
