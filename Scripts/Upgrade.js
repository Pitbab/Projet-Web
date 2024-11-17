const upgrades = [
    { name: 'Double Clicks', cost: 50, multiplier: 2, purchased: false },
    { name: 'Triple Clicks', cost: 200, multiplier: 3, purchased: false },
];

function renderUpgrades() {
    upgrades.forEach((upgrade, index) => {
        const upgradeDiv = document.getElementById(`upgrade-${index}`);

        if (upgradeDiv) {
            // If the upgrade already exists, just update its content
            const upgradeInfo = upgradeDiv.querySelector('.upgrade-info');
            const buyButton = upgradeDiv.querySelector('.buy-button');

            // Update the upgrade info (name and cost)
            if (!upgrade.purchased) {
                upgradeInfo.innerHTML = `${upgrade.name} (Cost: ${upgrade.cost} cookies)`;
                buyButton.disabled = cookies < upgrade.cost; // Enable or disable based on cookie count
            } else {
                // Remove the upgrade info (name and cost) when purchased
                upgradeInfo.style.display = 'none';  // Hide the info when purchased
                buyButton.style.display = 'none';    // Hide the buy button when purchased
            }
        } else {
            // If the upgrade doesn't exist, create a new div and append it
            const div = document.createElement('div');
            div.id = `upgrade-${index}`;  // Set an ID to uniquely identify each upgrade

            div.innerHTML = `
                <p class="upgrade-info">${upgrade.name} (Cost: ${upgrade.cost} cookies)</p>
                <button class="buy-button" onclick="buyUpgrade(${index})" ${cookies < upgrade.cost ? 'disabled' : ''}>
                    Buy ${upgrade.name}
                </button>
            `;
            upgradesElem.appendChild(div);
        }

        // If the upgrade is already purchased, hide its display
        if (upgrade.purchased) {
            const upgradeDiv = document.getElementById(`upgrade-${index}`);
            const upgradeInfo = upgradeDiv.querySelector('.upgrade-info');
            const buyButton = upgradeDiv.querySelector('.buy-button');

            upgradeInfo.style.display = 'none';  // Hide the upgrade name and cost
            buyButton.style.display = 'none';    // Hide the buy button
        }
    });
}
