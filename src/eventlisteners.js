import { displayRandomProject } from "./index";
import { buttonTexts } from "./buttontexts";

function displayRandomButtonText() {
  let randomIndex = Math.floor(Math.random() * buttonTexts.length);
  console.log(`Random button-text-index is: ${randomIndex}`);
  button.innerText = buttonTexts[randomIndex];
}

const button = document.querySelector("button");

let counter = 0;

button.addEventListener("click", () => {
  if (counter === 4) {
    console.log("Rendering donation link, stopping button counter...");
    const donationDiv = document.querySelector(".donation-link");
    donationDiv.style.display = "block";
    return;
  }
  if (counter > 4) return;
  counter++;
  console.log(`Button clicked ${counter} time(s)`);
});

button.addEventListener("click", displayRandomButtonText);
button.addEventListener("click", displayRandomProject);
