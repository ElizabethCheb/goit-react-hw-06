import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts.Slice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <span>{contact.name}</span>
          <span>{contact.phone}</span>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
