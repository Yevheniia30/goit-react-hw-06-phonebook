import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';
import { connect } from 'react-redux';
import {
  addUser,
  deleteUser,
  filterUser,
} from './redux/contacts/contactsActions';

const App = ({ contacts, filter, AddUser, DeleteUser, FilterUser }) => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   console.log('contacts uef');
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  console.log('contacts', contacts);

  const handleSubmit = ({ name, number }) => {
    // const { contacts } = this.state;
    const addedName = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    const addedNumber = contacts.find(item => item.number === number);

    const contact = {
      id: nanoid(4),
      name,
      number,
    };

    addedName
      ? alert(`${name} is already in contacts with number ${addedName.number}`)
      : addedNumber
      ? alert(`${number} is already in contacts as ${addedNumber.name}`)
      : !name || !number
      ? alert('Сomplete all fields')
      : // : setContacts(prevState => [contact, ...prevState]);
        AddUser(contact);
  };

  const handleDelete = id => {
    DeleteUser(id);
    // setContacts(prevState =>
    //   prevState.contacts.filter(item => item?.id !== id)
    // );
  };

  const handleFilter = e => {
    const { value } = e.currentTarget;
    FilterUser(value);
    // setFilter(value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    } else {
      // console.log('filter filtered');
      const normalized = filter.toLowerCase();

      return contacts.filter(item =>
        item.name.toLowerCase().includes(normalized)
      );
    }
  };

  const filteredContacts = getFilteredContacts();
  // console.log('filteredContacts', filteredContacts);

  console.log('contacts', contacts);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        // fontSize: 40,
        color: '#010101',
        paddingTop: '30px',
      }}
    >
      <ContactForm onSubmit={handleSubmit} />
      <Filter filter={filter} onFilter={handleFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.item,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  AddUser: payload => dispatch(addUser(payload)),
  DeleteUser: payload => dispatch(deleteUser(payload)),
  FilterUser: payload => dispatch(filterUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
