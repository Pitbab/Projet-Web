
const cookieCountElem = document.getElementById('cookieCount');
const cpsCountElem = document.getElementById('cpsCount');
const buildingsElem = document.getElementById('buildings');
const upgradesElem = document.getElementById('upgrades');
const achievementsListElem = document.getElementById('achievementsList');
const notificationElem = document.getElementById('notification');

const DisplayFrameRate = 100;

//sounds
const UpgradeSound = new Audio('/Sounds/UpgradeSound.wav');
const AchievementSound = new Audio('/Sounds/AchievementSound.wav');
const BackgroundMusic = new Audio('/Sounds/BG2.wav');

// browser block autoplay
function startMusic() {
    BackgroundMusic.loop = true;
    BackgroundMusic.volume = 0.05;
    BackgroundMusic.play();
}


function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.tab button').forEach(button => button.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(sectionId + 'Tab').classList.add('active');
}

function calculateCPS() {
    return buildings.reduce((total, building) => total + building.cps * building.amount, 0);
}

function updateDisplay() {
    cookieCountElem.textContent = Math.floor(cookies);
    cpsCountElem.textContent = calculateCPS();
    renderBuildings();
    renderUpgrades();
}

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

function generateCookies() {
    cookies += calculateCPS() * DisplayFrameRate / 1000;
    timePlayed+= DisplayFrameRate / 1000;
    achievementManager.checkTimeAchievements(timePlayed);
    updateDisplay();

}

// Create a particle effect on click
function createParticle() {
    const particle = document.createElement('div');
    const panelWidth = document.getElementById('left-panel').offsetWidth;
    particle.className = 'particle';
    particle.style.bottom = '0px';
    particle.style.left = `${(panelWidth/2) - (Math.random() * 2 -1) * 100}px`;
    particle.style.color = '#b5651d';
    particle.textContent = '🍪';

    document.getElementById('left-panel').appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}

//un hide game -> browser block audio auto play
document.getElementById("startButton").addEventListener("click", function() {
    // Hide the start panel
    document.getElementById("startPanel").style.display = "none";

    // Show the game content
    document.getElementById("game").style.display = "block"; // Show the game if you initially hid it
    startMusic();
});

document.getElementById('clickButton').addEventListener('click', incrementCookie);
setInterval(generateCookies, DisplayFrameRate);
updateDisplay();
renderAchievements();
