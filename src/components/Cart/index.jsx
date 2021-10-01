import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../../modules/Cart/actions'

const Cart = () => {
	const dispatch = useDispatch()
	const { cart } = useSelector((state) => state)
	const sumOfValue = cart
		.map((item) => item.price)
		.reduce((accumulator, currentValue) => {
			return accumulator + currentValue
		}, 0)

	return (
		<>
			<header>
				<Link to='/'>Home</Link>
			</header>
			<div>Valor do Carrinho: R${sumOfValue}</div>
			<section>
				{cart.map((products, index) => {
					return (
						<div key={index}>
							<div>{products.name}</div>
							<div>R${products.price}</div>
							<button onClick={() => dispatch(removeFromCart(products.name))}>
								Remover item do carrinho
							</button>
						</div>
					)
				})}
			</section>
		</>
	)
}

export default Cart
