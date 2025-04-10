import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import PaginaDownloads from "./pages/PaginaDownloads";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="download" element={<Download />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="/downloads-lista" element={<PaginaDownloads />} />
      </Route>
    </Routes>
  );
}

export default RoutesApp;
