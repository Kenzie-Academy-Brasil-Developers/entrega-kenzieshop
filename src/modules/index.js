import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import productsReducer from './Products/reducer'
import cartReducer from './Cart/reducer'

const reducers = combineReducers({
	products: productsReducer,
	cart: cartReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
