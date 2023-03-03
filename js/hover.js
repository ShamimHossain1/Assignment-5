function setHoverEffect(elementId) {
    // Get the element
    var myElement = document.getElementById(elementId);

    // Add event listeners for mouse enter and leave
    myElement.addEventListener("mouseenter", function () {
        // Generate a random color
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        // Set the hover color
        myElement.style.backgroundColor = "#" + randomColor;
    });

    myElement.addEventListener("mouseleave", function () {
        // Remove the hover color
        myElement.style.backgroundColor = "";
    });
}

// Call the function for each element
setHoverEffect("Triangle");
setHoverEffect("Rectangle");
setHoverEffect("Parallelogram");
setHoverEffect("Rhombus");
setHoverEffect("Pentagon");
setHoverEffect("Ellipse");
