//fichier pour stocker les statistiques du joueur

let cookies = 0;
let clickMultiplier = 1;
let playerClicks = 0;
let manualCookies = 0;
let totalBuildingConstructed = 0;
let timePlayed = 0;
let cheatMultiplier = 1;

const cheatToggle = document.getElementById('cheatToggle');

// Add an event listener to handle the toggle change
cheatToggle.addEventListener('change', (event) => {
    if (event.target.checked) {
        cheatMultiplier = 10000; // Activate cheats
        console.log('Cheats activated! Multiplier set to:', cheatMultiplier);
    } else {
        cheatMultiplier = 1; // Deactivate cheats
        console.log('Cheats deactivated. Multiplier reset to:', cheatMultiplier);
    }
});
