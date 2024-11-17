

// list of all achievements
const achievements = [
    new Achievement('First Cookie!', 1, TriggerType.COOKIE),
    new Achievement('Builder Beginner', 5, TriggerType.BUILDING),
    new Achievement('Dedicated Player', 120, TriggerType.TIME), // 120 secondes de jeu
    new Achievement('Master Clicker', 100, TriggerType.CLICK),
    new Achievement('Grandma Lover', 5, TriggerType.BUILDINGTYPE, 'Grandma'),
    new Achievement('Factory Tycoon', 50, TriggerType.BUILDINGTYPE, 'Factory'),
];

// type of triggers
const TriggerType = Object.freeze({
    BUILDING: 'Building',
    TIME: 'Time',
    BUILDINGTYPE: 'BuildingType',
    COOKIE: 'Cookie',
    CLICK: 'Click',

})


class Achievement {
    constructor(name, requirement, triggerType, target = null, unlocked = false) {

        // small check if the trigger type does exist
        if (!Object.values(TriggerType).includes(triggerType)) {
            throw new Error(`Invalid triggerType: ${triggerType}`);
        }

        this.name = name;
        this.requirement = requirement; // The target number
        this.triggerType = triggerType;
        this.target = target; // Specific target for buildingType
        this.unlocked = unlocked;
    }
}

class AchievementManager {
    constructor() {
        this.achievements = achievements;
    }


    // check for cookie related achievements
    checkCookieAchievements(cookies) {
        this.achievements.forEach((achievement) => {
            if (achievement.triggerType === TriggerType.COOKIE &&
                !achievement.unlocked &&
                cookies >= achievement.requirement) {
                this.unlockAchievement(achievement);
            }
        });
    }

    // check for building type related achievements
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

    // check for building related achievements
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

    // check for time related achievements
    checkTimeAchievements(timePlayed) {
        this.achievements.forEach((achievement) => {
            if (achievement.triggerType === TriggerType.TIME &&
                !achievement.unlocked &&
                timePlayed >= achievement.requirement) {
                this.unlockAchievement(achievement);
            }
        });
    }

    // check for click related achievements
    checkClickAchievements(clicks) {
        this.achievements.forEach((achievement) => {
            if (achievement.triggerType === TriggerType.CLICK &&
                !achievement.unlocked &&
                clicks >= achievement.requirement) {
                this.unlockAchievement(achievement);
            }
        });
    }

    // trigger notifications
    unlockAchievement(achievement) {
        achievement.unlocked = true;
        showNotification(`🎉 Achievement Unlocked: ${achievement.name}`);
        renderAchievements();
    }
}

// set achievements in the achievements tab
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
