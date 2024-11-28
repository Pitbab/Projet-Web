
//liste des batiments
const buildings = [
    { name: 'Paw', cost: 10, cps: 0.1, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/paw.png' },
    { name: 'Bone', cost: 100, cps: 1, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/bone.jpg' },
    { name: 'Steak', cost: 1000, cps: 10, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/Steak.png' },
    { name: 'Doggo Park', cost: 5000, cps: 50, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/park.jpg' },
    { name: 'Kennel', cost: 20000, cps: 200, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/kennel.jpg' },
    { name: 'Doggo farm', cost: 50000, cps: 500, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/farm.png' },
    { name: 'Doggo factory', cost: 100000, cps: 700, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/factory.png' },
    { name: 'Laboratory', cost: 170000, cps: 1000, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/Labo.png' },
    { name: 'Spaceship', cost: 300000, cps: 3000, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/spaceship.png' },
    { name: 'Time machine', cost: 400000, cps: 5000, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/time_machine.png' },
    { name: 'Black hole', cost: 600000, cps: 8000, amount: 0, totalBuilt: 0, Multipliers: 1, image: '../Img/Black_hole.jpg' },
];


// affichage des batiments
function renderBuildings() {
    const buildingsElem = document.getElementById('buildings');

    // Parcourt tous les bâtiments
    buildings.forEach((building, index) => {
        let buildingDiv = document.getElementById(`building-${index}`);

        // Si l'élément n'existe pas encore, crée un nouvel élément
        if (!buildingDiv) {
            buildingDiv = document.createElement('div');
            buildingDiv.id = `building-${index}`;
            buildingDiv.classList.add('building-row');

            // Crée le contenu HTML initial
            buildingDiv.innerHTML = `
            <img src="${building.image}" alt="${building.name}" class="building-icon">
            <div class="building-info">
                <p class="building-name">${building.name}</p>
                <p class="building-cost">Cost: ${building.cost} Doggos</p>
                <p class="building-amount">Owned: ${building.amount}</p>
                <p class="building-dps">DPS : ${(building.cps * building.Multipliers).toLocaleString()}</p>
            </div>

            <div class="button-container">
                <button class="buy-button" onclick="buyBuilding(${index})">Buy</button>
                <button class="sell-button" onclick="sellBuilding(${index})">Sell</button>
            </div>
            `;

            buildingsElem.appendChild(buildingDiv);
        }

        // Met à jour dynamiquement les informations et l'état des boutons
        const buildCost = buildingDiv.querySelector('.building-cost');
        const buildAmount = buildingDiv.querySelector('.building-amount')
        const buildDPS = buildingDiv.querySelector('.building-dps');

        const buyButton = buildingDiv.querySelector('.buy-button');
        const sellButton = buildingDiv.querySelector('.sell-button');

        // Met à jour les informations du bâtiment
        buildCost.textContent = `Cost : ${building.cost.toLocaleString()} Doggos`;
        buildAmount.textContent = ` Owned : ${building.amount}`;
        buildDPS.textContent = ` DPS : ${(building.cps * building.Multipliers).toLocaleString()}`;

        // Active/désactive les boutons en fonction des conditions
        buyButton.disabled = cookies < building.cost;
        sellButton.disabled = building.amount <= 0;
    });
}




/*mise a jour des emojis*/
const buildingEmojis = ['🐾', '🦴', '🥩', '🌳', '🏠', '🚜', '🏭', '🧪', '🚀', '⌛', '🕳️']; // Emojis for each building type

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