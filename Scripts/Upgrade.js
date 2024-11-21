
//listes des upgrades
const upgrades = [
    { name: 'Double Clicks', cost: 50, multiplier: 2, purchased: false },
    { name: 'Triple Clicks', cost: 200, multiplier: 3, purchased: false },
];

//affichage des upgrades
function renderUpgrades() {
    upgrades.forEach((upgrade, index) => {
        const upgradeDiv = document.getElementById(`upgrade-${index}`);

        if (upgradeDiv) {
            // si l'upgrade existe il faut juste mettre son contenu à jour
            const upgradeInfo = upgradeDiv.querySelector('.upgrade-info');
            const buyButton = upgradeDiv.querySelector('.buy-button');

            // mettre à jour les infos (nom et coût)
            if (!upgrade.purchased) {
                upgradeInfo.innerHTML = `${upgrade.name} (Cost: ${upgrade.cost} cookies)`;
                buyButton.disabled = cookies < upgrade.cost; // Enable or disable based on cookie count
            }
        } else {
            // si l'upgrade n'existe pas il faut ajouter une nouvelle div dans le parent
            const div = document.createElement('div');
            div.id = `upgrade-${index}`;  // Crée un identifiant pour chaque upgrades

            div.innerHTML = `
                <p class="upgrade-info">${upgrade.name} (Cost: ${upgrade.cost} cookies)</p>
                <button class="buy-button" onclick="buyUpgrade(${index})" ${cookies < upgrade.cost ? 'disabled' : ''}>
                    Buy ${upgrade.name}
                </button>
            `;
            upgradesElem.appendChild(div);
        }

        // si l'upgrade est déjà acheté alors on la cache
        if (upgrade.purchased) {
            const upgradeDiv = document.getElementById(`upgrade-${index}`);

            upgradeDiv.style.display = 'none';
        }
    });
}
