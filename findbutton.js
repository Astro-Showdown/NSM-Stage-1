document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("starmap");

    // Step 2: Attach an event listener
    element.addEventListener('click', function(event) {
        const rect = element.getBoundingClientRect();

        // Mouse position relative to element
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Percentage (0–100) relative to element size
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;

        alert(`Click at ${percentX.toFixed(2)}%, ${percentY.toFixed(2)}%`);
    });
});
