import { useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as actions from 'redux/contact/contact-actions';
import { Form, Label, LabelName, Input, Button } from './ContactForm.styled';

function ContactForm({ contacts, onContactAdd }) {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleSubmit(evt) {
    evt.preventDefault();

    const form = evt.currentTarget;
    const nameValue = form.name.value.trim();
    const telValue = form.number.value.trim();
    const normalizeName = nameValue.toLocaleLowerCase();
    const isNameInContacts = contacts.some(
      contact => contact.name.toLocaleLowerCase() === normalizeName
    );

    if (isNameInContacts) {
      toast.warn(`"${nameValue}" is already in contacts`);
    } else {
      onContactAdd({ name: nameValue, number: telValue });
    }

    form.reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <LabelName>Name</LabelName>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          defaultValue=""
          required
        />
      </Label>
      <Label>
        <LabelName>Phone</LabelName>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          defaultValue=""
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onContactAdd: PropTypes.func.isRequired,
};

const mapStateToProps = ({ items }) => ({
  contacts: items,
});

const mapDispatchToProps = dispatch => ({
  onContactAdd: contact => {
    dispatch(actions.addContact(contact));
    dispatch(actions.changeFilter(''));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
