import { nanoid } from 'nanoid';
import * as actionTypes from 'redux/contact/contact-action-types';

const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: { id: nanoid(6), name, number },
});

const removeContact = id => ({
  type: actionTypes.REMOVE,
  payload: id,
});

const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

export { addContact, removeContact, changeFilter };
