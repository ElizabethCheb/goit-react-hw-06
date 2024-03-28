import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts.Slice';
import styles from './ContactForm.module.css';
import { useState } from 'react';

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
    dispatch(addContact({ name, phone }));
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
