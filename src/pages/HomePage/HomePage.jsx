import s from "./HomePage.module.css";
import catImage from "../../assets/cool-klev-club-25yo-p-prikolnie-kartinki-kot-i-telefon-4.jpg";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Contacts Editor</h1>
      <h2 className={s.paragraph}>
        Hello everyone, this is a site where you can register and add or remove
        your contacts
      </h2>
      <img src={catImage} alt="cat" />
    </div>
  );
};

export default HomePage;
