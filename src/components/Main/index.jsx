import company from "../../assets/images/header-img.png";
// import company2 from "../../assets/images/header-img@2x.png";
import "./main.scss";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import carusel from "../../assets/images/carusel.png";
import carusel2 from "../../assets/images/carusel2.png";
import carusel3 from "../../assets/images/carusel3.png";
import Modal from "../Modal";


const Main = () => {
  return (
    <main className="site-main">
      {/* COMPANY SECTION START */}
      <section className="company-section">
        <div className="container">
          <div className="company-section__wrapper">
            <div className="company-section__start">
              <h1 className="company-section__title">Компания IZGU</h1>
              <p className="company-section__text">
                Является одним из лидеров среди производителей пластмассовых
                горшков для цветов не только в Узбекистане, но и в странах СНГ.
                В широком ассортименте представлены горшки для дома и сада IZGU
                стремится к постоянному развитию, современности и гибкости.
              </p>
            </div>
            <div className="company-section__end">
              <img src={company} alt="IZGU" width={431} height={280} />
            </div>
          </div>
        </div>
      </section>
      {/* COMPANY SECTION END */}

      {/* CARUSEL SECTION START */}
      <section className="carusel-section">
        <div className="container">
          <div className="carusel-section__wrapper">
            <h2 className="carusel-section__title">Почему мы?</h2>
            <MDBCarousel showControls>
              <MDBCarouselItem
                className="carusel-section__item"
                itemId={1}
                src={carusel}
                alt="..."
                width={870}
                height={420}
              />
              <MDBCarouselItem
                className="carusel-section__item"
                itemId={2}
                src={carusel2}
                alt="..."
                width={870}
                height={420}
              />
              <MDBCarouselItem
                className="carusel-section__item"
                itemId={3}
                src={carusel3}
                alt="..."
                width={870}
                height={420}
              />
            </MDBCarousel>
          </div>
        </div>
      </section>
      {/* CARUSEL SECTION END */}

      {/* CONTACT SECTION START */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-section__wrapper">
            <h2 className="contact-section__title">Хотите обратный звонок?</h2>
            <p className="contact-section__text">
              Заполните полей за 2 минуты и мы свяжемся с вами. Сейчас спросим
              только имя, фамилию и номер телефона
            </p>
            <button className="contact-section__btn">Oбратный звонок</button>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION END */}

      <Modal />
    </main>
  );
};

export default Main;
