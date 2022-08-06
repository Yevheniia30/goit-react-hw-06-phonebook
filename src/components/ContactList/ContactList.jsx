import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import { ContactItem } from './ContactItem';
import { deleteUser } from 'redux/contacts/contactsActions';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.item);
  const filter = useSelector(state => state.contacts.filter);

  const handleDelete = id => {
    dispatch(deleteUser(id));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    } else {
      const normalized = filter.toLowerCase();

      return contacts.filter(item =>
        item.name.toLowerCase().includes(normalized)
      );
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={s.list}>
      {filteredContacts?.map(item => (
        <ContactItem item={item} onDelete={handleDelete} key={item.id} />
      ))}
    </ul>
  );
};
