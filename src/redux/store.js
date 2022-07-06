import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import contactReducer from 'redux/contact/contact-reducer';

const store = createStore(contactReducer, composeWithDevTools());

export default store;
