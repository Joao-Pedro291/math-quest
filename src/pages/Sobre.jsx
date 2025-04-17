import Carrossel from "../components/Carrossel";
import img1 from "../assets/imgEquipe1.jpg";
import img2 from "../assets/imgEquipe2.jpg";
import img3 from "../assets/imgEquipe3.jpg";
import img4 from "../assets/imgEquipe4.jpg";
import img5 from "../assets/imgEquipe5.jpg";

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
    {
      imagem: img5,
      nome: "Gustavo Esteque",
      descricao: "Game dev",
      info: "Tio do mauro nakada, faz umas coisa",
    },
    {
      imagem: img4,
      nome: "Fabricio",
      descricao: "Marketing",
      info: "Faz marketing",
    },
    {
      imagem: img4,
      nome: "Thais",
      descricao: "Designer",
      info: "Responsável por toda a identidade visual e UX/UI do projeto.",
    },
    {
      imagem: img4,
      nome: "Lynn",
      descricao: "Responsável pela documentação",
      info: "Documenta as coisas",
    },
    {
      imagem: img4,
      nome: "Gustavo Martins",
      descricao: "Game dev e game designer",
      info: "Inteligente e manja das coisas",
    },
    {
      imagem: img4,
      nome: "Higor",
      descricao: "Game dev",
      info: "Responsavel pela programação do jogo",
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
