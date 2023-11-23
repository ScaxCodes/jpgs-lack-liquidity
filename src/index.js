import "./normalize.css";
import "./style.css";

import { projects } from "./nftprojects";
import { buttonTexts } from "./buttontexts";

let SOLrate = 0;

async function fetchSOLRate() {
  try {
    // https://docs.coincap.io/
    const response = await fetch(`https://api.coincap.io/v2/assets/solana`);
    const responseJson = await response.json();
    SOLrate = responseJson.data.priceUsd;
    console.log(`Current $SOL rate: ${responseJson.data.priceUsd}$`);
    return responseJson.data.priceUsd;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

async function calcUSDC(project) {
  try {
    await fetchSOLRate();

    const USDCPrice = document.querySelector(".price-in-usdc div");
    USDCPrice.textContent = (projects[project].floorPrice * SOLrate).toFixed(2);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

function displayDOM(project) {
  const projectName = document.querySelector("#project-name");
  projectName.textContent = projects[project].name;

  const mintPriceUSDC = document.querySelector("#dollar");
  mintPriceUSDC.textContent = `$${projects[project].mintPriceUSDC.toFixed(2)}`;

  const floorPrice = document.querySelector(".price-in-sol div");
  floorPrice.textContent = projects[project].floorPrice;

  const mintPriceSOL = document.querySelector("#mint-price-sol");
  mintPriceSOL.textContent = `${projects[project].mintPriceSOL} $SOL`;

  const mintDate = document.querySelector("#mint-date");
  mintDate.textContent = projects[project].mintDate;

  const image = document.querySelector("#pfp");
  image.src = projects[project].picture;
}

// //
// function randomProject(project) {
//   displayDOM(project);
// }

// //

const button = document.querySelector("button");

function showDonationButton() {
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
}

function randomButtonText() {
  let randomIndex = Math.floor(Math.random() * buttonTexts.length);
  console.log(`Random button-text-index is: ${randomIndex}`);
  button.innerText = buttonTexts[randomIndex];
}

function eventListenerButtontext() {
  button.addEventListener("click", randomButtonText);
}

calcUSDC("lily");
displayDOM("lily");
showDonationButton();
eventListenerButtontext();
