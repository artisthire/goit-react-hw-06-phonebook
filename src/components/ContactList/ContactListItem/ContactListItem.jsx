import { connect } from 'react-redux';
import * as actions from 'redux/contact/contact-actions';
import PropTypes from 'prop-types';
import { Item, Number, Button } from './ContactListItem.styled';

function ContactListItem({ contact, onContactRemove }) {
  const { name, number, id } = contact;

  return (
    <Item>
      {name}: <Number>{number}</Number>{' '}
      <Button type="button" onClick={() => onContactRemove(id)}>
        Delete
      </Button>
    </Item>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onContactRemove: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onContactRemove: contactId => {
    dispatch(actions.removeContact(contactId));
    dispatch(actions.changeFilter(''));
  },
});

export default connect(null, mapDispatchToProps)(ContactListItem);
