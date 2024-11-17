let cookies = 0;
let clickMultiplier = 1;
const buildings = [
    { name: 'Cursor', cost: 10, cps: 0.1, amount: 0 },
    { name: 'Grandma', cost: 100, cps: 1, amount: 0 },
    { name: 'Factory', cost: 1000, cps: 10, amount: 0 },
];
const upgrades = [
    { name: 'Double Clicks', cost: 50, multiplier: 2, purchased: false },
    { name: 'Triple Clicks', cost: 200, multiplier: 3, purchased: false },
];
const achievements = [
    { name: 'First Cookie!', requirement: 1, unlocked: false },
    { name: 'Hundred Cookies', requirement: 100, unlocked: false },
    { name: 'Cookie Empire', requirement: 1000, unlocked: false },
];

const cookieCountElem = document.getElementById('cookieCount');
const cpsCountElem = document.getElementById('cpsCount');
const buildingsElem = document.getElementById('buildings');
const upgradesElem = document.getElementById('upgrades');
const achievementsListElem = document.getElementById('achievementsList');
const notificationElem = document.getElementById('notification');

function showNotification(message) {
    notificationElem.textContent = message;
    notificationElem.style.display = 'block';
    notificationElem.style.opacity = '1';
    setTimeout(() => {
        notificationElem.style.opacity = '0';
        setTimeout(() => notificationElem.style.display = 'none', 500);
    }, 2000);
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.tab button').forEach(button => button.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(sectionId + 'Tab').classList.add('active');
}

function updateDisplay() {
    cookieCountElem.textContent = Math.floor(cookies);
    cpsCountElem.textContent = calculateCPS();
    renderBuildings();
    renderUpgrades();
}

function calculateCPS() {
    return buildings.reduce((total, building) => total + building.cps * building.amount, 0);
}

function incrementCookie() {
    cookies += clickMultiplier;
    createParticle();
    updateDisplay();
    checkAchievements();
}

function generateCookies() {
    cookies += calculateCPS();
    updateDisplay();
}

function checkAchievements() {
    achievements.forEach(achievement => {
        if (!achievement.unlocked && cookies >= achievement.requirement) {
            achievement.unlocked = true;
            showNotification(`🎉 Achievement Unlocked: ${achievement.name}`);
            renderAchievements();
        }
    });
}
// Fonction achievement
function renderAchievements() {
    achievementsListElem.innerHTML = '';
    achievements.forEach(achievement => {
        if (achievement.unlocked) {
            const p = document.createElement('p');
            p.textContent = `🎉 ${achievement.name}`;
            achievementsListElem.appendChild(p);
        }
    });
}

function buyBuilding(index) {
    const building = buildings[index];
    if (cookies >= building.cost) {
        cookies -= building.cost;
        building.amount++;
        building.cost = Math.round(building.cost * 1.15);
        updateDisplay();
    }
}

function renderBuildings() {
    buildingsElem.innerHTML = '';
    buildings.forEach((building, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
          <p>${building.name} (Cost: ${building.cost} cookies, Owned: ${building.amount})</p>
          <button onclick="buyBuilding(${index})" ${cookies < building.cost ? 'disabled' : ''}>
            Buy ${building.name}
          </button>
        `;
        buildingsElem.appendChild(div);
    });
}

function buyUpgrade(index) {
    const upgrade = upgrades[index];
    if (cookies >= upgrade.cost && !upgrade.purchased) {
        cookies -= upgrade.cost;
        clickMultiplier *= upgrade.multiplier;
        upgrade.purchased = true;
        showNotification(`🛠️ Upgrade Purchased: ${upgrade.name}`);
        updateDisplay();
    }
}

function renderUpgrades() {
    upgradesElem.innerHTML = '';
    upgrades.forEach((upgrade, index) => {
        if (!upgrade.purchased) {
            const div = document.createElement('div');
            div.innerHTML = `
            <p>${upgrade.name} (Cost: ${upgrade.cost} cookies)</p>
            <button onclick="buyUpgrade(${index})" ${cookies < upgrade.cost ? 'disabled' : ''}>
              Buy ${upgrade.name}
            </button>
          `;
            upgradesElem.appendChild(div);
        }
    });
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

//test ceci est une modification

document.getElementById('clickButton').addEventListener('click', incrementCookie);
setInterval(generateCookies, 1000);
updateDisplay();
renderAchievements();