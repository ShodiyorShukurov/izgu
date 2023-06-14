import React from "react";
import logo from "../../assets/logo/izgu.svg";
import "./header.scss";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__wrapper">
          <div className="site-header__start">
            <a href="/">
              <img src={logo} alt="IZGU" width={95} height={48} />
            </a>
            <nav className="site-header__nav">
              <ul className="site-header__nav--list">
                <li className="site-header__nav--item">
                  <NavLink className="site-header__nav--link"  to='/main'> 
                    Главная
                  </NavLink>
                </li>
                <li className="site-header__nav--item">
                  <a href="#l" className="site-header__nav--link">
                    Каталог
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="site-header__end">
            <div>
              <button
                className="site-header__select-btn"
                onClick={() => openBtn()}
              >
                <span id="text">Рус</span>
                {!isOpen ? (
                  <BsChevronDown className="icon-arrow" />
                ) : (
                  <BsChevronUp />
                )}
              </button>
              <ul className="site-header__list">
                <li className="site-header__item">
                  <span className="site-header__item--text" value="Рус">
                    Рус
                  </span>
                </li>
                <li className="site-header__item">
                  <span className="site-header__item--text" value="Uzb">
                    Uzb
                  </span>
                </li>
                <li className="site-header__item">
                  <span className="site-header__item--text" value="Eng">
                    Eng
                  </span>
                </li>
              </ul>
            </div>

            <button className="site-header__btn">Oбратный звонок</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
