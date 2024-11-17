
const cookieCountElem = document.getElementById('cookieCount');
const cpsCountElem = document.getElementById('cpsCount');
const buildingsElem = document.getElementById('buildings');
const upgradesElem = document.getElementById('upgrades');
const achievementsListElem = document.getElementById('achievementsList');
const notificationElem = document.getElementById('notification');

const DisplayFrameRate = 100;

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
    timePlayed++;
    achievementManager.checkTimeAchievements(timePlayed);
    updateDisplay();

}

// Create a particle effect on click
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}px`;
    particle.style.color = '#b5651d';
    particle.textContent = '🍪';

    document.getElementById('game').appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}

document.getElementById('clickButton').addEventListener('click', incrementCookie);
setInterval(generateCookies, DisplayFrameRate);
updateDisplay();
renderAchievements();
