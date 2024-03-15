"use strict";

// Declare variables using let or const
let buttonAlreadyPressed = 0;
let selection = 0;
let oldSelection = 0;
let currentContentContainer = 0;
// Get the current date
let currentDate = new Date();

// Get the current hour
let currentHour = currentDate.getHours();

// Use const for elements that won't be reassigned
const semester1Container = null; // Assuming these are initialized later
const semester2Container = null;
const assignmentContainer = null;

// Execute when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const centralContainer = document.querySelector(".central-container");
    centralContainer.classList.add("fadeInAnimation");
    buttonAlreadyPressed = 0; // Reset buttonAlreadyPressed
    document.getElementById('currentTime').innerText = 'Current hour: ' + currentHour;
});

// Button click handler for Semester 1
const semester1Btn = () => {
    handleButtonClick(1);
    buttonAlreadyPressed = 1;
    oldSelection = 1;
}

// Button click handler for Semester 2
const semester2Btn = () => {
    handleButtonClick(2);
    buttonAlreadyPressed = 1;
    oldSelection = 2;
}

// Button click handler for Assignments
const assignmentBtn = () => {
    handleButtonClick(3);
    buttonAlreadyPressed = 1;
    oldSelection = 3;
}

// Common function to handle button clicks
const handleButtonClick = (selectedOption) => {
    if (buttonAlreadyPressed === 0) {
        selection = selectedOption;
        changeWebPage();
    }
}

// Handle secondary container buttons
const nextBtn = () => {
    const contentContainers = document.querySelectorAll(".content-container");
    showNextContainer(contentContainers);
}

// Handle secondary container buttons
const previousBtn = () => {
    const contentContainers = document.querySelectorAll(".content-container");
    showPreviousContainer(contentContainers);
}

// Function to change the web page based on the selected option
const changeWebPage = () => {
    const backgroundBox = document.querySelector(".background-box");
    const centralContainer = document.querySelector(".central-container");
    const secondaryContainer = document.querySelector(".secondary-container");
    const contentContainers = document.querySelectorAll(".content-container");

    if (buttonAlreadyPressed === 0) {
        centralContainer.classList.add("setMainPage1Animation");
        centralContainer.addEventListener("animationend", () => {
            const contentContainerArray = Array.from(contentContainers);

            centralContainer.classList.add("hide");
            backgroundBox.style.justifyContent = 'flex-start';
            showSecondaryContainer(secondaryContainer);

            if (selection >= 1 && selection <= contentContainers.length) {
                currentContentContainer = selection;
                showContentContainer(currentContentContainer, contentContainerArray);
            } else {
                console.error("Error with selection [invalid selection]");
            }
        });
    }
}

// Function to show the secondary container with animation
const showSecondaryContainer = (secondaryContainer) => {
    secondaryContainer.classList.add("show");
    secondaryContainer.classList.add("slideFromRightAnimation");
}

// Function to show the selected content container with animation
const showContentContainer = (selection, contentContainers) => {
    const currentContentContainerIndex = selection - 1;

    if (contentContainers[currentContentContainerIndex]) {
        const currentContentContainer = contentContainers[currentContentContainerIndex];
        currentContentContainer.classList.add("show");
        currentContentContainer.classList.add("slideFromLeftAnimation");
    } else {
        console.error("Error: Content container not found for selection ", selection);
    }
}

// Function to show the next content container with animation
const showNextContainer = (contentContainers) => {
    const currentContainer = contentContainers[currentContentContainer - 1];
    hideContainer(currentContainer);

    currentContentContainer++;
    if (currentContentContainer > contentContainers.length) {
        currentContentContainer = 1;
    }

    const nextContainer = contentContainers[currentContentContainer - 1];
    showContainer(nextContainer, "slideFromLeftAnimation");
}

// Function to show the previous content container with animation
const showPreviousContainer = (contentContainers) => {
    const currentContainer = contentContainers[currentContentContainer - 1];
    hideContainer(currentContainer);

    currentContentContainer--;
    if (currentContentContainer < 1) {
        currentContentContainer = contentContainers.length;
    }

    const prevContainer = contentContainers[currentContentContainer - 1];
    showContainer(prevContainer, "slideFromRightAnimation");
}

// Function to hide the container
const hideContainer = (container) => {
    container.classList.remove("show");
    container.classList.remove("slideFromLeftAnimation");
    container.classList.add("hide");
}

// Function to show the container with animation
const showContainer = (container, animationClass) => {
    container.classList.remove("hide");
    container.classList.add("show");
    container.classList.add(animationClass);
}
