import "./normalize.css";
import "./style.css";

import { projects } from "./nftprojects";
import { countDonationButton } from "./eventlisteners";

let SOLrate = 0;

async function fetchSOLRate() {
  try {
    if (SOLrate !== 0) return;
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

const projectsList = Object.keys(projects);

function displayRandomProject() {
  let randomIndex = Math.floor(Math.random() * projectsList.length);
  console.log(`Random project-index is: ${randomIndex}`);
  calcUSDC(projectsList[randomIndex]);
  displayDOM(projectsList[randomIndex]);
}

displayRandomProject();
countDonationButton();

export { displayRandomProject };
