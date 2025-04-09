import { useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  const navigate = useNavigate(); // Hook do React Router para navegação programática

  const vaiProInicio = () => {
    navigate("/"); 
  };

  const vaiProDownload = () => {
    navigate("/download");
  };

  const vaiProSobre = () => {
    navigate("/sobre");
  };

  const vaiProContato = () => {
    navigate("/contato");
  };

  return (
    <div className="titulo">
      <header>
        <img src={logo} alt="Logo Math Quest" className="logo" />

        <div className="menu-container">
          <nav>
            <button onClick={vaiProInicio}>Início</button>
            <button onClick={vaiProDownload}>Download</button>
            <button onClick={vaiProSobre}>Sobre Nós</button>
            <button onClick={vaiProContato}>Contato</button>
          </nav>
        </div>
      </header>

      <h1>Math Quest</h1>
    </div>
  );
}

export default App;
