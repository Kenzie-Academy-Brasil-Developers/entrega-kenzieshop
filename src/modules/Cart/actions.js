import { ADD_CART, REMOVE_CART } from './actionsType'

export const addToCart = (product) => ({
	type: ADD_CART,
	product,
})

export const removeFromCart = (name) => ({
	type: REMOVE_CART,
	name,
})
