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

const SOLrate = 61.03;

const projectName = document.querySelector("#project-name");
projectName.textContent = projects.dumbassDonkeys.name;

const mintPriceUSDC = document.querySelector("#dollar");
mintPriceUSDC.textContent = `$${projects.dumbassDonkeys.mintPriceUSDC.toFixed(
  2
)}`;

const floorPrice = document.querySelector(".price-in-sol div");
floorPrice.textContent = projects.dumbassDonkeys.floorPrice;

const USDCPrice = document.querySelector(".price-in-usdc div");
USDCPrice.textContent = (projects.dumbassDonkeys.floorPrice * SOLrate).toFixed(
  2
);

const mintPriceSOL = document.querySelector("#mint-price-sol");
mintPriceSOL.textContent = `${projects.dumbassDonkeys.mintPriceSOL} $SOL`;

const mintDate = document.querySelector("#mint-date");
mintDate.textContent = projects.dumbassDonkeys.mintDate;

console.log(projects);
