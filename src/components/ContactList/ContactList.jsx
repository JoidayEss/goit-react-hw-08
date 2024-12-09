import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/contacts/operations";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
    toast.error("Contacts deleted!", {
      duration: 2000,
      position: "top-center",
      style: {
        backgroundColor: "#f8f8f8",
        color: "red",
      },
    });
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (filteredContacts.length === 0) {
    return <p className={s.error}>No contacts found. Add your contacts 💻️</p>;
  }

  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDelete={() => handleDelete(contact.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
