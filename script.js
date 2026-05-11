console.log("Portfolio Loaded Successfully");

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});