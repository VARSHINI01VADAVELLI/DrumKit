// Get all drum elements
const drums = document.querySelectorAll(".drum");

// Add event listener for clicks
drums.forEach(drum => {
    drum.addEventListener("click", () => {
        const drumId = drum.id;
        playSound(drumId);
        animateDrum(drumId);
    });
});

// Add event listener for keyboard presses
document.addEventListener("keydown", event => {
    const drumKey = event.key.toLowerCase();
    const drum = document.querySelector(`.drum[data-key="${drumKey}"]`);
    if (drum) {
        const drumId = drum.id;
        playSound(drumId);
        animateDrum(drumId);
    }
});

// Function to play the corresponding sound
/*function playSound(drumId) {
    const sound = document.getElementById(`${drumId}-sound`);
    sound.currentTime = 0;  // Reset the sound if it's already playing
    sound.play();
}

// Function to animate the drum (visual feedback)
function animateDrum(drumId) {
    const drum = document.getElementById(drumId);
    drum.classList.add("active");

    // Remove the active class after a short delay to reset the animation
    setTimeout(() => drum.classList.remove("active"), 50);
}*/
// Set a minimum delay between sounds (e.g., 300 milliseconds)
let lastPlayedTime = 0;
const delayBetweenSounds = 300; // 300 ms = 0.3 seconds

// Get all drum elements
/*const drums = document.querySelectorAll(".drum");*/

// Add event listener for clicks
drums.forEach(drum => {
    drum.addEventListener("click", () => {
        const drumId = drum.id;
        if (canPlaySound()) {
            playSound(drumId);
            animateDrum(drumId);
        }
    });
});

// Add event listener for keyboard presses
document.addEventListener("keydown", event => {
    const drumKey = event.key.toLowerCase();
    const drum = document.querySelector(`.drum[data-key="${drumKey}"]`);
    if (drum && canPlaySound()) {
        const drumId = drum.id;
        playSound(drumId);
        animateDrum(drumId);
    }
});

// Function to play the corresponding sound
function playSound(drumId) {
    const sound = document.getElementById(`${drumId}-sound`);
    sound.currentTime = 0;  // Reset the sound if it's already playing
    sound.play();
    lastPlayedTime = Date.now();  // Update the last played time
}

// Function to animate the drum (visual feedback)
function animateDrum(drumId) {
    const drum = document.getElementById(drumId);
    drum.classList.add("active");

    // Remove the active class after a short delay to reset the animation
    setTimeout(() => drum.classList.remove("active"), 100);
}

// Function to check if enough time has passed since the last sound played
function canPlaySound() {
    const currentTime = Date.now();
    return currentTime - lastPlayedTime >= delayBetweenSounds;
}
