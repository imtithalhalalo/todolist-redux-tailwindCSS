import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reducer from '../redux/reducers';

const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(logger),
    ),
);

export default store;