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

function showDonationButton() {
  const button = document.querySelector("button");
  let counter = 0;
  button.addEventListener("click", () => {
    if (counter === 4) {
      const donationDiv = document.querySelector(".donation-link");
      donationDiv.style.display = "block";
    }
    if (counter > 4) return;
    counter++;
    console.log(counter);
  });
}

calcUSDC();
displayDOM();
showDonationButton();
