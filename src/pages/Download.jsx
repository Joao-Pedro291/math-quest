import Carrossel from "../components/Carrossel";
import "./Download.css";

function Download() {
  return (
    <div className="download-container">
      <div className="carousel-wrapper">
        <Carrossel />
      </div>

      <div className="info-wrapper">
        <h2>MathQuest</h2>
        <p>
          Embarque nessa aventura cheia de monstros, montanhas e matemática ou
          não sla eu sou do visual nao do escrito mano! no caso eu sou de dev
          nao do escrito, tb nao sei
        </p>
        <button className="download-btn">Download</button>
      </div>
    </div>
  );
}

export default Download;
