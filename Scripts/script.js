
const cookieCountElem = document.getElementById('cookieCount');
const cpsCountElem = document.getElementById('cpsCount');
const buildingsElem = document.getElementById('buildings');
const upgradesElem = document.getElementById('upgrades');
const achievementsListElem = document.getElementById('achievementsList');
const notificationElem = document.getElementById('notification');

const DisplayFrameRate = 100;

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
    return buildings.reduce((total, building) => total + building.cps * building.amount, 0);
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

    createParticle();
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

// crée des particules quand on appuie sur le bouton de cookie "thème à changer"
function createParticle() {
    const particle = document.createElement('div');
    const panelWidth = document.getElementById('left-panel').offsetWidth;
    particle.className = 'particle';
    particle.style.bottom = '0px';
    particle.style.left = `${(panelWidth/2) - (Math.random() * 2 -1) * 100}px`;
    particle.style.color = '#b5651d';
    particle.textContent = '🐶';

    document.getElementById('left-panel').appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}

//enlève la panneau du début. doit faire ceci car certain browser bloquent le son en auto play
document.getElementById("startButton").addEventListener("click", function() {
    // cache le panneau du début
    document.getElementById("startPanel").style.display = "none";

    // montre le contenu du jeu
    document.getElementById("game").style.display = "block"; // Show the game if you initially hid it
    startMusic();
});

document.getElementById('clickButton').addEventListener('click', incrementCookie);
setInterval(generateCookies, DisplayFrameRate);
updateDisplay();
renderAchievements();

/*Fonction pour creer des particule autour du clic*/
document.getElementById("clickButton").addEventListener("click", function (event) {
    const particleCount = 10; // Nombre de particules par clic
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Générer une position aléatoire autour du clic
        const angle = Math.random() * 2 * Math.PI; // Angle aléatoire
        const radius = Math.random() * 50; // Distance maximale
        const x = event.clientX + Math.cos(angle) * radius;
        const y = event.clientY + Math.sin(angle) * radius;

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
