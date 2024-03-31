import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value.replace(/\D/g, '');
    setPhone(inputPhone);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = uuidv4(); 
    dispatch(addContact({ id, name, phone })); 
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={handlePhoneChange}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
