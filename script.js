document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("socialPopup");
    const closeBtn = document.getElementById("closePopup");

    // Show popup 3 seconds after the user loads the page (Builds anticipation)
    setTimeout(() => {
        popup.classList.add("show");
    }, 3000);

    // Close button logic
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
        
        // Optional: Make it come back after 30 seconds if they closed it
        setTimeout(() => {
            popup.classList.add("show");
        }, 30000); 
    });
});