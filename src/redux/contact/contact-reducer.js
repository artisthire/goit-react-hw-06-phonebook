import { nanoid } from 'nanoid';
import { combineReducers } from 'redux';
import * as actionTypes from 'redux/contact/contact-action-types';

const INITIAL_CONTACTS = [
  { id: nanoid(6), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(6), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(6), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(6), name: 'Annie Copeland', number: '227-91-26' },
];

const contactsInitialState =
  JSON.parse(localStorage.getItem('contacts')) ?? INITIAL_CONTACTS;

const contactsReducer = (state = contactsInitialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];
    case actionTypes.REMOVE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
