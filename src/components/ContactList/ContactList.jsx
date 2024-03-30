import Contact from '../Сontact/Contact'; // Поправте шлях до вашого компонента Contact
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice'; // Імпортуйте екшени для видалення контакту
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch(); // Отримайте функцію диспетчеризації для відправки екшенів

  // Функція для видалення контакту
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); // Відправляємо екшен для видалення контакту з використанням id
  };

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <Contact
            name={contact.name}
            phone={contact.phone}
            onDelete={() => handleDeleteContact(contact.id)} // Додайте обробник видалення
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
