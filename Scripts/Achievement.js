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
    DPS: 'DPS'

})

// liste de tous les succès
const achievements = [
    // Cookie Milestones
    new Achievement('First Doggo!', 1, TriggerType.COOKIE, 'Make your first Doggo.', "Img/Achievements/Doggo.png"),
    new Achievement('Doggo Novice', 10, TriggerType.COOKIE, 'Collect 10 Doggos.', "Img/Achievements/Doggo.png"),
    new Achievement('Doggo Collector', 100, TriggerType.COOKIE, 'Collect 100 Doggos.', "Img/Achievements/Doggo.png"),
    new Achievement('Doggo Hoarder', 1000, TriggerType.COOKIE, 'Collect 1,000 Doggos.', "Img/Achievements/Doggo.png"),
    new Achievement('Doggo Millionaire', 1000000, TriggerType.COOKIE, 'Collect 1,000,000 Doggos.', "Img/Achievements/Doggo.png"),
    new Achievement('Doggo Billionaire', 1000000000, TriggerType.COOKIE, 'Collect 1,000,000,000 Doggos.', "Img/Achievements/Doggo.png"),
    new Achievement('Manual Maker', 500, TriggerType.CLICK, 'Collect 500 Doggos manually.', "Img/Achievements/Doggo.png"),
    new Achievement('Manual Legend', 10000, TriggerType.CLICK, 'Collect 10,000 Doggos manually.', "Img/Achievements/Doggo.png"),

    // Click Milestones
    new Achievement('Click Starter', 10, TriggerType.CLICK, 'Click 10 times.', "Img/Achievements/Cursor.png"),
    new Achievement('Click Enthusiast', 100, TriggerType.CLICK, 'Click 100 times.', "Img/Achievements/Cursor.png"),
    new Achievement('Master Clicker', 1000, TriggerType.CLICK, 'Click 1,000 times.', "Img/Achievements/Cursor.png"),
    new Achievement('Hyper Clicker', 5000, TriggerType.CLICK, 'Click 5,000 times.', "Img/Achievements/Cursor.png"),
    new Achievement('Click Maniac', 10000, TriggerType.CLICK, 'Click 10,000 times.', "Img/Achievements/Cursor.png"),
    new Achievement('Click God', 50000, TriggerType.CLICK, 'Click 50,000 times.', "Img/Achievements/Cursor.png"),

    // Time Played
    new Achievement('Dedicated Player', 60, TriggerType.TIME, 'Play for 1 minutes straight.', "Img/Achievements/Time.png"),
    new Achievement('Time Keeper', 120, TriggerType.TIME, 'Play for 2 minutes straight.', "Img/Achievements/Time.png"),
    new Achievement('Time Veteran', 86400, TriggerType.TIME, 'Play for 24 hours total.', "Img/Achievements/Time.png"),
    new Achievement('Doggo Devotee', 604800, TriggerType.TIME, 'Play for a week total.', "Img/Achievements/Time.png"),

    // Building Amount
    new Achievement('Builder Beginner', 5, TriggerType.BUILDING, 'Construct 5 buildings.', "Img/Achievements/Hammer.png"),
    new Achievement('Aspiring Architect', 20, TriggerType.BUILDING, 'Construct 20 buildings.', "Img/Achievements/Hammer.png"),
    new Achievement('Building Tycoon', 100, TriggerType.BUILDING, 'Construct 100 buildings.', "Img/Achievements/Hammer.png"),
    new Achievement('Construction King', 500, TriggerType.BUILDING, 'Construct 500 buildings.', "Img/Achievements/Hammer.png"),
    new Achievement('Master Builder', 1000, TriggerType.BUILDING, 'Construct 1,000 buildings.', "Img/Achievements/Hammer.png"),

    // Building Specific
    new Achievement('Paw Enthusiast', 10, TriggerType.BUILDINGTYPE, 'Build 10 Paws.', "../Img/paw.png", 'Paw'),
    new Achievement('Bone Lover', 5, TriggerType.BUILDINGTYPE, 'Buy 5 Bones.', "../Img/bone.jpg", 'Bone'),
    new Achievement('Bone Tycoon', 50, TriggerType.BUILDINGTYPE, 'Buy 50 Bones.', "../Img/bone.jpg", 'Bone'),
    new Achievement('Steak Collector', 10, TriggerType.BUILDINGTYPE, 'Buy 10 Steaks.', "../Img/Steak.png", 'Steak'),
    new Achievement('Park Designer', 25, TriggerType.BUILDINGTYPE, 'Build 25 Doggo Parks.', "../Img/park.jpg", 'Doggo Park'),
    new Achievement('Kennel Keeper', 10, TriggerType.BUILDINGTYPE, 'Build 10 Kennels.', "../Img/kennel.jpg", 'Kennel'),
    new Achievement('Factory Tycoon', 50, TriggerType.BUILDINGTYPE, 'Build 50 Factories.', "../Img/factory.png", 'Factory'),
    new Achievement('Scientific Doggo', 15, TriggerType.BUILDINGTYPE, 'Build 15 Laboratories.', "../Img/Labo.png", 'laboratory'),
    new Achievement('Space Explorer', 5, TriggerType.BUILDINGTYPE, 'Build 5 Spaceships.', "../Img/spaceship.png", 'Spaceship'),
    new Achievement('Time Traveler', 10, TriggerType.BUILDINGTYPE, 'Build 10 Time Machines.', "../Img/time_machine.png", 'Time machine'),
    new Achievement('Black Hole Enthusiast', 5, TriggerType.BUILDINGTYPE, 'Build 5 Black Holes.', "../Img/Black_hole.jpg", 'Black hole'),

    // Cookies Per Second (CPS)
    new Achievement('DPS Beginner', 10, TriggerType.DPS, 'Reach 10 Doggos per second.', "Img/Achievements/overclock.png"),
    new Achievement('DPS Enthusiast', 100, TriggerType.DPS, 'Reach 100 Doggos per second.', "Img/Achievements/overclock.png"),
    new Achievement('DPS Expert', 1000, TriggerType.DPS, 'Reach 1,000 Doggos per second.', "Img/Achievements/overclock.png"),
    new Achievement('DPS Tycoon', 10000, TriggerType.DPS, 'Reach 10,000 Doggos per second.', "Img/Achievements/overclock.png"),
    new Achievement('DPS Legend', 100000, TriggerType.DPS, 'Reach 100,000 Doggos per second.', "Img/Achievements/overclock.png"),

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

    // regarde pour les succès lié au cliques tu joueurs
    checkDPSAchievements(dps) {
        this.achievements.forEach((achievement) => {
            if (achievement.triggerType === TriggerType.DPS &&
                !achievement.unlocked &&
                dps >= achievement.requirement) {
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
        // crée un container pour les achievements avec (Titre, Image, Description)
        const container = document.createElement('div');
        container.className = 'achievement-container';


        const square = document.createElement('div');
        square.className = 'achievement-square';

        // si débloquer montrer l'image et la description
        if (achievement.unlocked) {
            square.classList.add('unlocked');

            // Add image
            const img = document.createElement('img');
            img.src = achievement.imagePath;
            img.alt = achievement.name;
            square.appendChild(img);
        } else {
            // montre une image placeholder quand pas débloqué
            const placeholderImg = document.createElement('div');
            placeholderImg.className = 'placeholder';
            placeholderImg.textContent = '?';
            square.appendChild(placeholderImg);
        }

        // Ajoute le titre au dessus tu carré
        const name = document.createElement('div');
        name.className = 'achievement-name';
        name.textContent = achievement.name;
        container.appendChild(name);


        container.appendChild(square);

        // ajoute la description (caché initialement)
        const description = document.createElement('div');
        description.className = 'achievement-description';
        description.textContent = achievement.description;
        container.appendChild(description);


        achievementsListElem.appendChild(container);
    });
}

const achievementManager = new AchievementManager();
