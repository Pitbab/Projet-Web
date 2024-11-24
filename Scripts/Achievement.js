class Achievement {
    constructor(name, requirement, triggerType, description, imagePath, target = null, unlocked = false) {

        // Verify that the trigger type is valid
        if (!Object.values(TriggerType).includes(triggerType)) {
            throw new Error(`Invalid triggerType: ${triggerType}`);
        }

        this.name = name;
        this.requirement = requirement; // The required number
        this.triggerType = triggerType;
        this.description = description; // Description of the achievement
        this.imagePath = imagePath; // Path to the achievement image
        this.target = target; // Specific target within a trigger type
        this.unlocked = unlocked;
    }
}

// type of triggers
const TriggerType = Object.freeze({
    BUILDING: 'Building',
    TIME: 'Time',
    BUILDINGTYPE: 'BuildingType',
    COOKIE: 'Cookie',
    CLICK: 'Click',

})

// liste de tous les succès
const achievements = [
    new Achievement('First Doggo!', 1, TriggerType.COOKIE, 'Make your first Doggo.', "Img/Achievements/Doggo.png"),
    new Achievement('Builder Beginner', 5, TriggerType.BUILDING, 'Construct 5 buildings.', 'Img/Achievements/Hammer.png'),
    new Achievement('Dedicated Player', 120, TriggerType.TIME, 'Play for 2 minutes straight.', 'Img/Achievements/Time.png'), // 120 seconds of gameplay
    new Achievement('Master Clicker', 100, TriggerType.CLICK, 'Click 100 times.', 'Img/Achievements/Cursor.png'),
    new Achievement('Bone Lover', 5, TriggerType.BUILDINGTYPE, 'Buy 5 Bones.', 'Img/Achievements/Bone.png', 'Bone'),
    new Achievement('Factory Tycoon', 50, TriggerType.BUILDINGTYPE, 'Build 50 Factories.', 'Factory'),
];

class AchievementManager {
    constructor() {
        this.achievements = achievements;
    }


    // regarde pour les succès lié au nombre de cookie "thème à changer"
    checkCookieAchievements(cookies) {
        this.achievements.forEach((achievement) => {
            if (achievement.triggerType === TriggerType.COOKIE &&
                !achievement.unlocked &&
                cookies >= achievement.requirement) {
                this.unlockAchievement(achievement);
            }
        });
    }

    // regarde pour les succès lié au type batiments "thème à changer"
    checkBuildingTypeAchievements(buildingName, totalBuilt) {
        this.achievements.forEach((achievement) => {
            if (
                achievement.triggerType === TriggerType.BUILDINGTYPE && // Only check buildingType achievements
                achievement.target === buildingName && // Matches the target building
                !achievement.unlocked &&
                totalBuilt >= achievement.requirement // Meets the requirement
            ) {
                this.unlockAchievement(achievement);
            }
        });
    }

    // regarde pour les succès lié au batiments en général "thème à changer"
    checkTotalBuildingAchievements(totalBuildings) {
        this.achievements.forEach((achievement) => {
            if (
                achievement.triggerType === TriggerType.BUILDING && // Total buildings trigger
                !achievement.unlocked &&
                totalBuildings >= achievement.requirement
            ) {
                this.unlockAchievement(achievement);
            }
        });
    }

    // regarde pour les succès lié au temps de jeux
    checkTimeAchievements(timePlayed) {
        this.achievements.forEach((achievement) => {
            if (achievement.triggerType === TriggerType.TIME &&
                !achievement.unlocked &&
                timePlayed >= achievement.requirement) {
                this.unlockAchievement(achievement);
            }
        });
    }

    // regarde pour les succès lié au cliques tu joueurs
    checkClickAchievements(clicks) {
        this.achievements.forEach((achievement) => {
            if (achievement.triggerType === TriggerType.CLICK &&
                !achievement.unlocked &&
                clicks >= achievement.requirement) {
                this.unlockAchievement(achievement);
            }
        });
    }

    // envoie un notification
    unlockAchievement(achievement) {
        achievement.unlocked = true;
        showNotification(`🎉 Achievement Unlocked: ${achievement.name}`);
        AchievementSound.play();
        renderAchievements();
    }
}

// fait appraitre les succès dans le section "achievements" dans le html
function renderAchievements() {
    achievementsListElem.innerHTML = ''; // Clear the existing achievements

    achievementManager.achievements.forEach((achievement) => {
        // Create the outer container for the achievement (Title, Image, Description)
        const container = document.createElement('div');
        container.className = 'achievement-container';

        // Create the square div for the image
        const square = document.createElement('div');
        square.className = 'achievement-square';

        // If the achievement is unlocked, show the image and add description later
        if (achievement.unlocked) {
            square.classList.add('unlocked'); // Add "unlocked" class if the achievement is unlocked

            // Add image
            const img = document.createElement('img');
            img.src = achievement.imagePath;
            img.alt = achievement.name;
            square.appendChild(img);
        } else {
            // Locked achievements show a placeholder
            const placeholderImg = document.createElement('div');
            placeholderImg.className = 'placeholder';
            placeholderImg.textContent = '?';
            square.appendChild(placeholderImg);
        }

        // Add title above the square
        const name = document.createElement('div');
        name.className = 'achievement-name';
        name.textContent = achievement.name;
        container.appendChild(name);

        // Add the square to the container
        container.appendChild(square);

        // Add description below the square (initially hidden)
        const description = document.createElement('div');
        description.className = 'achievement-description';
        description.textContent = achievement.description;
        container.appendChild(description);

        // Add the container to the achievements list
        achievementsListElem.appendChild(container);
    });
}

const achievementManager = new AchievementManager();
