
//gère l'achat des batiments TODO create more building type
function buyBuilding(index) {
    const building = buildings[index];
    if (cookies >= building.cost) {
        cookies -= building.cost;

        // met à jour les compteurs
        building.amount++;
        building.totalBuilt++;
        totalBuildingConstructed++;

        // incrémente le prix du batiment à chaque fois qu'on l'achète
        building.cost = Math.round(building.cost * 1.15);

        updateDisplay();
        renderEmojis();

        achievementManager.checkBuildingTypeAchievements(building.name, building.totalBuilt)
        achievementManager.checkTotalBuildingAchievements(totalBuildingConstructed);
    }
}

//gère la vente des batiments
function sellBuilding(index) {
    const building = buildings[index];
    if (building.amount > 0) {
        //calcul combien de monnaie le joueur aura en retour
        const sellPrice = Math.round(building.cost / 1.15);

        // met à jour la monnaie du joueur
        cookies += sellPrice;

        // met à jour le compteur de batiments
        building.amount--;
        totalBuildingConstructed--;

        // met à jour le prix du batiment
        building.cost = Math.round(sellPrice);

        updateDisplay();
        renderEmojis();
    }
}

//gère l'achat des upgrades TODO create more upgrade type
function buyUpgrade(index) {
    const upgrade = upgrades[index];
    if (cookies >= upgrade.cost && !upgrade.purchased) {
        cookies -= upgrade.cost;

        if (upgrade.target === "Click") {
            // For click upgrades
            clickMultiplier *= upgrade.multiplier;
        } else if (upgrade.target === "Building" && upgrade.subTarget) {
            // For building upgrades
            const building = buildings.find(b => b.name === upgrade.subTarget);
            if (building) {
                building.Multipliers *= upgrade.multiplier;
            }
        }

        upgrade.purchased = true;

        UpgradeSound.play();

        //showNotification(`🛠️ Upgrade Purchased: ${upgrade.name}`);
        updateDisplay();
    }
}