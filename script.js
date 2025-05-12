// Task 1: Change text content dynamically
document.getElementById("changeTextButton").addEventListener("click", function() {
    const description = document.getElementById("description");
    description.textContent = "The text content has been changed! 🎉";
  });
  
  // Task 2: Modify CSS styles via JavaScript
  document.getElementById("changeStyleButton").addEventListener("click", function() {
    const header = document.querySelector("header");
    header.style.backgroundColor = "#FF5733"; // Change header background color
    header.style.color = "black"; // Change text color
  });
  
  // Task 3: Add or remove an element when a button is clicked
  document.getElementById("addElementButton").addEventListener("click", function() {
    const container = document.getElementById("container");
    
    // Check if the element already exists to avoid duplication
    if (!document.getElementById("newElement")) {
      const newElement = document.createElement("div");
      newElement.id = "newElement";
      newElement.textContent = "This is a dynamically added element!";
      container.appendChild(newElement);
    }
  });
  