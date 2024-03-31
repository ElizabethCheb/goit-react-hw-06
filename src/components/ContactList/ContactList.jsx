import Contact from '../Сontact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts, deleteContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts); 
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); 
  };

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <Contact
            name={contact.name}
            phone={contact.phone}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
