const notificationQueue = [];
let isDisplayingNotification = false;
const notificationFadeTime = 500;
const notificationInterval = 1000;

// create notifications queue to handle multiple ones at the same time
function showNotification(message) {
    notificationQueue.push(message);
    if (!isDisplayingNotification) {
        displayNextNotification();
    }
}

function displayNextNotification() {
    // Exit if no more notifications
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
