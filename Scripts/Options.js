
// aller chercher les sliders et les valeurs des sliders dans le html
const bgVolumeSlider = document.getElementById('bgVolumeSlider');
const bgVolumeValue = document.getElementById('bgVolumeValue');

const sfxVolumeSlider = document.getElementById('sfxVolumeSlider');
const sfxVolumeValue = document.getElementById('sfxVolumeValue');

// mettre les volumes initiaux
let bgVolume = 0.05;
let sfxVolume = 1;

// mettre à jour le text en fonction de la valeur de slider (pour la musique de fond)
function updateBgVolumeText() {
    bgVolumeValue.textContent = `${Math.round(bgVolume * 100)}%`;
}

// mettre à jour le text en fonction de la valeur de slider (pour les sfx)
function updateSfxVolumeText() {
    sfxVolumeValue.textContent = `${Math.round(sfxVolume * 100)}%`;
}

// appliquer le volume pour chaque éléments
function updateAudioVolume() {
    BackgroundMusic.volume = bgVolume;
    UpgradeSound.volume = sfxVolume;
    AchievementSound.volume = sfxVolume;
}

// ajoute un événement quand le joueur change la valeur du slider
bgVolumeSlider.addEventListener('input', function() {
    bgVolume = bgVolumeSlider.value;
    updateBgVolumeText();
    updateAudioVolume();
});

// ajoute un événement quand le joueur change la valeur du slider
sfxVolumeSlider.addEventListener('input', function() {
    sfxVolume = sfxVolumeSlider.value;
    updateSfxVolumeText();
    updateAudioVolume();
});

// Initialise le text des sliders
updateBgVolumeText();
updateSfxVolumeText();

// applique le volume des sliders en début de jeu
updateAudioVolume();
