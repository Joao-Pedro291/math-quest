import { Outlet, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import "./App.css";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="titulo">
      <header>
        <img
          src={logo}
          alt="Logo Math Quest"
          className="logo"
          onClick={() => navigate("/")}
        />

        <div className="menu-container">
          <nav>
            <button onClick={() => navigate("/")}>Início</button>
            <button onClick={() => navigate("/download")}>Download</button>
            <button onClick={() => navigate("/sobre")}>Sobre Nós</button>
            <button onClick={() => navigate("/contato")}>Contato</button>
          </nav>
        </div>
      </header>

      <Outlet /> {/* Aqui vai o conteúdo da página */}
    </div>
  );
}

export default Layout;
