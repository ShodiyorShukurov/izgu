import close from "../../assets/logo/close.svg";
import "./modal.scss";
const Modal = () => {
  return (
    <div className="modal-section">
      <div className="modal-wrapper">
        <div className="modal-text">
          <p className="modal-route">Главная > Горшки</p>
          <h2 className="modal-title">Обратный звонок</h2>
        </div>
        <button className="close-btn">
          <img src={close} alt="close" />
        </button>
      </div>

      <form className="modal-form">
        <input
          className="modal-input"
          type="text"
          name="name"
          placeholder="Ф.И.О"
        />
        <input
          className="modal-input"
          type="tel"
          name="phone_num"
          placeholder="Номер телефона"
        />
        <textarea
          className="modal-textarea"
          name="decs"
          placeholder="Комментария нап: свяжите после 8:00 утра"
        ></textarea>
        <button className="modal-btn ">Подтвердить</button>
      </form>
    </div>
  );
};

export default Modal;
