import { Outlet, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import "./App.css";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
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

      <main className="content-wrap">
        <Outlet />
      </main>

      <footer className="rodape">
        <div>
          <p>
            Fale conosco! <br />
            <em>email@email.com</em>
          </p>
        </div>
        <div className="bolinhas">
          <div className="bolinha" />
          <div className="bolinha" />
        </div>
        <div style={{ textAlign: "right" }}>
          <strong>logotipo</strong>
          <br />
          <small>mini aqui</small>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
