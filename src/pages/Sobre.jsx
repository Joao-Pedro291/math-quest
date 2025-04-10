import Carrossel from "../components/Carrossel";
import img1 from "../assets/imgEquipe1.jpg";
import img2 from "../assets/imgEquipe2.jpg";
import img3 from "../assets/imgEquipe3.jpg";
import img4 from "../assets/imgEquipe4.jpg";

function Sobre() {
  const equipe = [
    {
      imagem: img1,
      nome: "João",
      descricao: "Desenvolvedor Front-End",
      info: "Especialista em React, animações e frameworks modernos.",
    },
    {
      imagem: img2,
      nome: "Allix",
      descricao: "Designer",
      info: "Responsável por toda a identidade visual e UX/UI do projeto.",
    },
    {
      imagem: img3,
      nome: "Heitor",
      descricao: "Marketeiro",
      info: "Cuida da divulgação, redes sociais e estratégias de engajamento.",
    },
    {
      imagem: img4,
      nome: "João Victor",
      descricao: "Vagabundo",
      info: "Mentor motivacional da equipe. Especialista em cafés longos.",
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Nossa Equipe</h2>
      <div className="carrossel-equipe">
        <Carrossel itens={equipe} mostrarThumbs={false} />
      </div>
    </div>
  );
}

export default Sobre;
