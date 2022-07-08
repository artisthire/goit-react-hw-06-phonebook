import { configureStore } from '@reduxjs/toolkit';
import contactReducer from 'redux/contact/contact-reducer';

const store = configureStore({ reducer: { contacts: contactReducer } });

export default store;
