
//listes des upgrades
const upgrades = [
    // Click upgrades
    { name: 'Double Clicks', cost: 50, multiplier: 2, description: 'Doubles clicks.', target: 'Click', subTarget: '', purchased: false },
    { name: 'Triple Clicks', cost: 200, multiplier: 3, description: 'Triples clicks.', target: 'Click', subTarget: '', purchased: false },
    { name: 'Quadruple Clicks', cost: 1000, multiplier: 4, description: 'Quadruples clicks.', target: 'Click', subTarget: '', purchased: false },
    { name: 'Quintuple Clicks', cost: 5000, multiplier: 5, description: 'Quintuples clicks.', target: 'Click', subTarget: '', purchased: false },
    { name: 'Hexa Clicks', cost: 20000, multiplier: 6, description: 'Increases clicks by 6x.', target: 'Click', subTarget: '', purchased: false },
    { name: 'Lucky Paw Clicks', cost: 50000, multiplier: 7, description: 'Increases clicks by 7x.', target: 'Click', subTarget: '', purchased: false },
    { name: 'Mega Clicks', cost: 100000, multiplier: 10, description: 'Clicks are 10x stronger.', target: 'Click', subTarget: '', purchased: false },
    { name: 'Cosmic Clicks', cost: 500000, multiplier: 15, description: '15x click power.', target: 'Click', subTarget: '', purchased: false },
    { name: 'Galactic Clicks', cost: 1000000, multiplier: 20, description: 'Clicks are 20x stronger.', target: 'Click', subTarget: '', purchased: false },

    // Paw upgrades
    { name: 'Double Paw Production', cost: 500, multiplier: 2, description: 'Doubles Paw production.', target: 'Building', subTarget: 'Paw', purchased: false },
    { name: 'Triple Paw Production', cost: 1500, multiplier: 3, description: 'Triples Paw production.', target: 'Building', subTarget: 'Paw', purchased: false },
    { name: 'Enhanced Paws', cost: 5000, multiplier: 4, description: 'Quadruples Paw production.', target: 'Building', subTarget: 'Paw', purchased: false },

    // Bone upgrades
    { name: 'Bone Efficiency', cost: 2000, multiplier: 1.5, description: 'Increases Bone production by 50%.', target: 'Building', subTarget: 'Bone', purchased: false },
    { name: 'Double Bone Production', cost: 5000, multiplier: 2, description: 'Doubles Bone production.', target: 'Building', subTarget: 'Bone', purchased: false },
    { name: 'Enhanced Bones', cost: 10000, multiplier: 3, description: 'Triples Bone production.', target: 'Building', subTarget: 'Bone', purchased: false },

    // Steak upgrades
    { name: 'Juicy Steak Boost', cost: 20000, multiplier: 1.5, description: 'Increases Steak production by 50%.', target: 'Building', subTarget: 'Steak', purchased: false },
    { name: 'Double Steak Production', cost: 50000, multiplier: 2, description: 'Doubles Steak production.', target: 'Building', subTarget: 'Steak', purchased: false },
    { name: 'Gourmet Steaks', cost: 100000, multiplier: 3, description: 'Triples Steak production.', target: 'Building', subTarget: 'Steak', purchased: false },

    // Doggo Park upgrades
    { name: 'Park Expansion', cost: 50000, multiplier: 1.5, description: 'Increases Doggo Park production by 50%.', target: 'Building', subTarget: 'Doggo Park', purchased: false },
    { name: 'Double Park Output', cost: 100000, multiplier: 2, description: 'Doubles Doggo Park output.', target: 'Building', subTarget: 'Doggo Park', purchased: false },
    { name: 'Doggo Paradise', cost: 500000, multiplier: 3, description: 'Triples Doggo Park output.', target: 'Building', subTarget: 'Doggo Park', purchased: false },

    // Kennel upgrades
    { name: 'Efficient Kennels', cost: 200000, multiplier: 1.5, description: 'Increases Kennel production by 50%.', target: 'Building', subTarget: 'Kennel', purchased: false },
    { name: 'Kennel Expansion', cost: 500000, multiplier: 2, description: 'Doubles Kennel production.', target: 'Building', subTarget: 'Kennel', purchased: false },
    { name: 'Luxury Kennels', cost: 1000000, multiplier: 3, description: 'Triples Kennel production.', target: 'Building', subTarget: 'Kennel', purchased: false },

    // Doggo Farm upgrades
    { name: 'Farm Boost', cost: 1000000, multiplier: 1.5, description: 'Increases Farm production by 50%.', target: 'Building', subTarget: 'Doggo farm', purchased: false },
    { name: 'Advanced Farming', cost: 2000000, multiplier: 2, description: 'Doubles Farm production.', target: 'Building', subTarget: 'Doggo farm', purchased: false },
    { name: 'Hyper Farms', cost: 5000000, multiplier: 3, description: 'Triples Farm production.', target: 'Building', subTarget: 'Doggo farm', purchased: false },

    // Doggo Factory upgrades
    { name: 'Factory Optimization', cost: 10000000, multiplier: 1.5, description: 'Increases Factory production by 50%.', target: 'Building', subTarget: 'Doggo factory', purchased: false },
    { name: 'Automated Factory', cost: 20000000, multiplier: 2, description: 'Doubles Factory production.', target: 'Building', subTarget: 'Doggo factory', purchased: false },
    { name: 'Ultra Factories', cost: 50000000, multiplier: 3, description: 'Triples Factory production.', target: 'Building', subTarget: 'Doggo factory', purchased: false },

    // Laboratory upgrades
    { name: 'Research Boost', cost: 100000000, multiplier: 1.5, description: 'Increases Laboratory production by 50%.', target: 'Building', subTarget: 'laboratory', purchased: false },
    { name: 'Advanced Research', cost: 200000000, multiplier: 2, description: 'Doubles Laboratory output.', target: 'Building', subTarget: 'laboratory', purchased: false },
    { name: 'Quantum Research', cost: 500000000, multiplier: 3, description: 'Triples Laboratory output.', target: 'Building', subTarget: 'laboratory', purchased: false },

    // Spaceship upgrades
    { name: 'Space Boost', cost: 1000000000, multiplier: 1.5, description: 'Increases Spaceship production by 50%.', target: 'Building', subTarget: 'Spaceship', purchased: false },
    { name: 'Orbital Upgrade', cost: 2000000000, multiplier: 2, description: 'Doubles Spaceship output.', target: 'Building', subTarget: 'Spaceship', purchased: false },
    { name: 'Intergalactic Power', cost: 5000000000, multiplier: 3, description: 'Triples Spaceship output.', target: 'Building', subTarget: 'Spaceship', purchased: false },

    // Time Machine upgrades
    { name: 'Temporal Boost', cost: 2000000000, multiplier: 1.5, description: 'Increases Time Machine production by 50%.', target: 'Building', subTarget: 'Time machine', purchased: false },
    { name: 'Chrono Efficiency', cost: 5000000000, multiplier: 2, description: 'Doubles Time Machine production.', target: 'Building', subTarget: 'Time machine', purchased: false },
    { name: 'Time Lords', cost: 10000000000, multiplier: 3, description: 'Triples Time Machine production.', target: 'Building', subTarget: 'Time machine', purchased: false },

    // Black Hole upgrades
    { name: 'Gravity Efficiency', cost: 20000000000, multiplier: 1.5, description: 'Increases Black Hole production by 50%.', target: 'Building', subTarget: 'Black hole', purchased: false },
    { name: 'Event Horizon', cost: 50000000000, multiplier: 2, description: 'Doubles Black Hole output.', target: 'Building', subTarget: 'Black hole', purchased: false },
    { name: 'Singularity Power', cost: 100000000000, multiplier: 3, description: 'Triples Black Hole output.', target: 'Building', subTarget: 'Black hole', purchased: false }
];

