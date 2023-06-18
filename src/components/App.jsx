import Form from './form/Form.jsx';
import Contacts from './contacts/Contacts.jsx';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Form onSubmit={values => console.log(values)}></Form>
      <Contacts></Contacts>
    </div>
  );
};
