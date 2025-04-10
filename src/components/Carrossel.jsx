import { useState } from "react";
import Slider from "react-slick";
import "./Carrossel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carrossel({ itens = [], mostrarThumbs = true, clicavel = true }) {
  const [selecionado, setSelecionado] = useState(null);

  const settings = {
    customPaging: function (i) {
      return mostrarThumbs && itens[i].imagem ? (
        <img src={itens[i].imagem} alt={`Thumb ${i}`} className="img-thumb" />
      ) : (
        <div className="custom-dot" />
      );
    },
    dots: true,
    dotsClass: mostrarThumbs
      ? "slick-dots slick-thumb"
      : "slick-dots slick-default",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {itens.map((item, index) => (
          <div key={index} className="carrossel-slide">
            <img
              src={item.imagem}
              alt={item.nome || `Slide ${index}`}
              className="img-grande"
              onClick={clicavel ? () => setSelecionado(item) : undefined}
              style={{ cursor: clicavel ? "pointer" : "default" }}
            />
            {item.nome && (
              <div className="info">
                <h3>{item.nome}</h3>
                <p>
                  <em>{item.descricao}</em>
                </p>
              </div>
            )}
          </div>
        ))}
      </Slider>

      {clicavel && selecionado && (
        <div className="modal-overlay" onClick={() => setSelecionado(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selecionado.nome}</h2>
            <p>
              <em>{selecionado.descricao}</em>
            </p>
            <p>{selecionado.info}</p>
            <button onClick={() => setSelecionado(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrossel;
