import { createStore } from 'redux';
import { currencyReducer } from './reducers/reducers.js';

const appStore = createStore(currencyReducer);

export default appStore;
