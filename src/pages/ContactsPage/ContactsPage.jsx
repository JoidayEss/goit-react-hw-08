import { isLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useSelector } from "react-redux";

const ContactsPage = () => {
  const loader = useSelector(isLoading);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <div>{loader && "Request in progress...."}</div>
    </div>
  );
};

export default ContactsPage;
