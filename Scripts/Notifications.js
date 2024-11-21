const notificationQueue = [];
let isDisplayingNotification = false;
const notificationFadeTime = 1000;
const notificationInterval = 2000;

// crée un queue de notification pour géré en cas de multiple notifications en meme temps
function showNotification(message) {
    notificationQueue.push(message);
    if (!isDisplayingNotification) {
        displayNextNotification();
    }
}

function displayNextNotification() {
    // quitter s'il n'y a plus de notifications
    if (notificationQueue.length === 0) {
        isDisplayingNotification = false;
        return;
    }

    isDisplayingNotification = true;
    const message = notificationQueue.shift();
    notificationElem.textContent = message;
    notificationElem.style.display = 'block';
    notificationElem.style.opacity = '1';

    setTimeout(() => {
        notificationElem.style.opacity = '0';
        setTimeout(() => {
            notificationElem.style.display = 'none';
            displayNextNotification();
        }, notificationFadeTime);
    }, notificationInterval);
}