//affichage des upgrades
function renderUpgrades() {
    let upgradesAvailable = false; // Track if there are any upgrades left to show

    upgrades.sort((a, b) => a.cost - b.cost);

    upgrades.forEach((upgrade, index) => {
        const upgradeDiv = document.getElementById(`upgrade-${index}`);

        if (upgradeDiv) {
            // If the upgrade already exists, update its content
            const buyButton = upgradeDiv.querySelector('.buy-button');

            // Update the upgrade info (name and cost)
            if (!upgrade.purchased) {
                buyButton.disabled = cookies < upgrade.cost; // Enable/disable based on cookie count
                upgradesAvailable = true; // An upgrade is still available
            }
        } else {
            // If the upgrade doesn't exist, create a new div container for the upgrade
            const div = document.createElement('div');
            div.id = `upgrade-${index}`; // Create an ID for each upgrade

            // Build the new upgrade container with name, cost, and buy button
            div.innerHTML = `
                <div class="upgrade-container">
                    <div class="upgrade-info-container">
                        <p class="upgrade-info">${upgrade.name}</p>
                        <p class="upgrade-info">Cost: ${upgrade.cost} doggos</p>
                        <p class="upgrade-info">${upgrade.description}</p>
                    </div>
                    <div class="buy-container">
                        <button class="buy-button" onclick="buyUpgrade(${index})" ${cookies < upgrade.cost ? 'disabled' : ''}>
                            Buy ${upgrade.name}
                        </button>
                    </div>
                </div>
            `;
            upgradesElem.appendChild(div);
            upgradesAvailable = true; // An upgrade is still available
        }

        // If the upgrade is already purchased, hide it
        if (upgrade.purchased) {
            const upgradeDiv = document.getElementById(`upgrade-${index}`);
            if (upgradeDiv) upgradeDiv.style.display = 'none';
        }
    });

    // Check if no upgrades are available
    const noUpgradesMessage = document.getElementById('no-upgrades-message');
    if (!upgradesAvailable) {
        if (!noUpgradesMessage) {
            // If the message doesn't exist, create it
            const message = document.createElement('p');
            message.id = 'no-upgrades-message';
            message.innerText = "No upgrades available! Come back later.";
            message.classList.add('no-upgrades-message'); // Optional CSS class for styling
            upgradesElem.appendChild(message);
        }
    } else {
        // If upgrades are available, remove the message if it exists
        if (noUpgradesMessage) noUpgradesMessage.remove();
    }
}


