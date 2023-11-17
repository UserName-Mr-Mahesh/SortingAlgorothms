// Function to decrease the size of the bars
function changeSize() {
    const bars = document.querySelectorAll(".bar");
    bars.forEach(bar => {
        let currentHeight = parseFloat(bar.style.height);
        let newHeight = Math.max(currentHeight / 2, 5); // Ensure a minimum height of 5px
        bar.style.height = `${newHeight}px`;
    });
}

// Event listener for the "Change Size" button
const changeSizeBtn = document.querySelector(".changeSize");
changeSizeBtn.addEventListener("click", function () {
    changeSize();
});