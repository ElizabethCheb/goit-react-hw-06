import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ name, phone, onDelete }) => {
  return (
    <div className={styles.contact}>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
