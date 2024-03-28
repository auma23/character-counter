// Select the textarea element with the id "textarea"
const textareaEl = document.getElementById("textarea");

// Select the element with the id "total-counter" where the total character count will be displayed
const totalCounterEl = document.getElementById("total-counter");

// Select the element with the id "remaining-counter" where the remaining character count will be displayed
const remainingCounterEl = document.getElementById("remaining-counter");

// Adds an event listener to the textarea element for the "keyup" event
textareaEl.addEventListener("keyup", () => {
  // Calls the updateCounter() function every time a key is released while typing
  updateCounter();
});

// Calls the updateCounter() function immediately when the script is run
//updateCounter();

// Defines the updateCounter() function
function updateCounter() {
  // Sets the text content of totalCounterEl to the length of the textarea value
  totalCounterEl.innerText = textareaEl.value.length;

  // Sets the text content of remainingCounterEl to the difference between the maximum allowed length of the textarea and the current length of the textarea value
  remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
