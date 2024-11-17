const upgrades = [
    { name: 'Double Clicks', cost: 50, multiplier: 2, purchased: false },
    { name: 'Triple Clicks', cost: 200, multiplier: 3, purchased: false },
];

// handle html upgrades related numbers
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