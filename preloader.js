// Create the overlay and SVG elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 64, 129, 1);
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://monlak01.github.io/preloaderJs/loaderball.svg';
svgImage.style.cssText = `
    width: 100vw;  // Full viewport width
    height: 100vh; // Full viewport height
    object-fit: cover; // Cover the whole viewport without losing aspect ratio
    position: fixed; // Fixed position to cover the whole screen
    top: 0;
    left: 0;
`;

// Append the elements to the body
overlay.appendChild(svgImage); // Append the SVG image inside the overlay
document.body.appendChild(overlay);

// Function to hide the overlay
function hideOverlay() {
    overlay.style.display = 'none';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(hideOverlay, 100); // Simulating external JS file loading
});

// Fallback: Hide the overlay when the window's load event is triggered
window.addEventListener('load', hideOverlay);
