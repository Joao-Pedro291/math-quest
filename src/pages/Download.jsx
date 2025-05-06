import { useNavigate } from "react-router-dom";
import Carrossel from "../components/Carrossel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import "./Download.css";

function Download() {
  const navigate = useNavigate();

  const imagens = [{ imagem: img1 }, { imagem: img2 }, { imagem: img3 }];

  return (
    <div className="download-container">
      <div className="carousel-wrapper">
        <Carrossel itens={imagens} mostrarThumbs={true} clicavel={false} />
      </div>

      <div className="info-wrapper">
        <h2 style={{color: "#0a84b1"}}> MathQuest</h2>
        <p>
          Embarque nessa aventura cheia de monstros, montanhas e matemática ou
          não sla eu sou do visual nao do escrito mano! no caso eu sou de dev
          nao do escrito, tb nao sei
        </p>
        <button
          className="download-btn"
          onClick={() => navigate("/downloads-lista")}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default Download;
