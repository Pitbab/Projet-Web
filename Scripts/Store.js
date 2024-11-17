
//handle buying buildings
function buyBuilding(index) {
    const building = buildings[index];
    if (cookies >= building.cost) {
        cookies -= building.cost;

        // update counters
        building.amount++;
        building.totalBuilt++;
        totalBuildingConstructed++;

        // increase cost each time
        building.cost = Math.round(building.cost * 1.15);

        updateDisplay();
        achievementManager.checkBuildingTypeAchievements(building.name, building.totalBuilt)
        achievementManager.checkTotalBuildingAchievements(totalBuildingConstructed);
    }
}

// handle buying upgrades TODO create more upgrade type
function buyUpgrade(index) {
    const upgrade = upgrades[index];
    if (cookies >= upgrade.cost && !upgrade.purchased) {
        cookies -= upgrade.cost;
        clickMultiplier *= upgrade.multiplier;
        upgrade.purchased = true;
        showNotification(`🛠️ Upgrade Purchased: ${upgrade.name}`);
        updateDisplay();
    }
}