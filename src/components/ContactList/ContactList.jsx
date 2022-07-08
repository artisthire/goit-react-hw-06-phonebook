import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/contact/contact-selectors';
import { List } from './ContactList.styled';
import ContactListItem from 'components/ContactList/ContactListItem';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
}

function getVisibleContacts(contacts, filter) {
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return visibleContacts;
}

export default ContactList;
