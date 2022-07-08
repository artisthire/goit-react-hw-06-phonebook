import { nanoid } from 'nanoid';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from 'redux/contact/contact-actions';

const INITIAL_CONTACTS = [
  { id: nanoid(6), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(6), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(6), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(6), name: 'Annie Copeland', number: '227-91-26' },
];

const contactsInitialState =
  JSON.parse(localStorage.getItem('contacts')) ?? INITIAL_CONTACTS;

const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(actions.addContact, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(actions.removeContact, (state, { payload }) => {
      const removeItemIndex = state.findIndex(
        contact => contact.id === payload
      );
      state.splice(removeItemIndex, 1);
    });
});

const filterReducer = createReducer('', builder => {
  builder.addCase(actions.changeFilter, (_, { payload }) => payload);
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
