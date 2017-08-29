import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer';

const middlewares = [

]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

function configureStore(initialState, extension) {
  return createStoreWithMiddleware(rootReducer, initialState, extension)
}

export default configureStore
