import { createStore } from 'redux';
import { composeWithDevTools } from 'react-devtools-extension';
import reducer from './src/reducers/postReducer';

const store = createStore(reducer, composeWithDevTools());

export default store;
