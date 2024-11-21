
//liste des batiments
const buildings = [
    { name: 'Cursor', cost: 10, cps: 0.1, amount: 0, totalBuilt: 0 },
    { name: 'Grandma', cost: 100, cps: 1, amount: 0, totalBuilt: 0 },
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
