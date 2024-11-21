class Achievement {
    constructor(name, requirement, triggerType, target = null, unlocked = false) {

        // effectue une vérification le type de trigger existe dans les données
        if (!Object.values(TriggerType).includes(triggerType)) {
            throw new Error(`Invalid triggerType: ${triggerType}`);
        }

        this.name = name;
        this.requirement = requirement; // le chiffre voulu
        this.triggerType = triggerType;
        this.target = target; // cible spécifique au sein d'un type de trigger
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
    new Achievement('First Cookie!', 1, TriggerType.COOKIE),
    new Achievement('Builder Beginner', 5, TriggerType.BUILDING),
    new Achievement('Dedicated Player', 120, TriggerType.TIME), // 120 secondes de jeu
    new Achievement('Master Clicker', 100, TriggerType.CLICK),
    new Achievement('Grandma Lover', 5, TriggerType.BUILDINGTYPE, 'Grandma'),
    new Achievement('Factory Tycoon', 50, TriggerType.BUILDINGTYPE, 'Factory'),
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
    achievementsListElem.innerHTML = '';
    achievementManager.achievements.forEach((achievement) => {
        if (achievement.unlocked) {
            const p = document.createElement('p');
            p.textContent = `🎉 ${achievement.name}`;
            achievementsListElem.appendChild(p);
        }
    });
}

const achievementManager = new AchievementManager();
