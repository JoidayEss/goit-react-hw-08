import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <>
      <div>
        <p className={s.text_p}>{name}</p>
        <p className={s.text_p}>{number}</p>
      </div>
      <button className={s.button} onClick={onDelete} type="submit">
        Delete
      </button>
    </>
  );
};

export default Contact;
