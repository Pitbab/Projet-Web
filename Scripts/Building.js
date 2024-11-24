
//liste des batiments
const buildings = [
    { name: 'Paw', cost: 10, cps: 0.1, amount: 0, totalBuilt: 0 },
    { name: 'Bone', cost: 100, cps: 1, amount: 0, totalBuilt: 0 },
    { name: 'Factory', cost: 1000, cps: 10, amount: 0, totalBuilt: 0 },
];

// affichage des batiments
function renderBuildings() {
    buildings.forEach((building, index) => {
        const buildingDiv = document.getElementById(`building-${index}`);

        if (buildingDiv) {
            // met à jour le contenu dans la div du building-info
            buildingDiv.querySelector('.building-info').innerHTML = `
                ${building.name} (Cost: ${building.cost} cookies, Owned: ${building.amount})
            `;
            const buyButton = buildingDiv.querySelector('.buy-button');
            const sellButton = buildingDiv.querySelector('.sell-button');

            // active ou désactive les boutons dépendament de la monnaie du joueur
            buyButton.disabled = cookies < building.cost;
            sellButton.disabled = building.amount <= 0;
        } else {
            // créer un nouvelle div pour le batiment si celle-ci n'existe pas
            const div = document.createElement('div');
            div.id = `building-${index}`;  // Crée un identifiant pour chaque batiments

            div.innerHTML = `
                <p class="building-info">${building.name} (Cost: ${building.cost} cookies, Owned: ${building.amount})</p>
                <button class="buy-button" onclick="buyBuilding(${index})" ${cookies < building.cost ? 'disabled' : ''}>
                    Buy ${building.name}
                </button>
                <button class="sell-button" onclick="sellBuilding(${index})" ${building.amount <= 0 ? 'disabled' : ''}>
                    Sell ${building.name}
                </button>
            `;
            buildingsElem.appendChild(div);
        }
    });
}

const buildingEmojis = ['🐾', '🦴', '🏭']; // Emojis for each building type

function renderEmojis() {
    const emojiContainer = document.getElementById('emoji-container');
    emojiContainer.innerHTML = ''; // Clear existing emojis

    buildings.forEach((building, index) => {
        if(building.amount > 0)
        {
            const row = document.createElement('div');
            row.className = 'building-row';

            // Render building name and its emojis
            row.innerHTML = `
            <span>${building.name}:</span> ${buildingEmojis[index].repeat(building.amount)}
        `;

            emojiContainer.appendChild(row);
        }

    });
}