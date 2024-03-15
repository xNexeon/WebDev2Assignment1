// TO DO
// -Assign buttons in secondary container to show selected content container
// -Footer/footbar
// -Add as you go

let buttonAlreadyPressed = 0;
let selection = 0;
let oldselection = 0;
currentContentContainer = 0;
let semester1Container, semester2Container, assignmentContainer;


// Execute when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const centralContainer = document.querySelector(".central-container");
    centralContainer.classList.add("fadeInAnimation");
    buttonAlreadyPressed = 0;
   
});

// Button click handler for Semester 1
function semester1Btn() {
    handleButtonClick(1);
    buttonAlreadyPressed = 1;
    oldselection = 1;
}

// Button click handler for Semester 2
function semester2Btn() {
    handleButtonClick(2);
    buttonAlreadyPressed = 1;
    oldselection = 2;
}

// Button click handler for Assignments
function assignmentBtn() {
    handleButtonClick(3);
    buttonAlreadyPressed = 1;
    oldselection = 3;
}

// Handle secondarycontainer buttos
function semester1Btn2() {
    handleSecondaryButtonClick(1);
}

function semester2Btn2() {
    handleSecondaryButtonClick(2);
}

function assignmentBtn2() {
    handleSecondaryButtonClick(3);
}



// Common function to handle button clicks
function handleButtonClick(selectedOption) {
    

    if (buttonAlreadyPressed === 0) {
        selection = selectedOption;
        changeWebPage();    
    } 
}




function handleSecondaryButtonClick(selection) {
    switchToSelectedContainer(selection)
}

function switchToSelectedContainer(selection) {
    const contentContainers = document.querySelectorAll(".content-container");
    const semester1Container = document.querySelector("#con1");
    const semester2Container = document.querySelector("#con2");
    const assignmentContainer = document.querySelector("#con3");
}








// Function to change the web page based on the selected option
function changeWebPage() {
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
                console.log("Error with selection [invalid selection]");
            }
        });
    }
}

// Function to show the secondary container with animation
function showSecondaryContainer(secondaryContainer) {
    secondaryContainer.classList.add("show");
    secondaryContainer.classList.add("slideFromRightAnimation");
}

// Function to show the selected content container with animation
function showContentContainer(selection, contentContainers) {
    const currentContentContainerIndex = selection - 1;

    if (contentContainers[currentContentContainerIndex]) {
        const currentContentContainer = contentContainers[currentContentContainerIndex];
        currentContentContainer.classList.add("show");
        currentContentContainer.classList.add("slideFromLeftAnimation");
    } else {
        console.log("Error: Content container not found for selection ", selection);
    }
}
