const buildings = [
    { name: 'Cursor', cost: 10, cps: 0.1, amount: 0, totalBuilt: 0 },
    { name: 'Grandma', cost: 100, cps: 1, amount: 0, totalBuilt: 0 },
    { name: 'Factory', cost: 1000, cps: 10, amount: 0, totalBuilt: 0 },
];

// handle html building related numbers
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