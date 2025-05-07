import { Outlet, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import insta from "./assets/insta.png";
import "./App.css";

function Layout() {
  const navigate = useNavigate();

  function scrollParaContato() {
    const contato = document.getElementById("contato");
    if (contato) {
      contato.scrollIntoView({ behavior: "smooth" });
    }
  }

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
            <button onClick={scrollParaContato}>Contato</button>
          </nav>
        </div>
      </header>

      <main className="content-wrap">
        <Outlet />
      </main>

      <footer className="rodape" id="contato">
        <div>
          <p>
            Fale conosco! <br />
            <em>quatiarchive@email.com</em>
          </p>
        </div>

        <div className="container-bolinhas">
          <div className="bolinhas">
            <div className="bolinha">
              <img src={insta} alt="logo do instagram" />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <small>
            <img src={logo} alt="logo math quest" className="logo" />
          </small>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
