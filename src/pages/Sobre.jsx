import Carrossel from "../components/Carrossel";
import imgJp from "../assets/imgJp.jpg";
import imgAllix from "../assets/imgAllix.jpg";
import imgHeitor from "../assets/imgHeitor.jpg";
import imgJv from "../assets/imgJv.jpg";
import imgGe from "../assets/imgGe.jpg";
import imgFabricio from "../assets/imgFabricio.jpg";
import imgThais from "../assets/imgThais.jpg";
import imgLynn from "../assets/imgLynn.jpg";
import imgGm from "../assets/imgGm.jpg";
import imgHigor from "../assets/imgHigor.jpg";

function Sobre() {
  const equipe = [
    {
      imagem: imgAllix,
      nome: "Allix",
      descricao: "Gerente e Designer",
      info: "Gerencia o projeto como um todo, além de ser responsável pela identidade visual e experiência do usuário (UX/UI).",
    },
    {
      imagem: imgJp,
      nome: "João",
      descricao: "Web Developer",
      info: "Especializado em React, animações e integração com frameworks modernos.",
    },
    {
      imagem: imgHeitor,
      nome: "Heitor",
      descricao: "Marketing",
      info: "Responsável pelas estratégias de marketing, redes sociais e engajamento do público.",
    },
    {
      imagem: imgJv,
      nome: "João Victor",
      descricao: "Escrita criativa",
      info: "Cria conteúdos criativos e atua como incentivador da equipe com foco em narrativa e motivação.",
    },
    {
      imagem: imgGe,
      nome: "Gustavo Esteque",
      descricao: "Game developer",
      info: "Desenvolve a lógica e funcionalidades do jogo com foco em performance e interatividade.",
    },
    {
      imagem: imgFabricio,
      nome: "Fabricio",
      descricao: "Marketing",
      info: "Apoia as ações de marketing e colabora com o time técnico quando necessário.",
    },
    {
      imagem: imgThais,
      nome: "Thais",
      descricao: "Arte e design",
      info: "Cuida da identidade visual, ilustrações e experiência do usuário (UX/UI).",
    },
    {
      imagem: imgLynn,
      nome: "Lynn",
      descricao: "Documentação, escrita e processamento de dados",
      info: "Responsável por registrar processos, redigir conteúdos e organizar dados do projeto.",
    },
    {
      imagem: imgGm,
      nome: "Gustavo Martins",
      descricao: "Game designer e Game developer",
      info: "Planeja a mecânica e estrutura dos jogos, além de contribuir na programação e testes.",
    },
    {
      imagem: imgHigor,
      nome: "Higor",
      descricao: "Game developer",
      info: "Atua na programação central do jogo, implementando funcionalidades e lógica de gameplay.",
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
