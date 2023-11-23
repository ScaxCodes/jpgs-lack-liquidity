import "./normalize.css";
import "./style.css";

const projects = {
  dumbassDonkeys: {
    api: "dumbass_donkeys",
    name: "Dumbass Donkey",
    floorPrice: 0.061,
    mintPriceSOL: 0.1,
    mintPriceUSDC: 33.62 * 0.1,
    mintDate: "2022-09-09",
    picture: "./dumbass_donkeys.webp",
    urlME: "//magiceden.io/marketplace/dumbass_donkeys",
  },
};

const buttonTexts = [
  "Bring on the chaos! 🌪️",
  "More shocks, please ⚡️",
  "Feed me pain 😩",
  "Give me disruption! 🌀",
  "Chaos incoming! 🤯",
  "Let's feel the rollercoaster 🎢",
  "Inject more drama! 🎭",
  "I crave the chaos 🌌",
  "Unleash the madness! 😵",
  "Bring the thrill! 🎯",
  "Surprise me! 🎉",
  "Crypto is a scam? 🤔",
  "NFTs = Illiquidity? 📉",
  "Bruh 😵",
  "Oof... 🤦‍♂️",
];

let SOLrate = 0;

async function fetchSOLRate() {
  try {
    const response = await fetch(`https://api.coincap.io/v2/assets/solana`);
    const responseJson = await response.json();
    SOLrate = responseJson.data.priceUsd;
    console.log(`Current $SOL rate: ${responseJson.data.priceUsd}$`);
    return responseJson.data.priceUsd;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

async function calcUSDC() {
  try {
    await fetchSOLRate();

    const USDCPrice = document.querySelector(".price-in-usdc div");
    USDCPrice.textContent = (
      projects.dumbassDonkeys.floorPrice * SOLrate
    ).toFixed(2);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

function displayDOM() {
  const projectName = document.querySelector("#project-name");
  projectName.textContent = projects.dumbassDonkeys.name;

  const mintPriceUSDC = document.querySelector("#dollar");
  mintPriceUSDC.textContent = `$${projects.dumbassDonkeys.mintPriceUSDC.toFixed(
    2
  )}`;

  const floorPrice = document.querySelector(".price-in-sol div");
  floorPrice.textContent = projects.dumbassDonkeys.floorPrice;

  const mintPriceSOL = document.querySelector("#mint-price-sol");
  mintPriceSOL.textContent = `${projects.dumbassDonkeys.mintPriceSOL} $SOL`;

  const mintDate = document.querySelector("#mint-date");
  mintDate.textContent = projects.dumbassDonkeys.mintDate;
}

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

calcUSDC();
displayDOM();
showDonationButton();
eventListenerButtontext();
