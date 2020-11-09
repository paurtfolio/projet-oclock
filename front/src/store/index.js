// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';
import userMiddleware from '../middleware/userMiddleware';
import articlesMiddleware from '../middleware/articlesMiddleware';
import dashboardMiddleware from '../middleware/dashboardMiddleware';
import todolistMiddleware from '../middleware/todolistMiddleware';
import trackersMiddleware from '../middleware/trackersMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    userMiddleware,
    articlesMiddleware,
    dashboardMiddleware,
    todolistMiddleware,
    trackersMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
