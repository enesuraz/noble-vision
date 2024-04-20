import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const nobleGases = [
  {
    name: "Helium",
    discovered: "Pierre Janssen",
    image: "helium.jpeg",
    apperance:
      "colorless gas, exhibiting a red-orange glow when placed in a high-voltage electric field",
    mass: 4.0026022,
    sourceUrl: "https://en.wikipedia.org/wiki/Helium",
    symbol: "He",
    danger: false,
  },
  {
    name: "Neon",
    discovered: "Morris Travers",
    image: "neon.jpeg",
    apperance:
      "colorless gas exhibiting an orange-red glow when placed in a high voltage electric field",
    mass: 20.17976,
    sourceUrl: "https://en.wikipedia.org/wiki/Neon",
    symbol: "Ne",
    danger: false,
  },
  {
    name: "Argon",
    discovered: "Lord Rayleigh",
    image: "argon.jpeg",
    apperance:
      "colorless gas exhibiting a lilac/violet glow when placed in a high voltage electric field",
    mass: 39.9481,
    sourceUrl: "https://en.wikipedia.org/wiki/Argon",
    symbol: "Ar",
    danger: false,
  },
  {
    name: "Krypton",
    discovered: "William Ramsay",
    image: "krypton.jpeg",
    apperance:
      "colorless gas, exhibiting a whitish glow in a high electric field",
    mass: 83.7982,
    sourceUrl: "https://en.wikipedia.org/wiki/Krypton",
    symbol: "Kr",
    danger: false,
  },
  {
    name: "Xenon",
    discovered: "William Ramsay",
    image: "xenon.jpeg",
    apperance:
      "colorless gas, exhibiting a blue glow when placed in a high voltage electric field",
    mass: 131.2936,
    sourceUrl: "https://en.wikipedia.org/wiki/Xenon",
    symbol: "Xe",
    danger: false,
  },
  {
    name: "Radon",
    discovered: "Friedrich Ernst Dorn",
    image: "radon.jpeg",
    apperance:
      "colorless gas, occasionally glows green or red in discharge tubes",
    mass: 222,
    sourceUrl: "https://en.wikipedia.org/wiki/Radon",
    symbol: "Rn",
    danger: true,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Gases />
    </div>
  );
}

function Header() {
  return (
    <>
      <h1 className="header-title">
        NobleQuest: Unveiling the Elements of Elegance
      </h1>
      <p className="header-description">
        Embark on a journey through the noble gases with NobleQuest. Discover
        the fascinating world of these elegant elements, from their discovery to
        their unique properties. Dive into a wealth of information, including
        the names of the noble gases, their discoverers, captivating images, and
        much more
      </p>
    </>
  );
}

function Gases() {
  const nobleGasesLength = nobleGases.length;

  return (
    <ul className="gases">
      {nobleGasesLength > 0 &&
        nobleGases.map((gas) => <Gas gas={gas} key={gas.name} />)}
    </ul>
  );
}

function Gas({ gas }) {
  return (
    <li>
      <img src={gas.image} alt={gas.name} className="gas-image" />
      <h2 className="gas-title">{gas.name}</h2>
      <p className="gas-description">{gas.apperance}</p>
      <div className="gas-details">
        <span className={`gas-symbol ${gas.danger ? "danger" : ""}`}>
          {gas.symbol}
        </span>
        <span className="gas-mass">{gas.mass}</span>
      </div>
      <a href={gas.sourceUrl} target="_blank" className="gas-btn">
        Details
      </a>
      {gas.danger && <span className="gas-danger">Danger</span>}
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
