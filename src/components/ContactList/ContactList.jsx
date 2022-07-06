import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactListItem from 'components/ContactList/ContactListItem';
function ContactList({ contacts }) {
  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function getVisibleContacts(contacts, filter) {
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return visibleContacts;
}

const mapStateToProps = ({ items, filter }) => ({
  contacts: getVisibleContacts(items, filter),
});

export default connect(mapStateToProps)(ContactList);
