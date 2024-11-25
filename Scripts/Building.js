
//liste des batiments
const buildings = [
    { name: 'Paw', cost: 10, cps: 0.1, amount: 0, totalBuilt: 0, image: '../Img/paw.png' },
    { name: 'Bone', cost: 100, cps: 1, amount: 0, totalBuilt: 0, image: '../Img/bone.jpg' },
    { name: 'Factory', cost: 1000, cps: 10, amount: 0, totalBuilt: 0, image: '../Img/factory.png' },
    { name: 'Doggo Park', cost: 5000, cps: 50, amount: 0, totalBuilt: 0, image: '../Img/park.jpg' },
    { name: 'Kennel', cost: 20000, cps: 200, amount: 0, totalBuilt: 0, image: '../Img/kennel.jpg' },
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
                <div class="building-info"></div>
                <button class="buy-button" onclick="buyBuilding(${index})">Buy ${building.name}</button>
                <button class="sell-button" onclick="sellBuilding(${index})">Sell ${building.name}</button>
            `;

            buildingsElem.appendChild(buildingDiv);
        }

        // Met à jour dynamiquement les informations et l'état des boutons
        const buildingInfo = buildingDiv.querySelector('.building-info');
        const buyButton = buildingDiv.querySelector('.buy-button');
        const sellButton = buildingDiv.querySelector('.sell-button');

        // Met à jour les informations du bâtiment
        buildingInfo.textContent = `${building.name} (Cost: ${building.cost} cookies, Owned: ${building.amount})`;

        // Active/désactive les boutons en fonction des conditions
        buyButton.disabled = cookies < building.cost;
        sellButton.disabled = building.amount <= 0;
    });
}




/*mise a jour des emojis*/
const buildingEmojis = ['🐾', '🦴', '🏭', '🌳', '🏠']; // Emojis for each building type

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