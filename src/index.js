import "./normalize.css";
import "./style.css";

console.log("Hello World!");

// TEST FOR PUSH
// Not working, wait for API / Node.js lesson in TheOdinProject
// Try with Hyperspace.xyz JS client as soon as we have a requested API key

// const options = {method: 'GET', headers: {accept: 'application/json'}, mode: 'no-cors'};

// fetch('https://api-mainnet.magiceden.dev/v2/collections/reavers/stats', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api-mainnet.magiceden.dev/v2/collections/reavers/stats', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));