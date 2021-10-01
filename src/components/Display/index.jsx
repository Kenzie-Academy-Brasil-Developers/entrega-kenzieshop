import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../modules/Cart/actions'
import { Link } from 'react-router-dom'

const Display = () => {
	const { products } = useSelector((state) => state)
	const dispatch = useDispatch()

	return (
		<>
			<header>
				<Link to='/cart'>Carrinho</Link>
			</header>
			<section>
				{products.map((product, index) => {
					return (
						<div key={index}>
							<div>{product.name}</div>
							<div>R${product.price}</div>
							<button onClick={() => dispatch(addToCart(product))}>
								Adicionar item no carrinho
							</button>
						</div>
					)
				})}
			</section>
		</>
	)
}

export default Display
