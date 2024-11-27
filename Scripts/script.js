
const cookieCountElem = document.getElementById('cookieCount');
const cpsCountElem = document.getElementById('cpsCount');
const buildingsElem = document.getElementById('buildings');
const upgradesElem = document.getElementById('upgrades');
const achievementsListElem = document.getElementById('achievementsList');
const notificationElem = document.getElementById('notification');

const DisplayFrameRate = 10;

//les sons déclarés
const UpgradeSound = new Audio('/Sounds/UpgradeSound.wav');
const AchievementSound = new Audio('/Sounds/AchievementSound.wav');
const BackgroundMusic = new Audio('/Sounds/BG2.wav');

// commence la musique
function startMusic() {
    BackgroundMusic.loop = true;
    BackgroundMusic.volume = 0.05;
    BackgroundMusic.play();
}


//gère la transition entre les onglets (game, achievements et options)
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.tab button').forEach(button => button.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(sectionId + 'Tab').classList.add('active');
}

//calul le nombre de cookie par seconde produit "thème à changer"
function calculateCPS() {
    return buildings.reduce((total, building) => total + (building.cps * building.Multipliers) * building.amount, 0);
}

//met à jour l'écran (les batiments et les upgrades)
function updateDisplay() {
    cookieCountElem.textContent = Math.floor(cookies);
    cpsCountElem.textContent = calculateCPS();
    renderBuildings();
    renderUpgrades();
}

//ajoute des cookies quand on clique "thème à changer"
function incrementCookie() {

    //update counts
    cookies += clickMultiplier;
    playerClicks ++;
    manualCookies += clickMultiplier;

    updateDisplay();
    achievementManager.checkCookieAchievements(cookies);
    achievementManager.checkClickAchievements(playerClicks)

}

//ajoute des cookies générés par les batiments "thème à changer"
function generateCookies() {
    cookies += calculateCPS() * DisplayFrameRate / 1000;
    timePlayed+= DisplayFrameRate / 1000;
    achievementManager.checkTimeAchievements(timePlayed);
    updateDisplay();

}

//enlève la panneau du début. doit faire ceci car certain browser bloquent le son en auto play
document.getElementById("startButton").addEventListener("click", function() {
    // cache le panneau du début
    document.getElementById("startPanel").style.display = "none";

    // montre le contenu du jeu
    document.getElementById("game").style.display = "block"; // Show the game if you initially hid it
    startMusic();
});

const floatingButtonsContainer = document.getElementById('floatingButtonsContainer');

function createFloatingButton() {
    const button = document.createElement('button');
    button.classList.add('floating-button');
    button.innerText = "+1000";

    // Positionnement aléatoire
    const containerWidth = floatingButtonsContainer.offsetWidth;
    const containerHeight = floatingButtonsContainer.offsetHeight;
    const randomX = Math.random() * (containerWidth - 100); // Réduit 50 pour tenir compte de la largeur du bouton
    const randomY = Math.random() * (containerHeight - 100);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Ajouter un événement au clic
    button.addEventListener('click', () => {
        cookies += 1000; // Ajoutez les points
        updateDisplay(); // Mettez à jour l'affichage
        button.remove(); // Supprimez le bouton
    });

    // Ajouter le bouton au conteneur
    floatingButtonsContainer.appendChild(button);

    // Supprimer automatiquement le bouton après un certain temps
    setTimeout(() => {
        if (button.parentElement) {
            button.remove();
        }
    }, 5000); // Le bouton disparaît après 5 secondes
}

// Générer des boutons aléatoirement toutes les 5 à 10 secondes
function startFloatingButtons() {
    setInterval(() => {
        createFloatingButton();
    }, Math.random() * 5000 + 5000); // Intervalle entre 5 et 10 secondes
}

/*Fonction pour creer des particule autour du clic*/
document.getElementById("clickButton").addEventListener("click", function (event) {
    const particleCount = 10; // Nombre de particules par clic
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Générer une position aléatoire autour du clic
        const angle = Math.random() * 2 * Math.PI; // Angle aléatoire
        const radius = Math.random() * 50; // Distance maximale
        const x = event.clientX + Math.cos(angle) * radius + window.scrollX;
        const y = event.clientY + Math.sin(angle) * radius + window.scrollY;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Ajouter la particule au document
        document.body.appendChild(particle);

        // Supprimer la particule après l'animation
        setTimeout(() => {
            particle.remove();
        }, 1000); // Temps égal à la durée de l'animation
    }
});
// Lancer les boutons flottants lorsque le jeu démarre
document.getElementById("startButton").addEventListener("click", function() {
    startFloatingButtons();
});

document.getElementById('clickButton').addEventListener('click', incrementCookie);
setInterval(generateCookies, DisplayFrameRate);
updateDisplay();
renderAchievements();

// Récupérez le bouton
const toggleThemeButton = document.getElementById('toggleThemeButton');

// Vérifiez le mode actuel dans localStorage (persistance)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleThemeButton.textContent = 'Mode Clair ☀️';
}

// Ajoutez un gestionnaire pour basculer le thème
toggleThemeButton.addEventListener('click', () => {
    // Bascule la classe dark-mode sur le body
    document.body.classList.toggle('dark-mode');

    // Changez le texte du bouton selon le thème actif
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Mode Clair ☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleThemeButton.textContent = 'Mode Sombre 🌙';
        localStorage.setItem('theme', 'light');
    }
});



