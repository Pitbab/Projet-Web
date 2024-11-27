
//listes des upgrades
const upgrades = [
    { name: 'Double Clicks', cost: 50, multiplier: 2, description: '', target: 'Click', subTarget: '', purchased: false },
    { name: 'Triple Clicks', cost: 200, multiplier: 3, description: '', target: 'Click', subTarget: '',purchased: false },
    { name: 'Quadruple Clicks', cost: 200, multiplier: 4, description: '', target: 'Click', subTarget: '',purchased: false },
    { name: 'Quintuple Clicks', cost: 200, multiplier: 5, description: '', target: 'Click', subTarget: '',purchased: false },
    { name: 'Double Paw Production', cost: 500, multiplier: 2, description: 'Doubles Paw production.', target: 'Building', subTarget: 'Paw', purchased: false },
    { name: 'Bone Efficiency', cost: 2000, multiplier: 1.5, description: 'Increases Bone production by 50%.', target: 'Building', subTarget: 'Bone', purchased: false },
    { name: 'Factory Upgrade', cost: 10000, multiplier: 2, description: 'Doubles Factory production.', target: 'Building', subTarget: 'Factory', purchased: false },

];

//affichage des upgrades
function renderUpgrades() {
    upgrades.forEach((upgrade, index) => {
        const upgradeDiv = document.getElementById(`upgrade-${index}`);

        if (upgradeDiv) {
            // If the upgrade already exists, update its content
            const upgradeInfo = upgradeDiv.querySelector('.upgrade-info');
            const buyButton = upgradeDiv.querySelector('.buy-button');

            // Update the upgrade info (name and cost)
            if (!upgrade.purchased) {
                upgradeInfo.innerHTML = `${upgrade.name} (Cost: ${upgrade.cost} doggos)`;
                buyButton.disabled = cookies < upgrade.cost; // Enable/disable based on cookie count
            }
        } else {
            // If the upgrade doesn't exist, create a new div container for the upgrade
            const div = document.createElement('div');
            div.id = `upgrade-${index}`; // Create an ID for each upgrade

            // Build the new upgrade container with name, cost, and buy button
            div.innerHTML = `
                <div class="upgrade-container">
                    <div class="upgrade-info-container">
                        <p class="upgrade-info">${upgrade.name} (Cost: <span class="cost">${upgrade.cost} cookies</span>)</p>
                        <p class="upgrade-info">${upgrade.description}</p>
                    </div>
                    <div class="buy-container">
                        <button class="buy-button" onclick="buyUpgrade(${index})" ${cookies < upgrade.cost ? 'disabled' : ''}>
                            Buy ${upgrade.name}
                        </button>
                    </div>
                </div>
            `;
            upgradesElem.appendChild(div);
        }

        // If the upgrade is already purchased, hide it
        if (upgrade.purchased) {
            const upgradeDiv = document.getElementById(`upgrade-${index}`);
            upgradeDiv.style.display = 'none';
        }
    });
}

