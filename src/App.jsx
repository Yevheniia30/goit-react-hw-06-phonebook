import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
        paddingTop: '30px',
      }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
