const buildings = [
    { name: 'Cursor', cost: 10, cps: 0.1, amount: 0, totalBuilt: 0 },
    { name: 'Grandma', cost: 100, cps: 1, amount: 0, totalBuilt: 0 },
    { name: 'Factory', cost: 1000, cps: 10, amount: 0, totalBuilt: 0 },
];

function renderBuildings() {
    buildings.forEach((building, index) => {
        const buildingDiv = document.getElementById(`building-${index}`);

        if (buildingDiv) {
            // Update the inner content of the existing building div
            buildingDiv.querySelector('.building-info').innerHTML = `
                ${building.name} (Cost: ${building.cost} cookies, Owned: ${building.amount})
            `;
            const buyButton = buildingDiv.querySelector('.buy-button');
            const sellButton = buildingDiv.querySelector('.sell-button');

            // Enable or disable the buttons based on the current cookies
            buyButton.disabled = cookies < building.cost;
            sellButton.disabled = building.amount <= 0;
        } else {
            // Create a new building div if it doesn't exist yet
            const div = document.createElement('div');
            div.id = `building-${index}`;  // Set an ID to target the building

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
