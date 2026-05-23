/**
 * menu.js - Handles the filtering logic for the game grid
 */

function filterSelection(category) {
    const cards = document.getElementsByClassName("game-card");
    const buttons = document.getElementsByClassName("filter-btn");

    // 1. Update the button "Active" style
    for (let btn of buttons) {
        btn.classList.remove("active");
        // Check if the button text matches the category to highlight it
        if (btn.innerText.toLowerCase() === category || (category === 'all' && btn.innerText === 'All')) {
            btn.classList.add("active");
        }
    }

    // 2. Show or hide cards
    for (let card of cards) {
        if (category === "all") {
            card.style.display = "block";
        } else {
            // Only show if the card has the matching class
            if (card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    }
}