import Carrossel from "../components/Carrossel";
import img1 from "../assets/imgEquipe1.jpg";
import img2 from "../assets/imgEquipe2.jpg";
import img3 from "../assets/imgEquipe3.jpg";
import img4 from "../assets/imgEquipe4.jpg";
import img5 from "../assets/imgEquipe5.jpg";

function Sobre() {
  const equipe = [
    {
      imagem: img2,
      nome: "Allix",
      descricao: "Gerente e Designer",
      info: "Gerencia o projeto como um todo, além de ser responsável pela identidade visual e experiência do usuário (UX/UI).",
    },
    {
      imagem: img1,
      nome: "João",
      descricao: "Web Developer",
      info: "Especializado em React, animações e integração com frameworks modernos.",
    },
    {
      imagem: img3,
      nome: "Heitor",
      descricao: "Marketing",
      info: "Responsável pelas estratégias de marketing, redes sociais e engajamento do público.",
    },
    {
      imagem: img4,
      nome: "João Victor",
      descricao: "Escrita criativa",
      info: "Cria conteúdos criativos e atua como incentivador da equipe com foco em narrativa e motivação.",
    },
    {
      imagem: img5,
      nome: "Gustavo Esteque",
      descricao: "Game developer",
      info: "Desenvolve a lógica e funcionalidades do jogo com foco em performance e interatividade.",
    },
    {
      imagem: img4,
      nome: "Fabricio",
      descricao: "Marketing",
      info: "Apoia as ações de marketing e colabora com o time técnico quando necessário.",
    },
    {
      imagem: img4,
      nome: "Thais",
      descricao: "Arte e design",
      info: "Cuida da identidade visual, ilustrações e experiência do usuário (UX/UI).",
    },
    {
      imagem: img4,
      nome: "Lynn",
      descricao: "Documentação, escrita e processamento de dados",
      info: "Responsável por registrar processos, redigir conteúdos e organizar dados do projeto.",
    },
    {
      imagem: img4,
      nome: "Gustavo Martins",
      descricao: "Game designer e Game developer",
      info: "Planeja a mecânica e estrutura dos jogos, além de contribuir na programação e testes.",
    },
    {
      imagem: img4,
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
