import "./footer.scss";
import instagram from "../../assets/logo/instagram.svg";
import youtube from "../../assets/logo/youtube.svg";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__wrapper">
          <div className="site-footer__start">
            <h3 className="site-footer__com">
              © 2022 IZGU. Все права защишены
            </h3>
          </div>
          <div className="site-footer__end">
            <a className="site-footer__phone" href="tel:+998 99 123-45-67">
              +998 99 123-45-67
            </a>
            <div className="site-footer__social">
              <a className="site-footer__social-icon" href="instagram.com">
                <img src={instagram} alt="instagram" width={13} height={13} />
              </a>
              <a className="site-footer__social-icon" href="youtube.com">
                <img src={youtube} alt="youtube" width={13} height={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
