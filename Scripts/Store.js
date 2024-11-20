
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

// handle selling buildings
function sellBuilding(index) {
    const building = buildings[index];
    if (building.amount > 0) {
        // Calculate the amount of cookies the player will get back (e.g., 50% of the building's cost)
        const sellPrice = Math.round(building.cost / 1.15);

        // Update the player's cookies
        cookies += sellPrice;

        // Decrease the amount of the building owned
        building.amount--;
        totalBuildingConstructed--;

        // Update building cost (optional, if you want to decrease price on selling as well)
        building.cost = Math.round(sellPrice); // This could be adjusted based on your design

        updateDisplay();
    }
}

// handle buying upgrades TODO create more upgrade type
function buyUpgrade(index) {
    const upgrade = upgrades[index];
    if (cookies >= upgrade.cost && !upgrade.purchased) {
        cookies -= upgrade.cost;
        clickMultiplier *= upgrade.multiplier;
        upgrade.purchased = true;

        UpgradeSound.play();

        showNotification(`🛠️ Upgrade Purchased: ${upgrade.name}`);
        updateDisplay();
    }
}