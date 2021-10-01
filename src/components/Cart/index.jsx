import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeFromCart } from '../../modules/Cart/actions'
import {
	AppBar,
	Toolbar,
	MenuItem,
	IconButton,
	Badge,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Typography,
	Box,
} from '@mui/material'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HomeIcon from '@mui/icons-material/Home'

const Cart = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const { cart } = useSelector((state) => state)

	const sumOfValue = cart
		.map((item) => item.price)
		.reduce((accumulator, currentValue) => {
			return accumulator + currentValue
		}, 0)

	const sendTo = (path) => {
		history.push(path)
	}

	return (
		<>
			<header>
				<AppBar position='static'>
					<Toolbar variant='dense'>
						<MenuItem onClick={() => sendTo('/')} edge='start'>
							<IconButton>
								<HomeIcon sx={{ color: 'white' }} />
							</IconButton>
							KenzieShop
						</MenuItem>
						<MenuItem onClick={() => sendTo('/cart')} edge='end'>
							<IconButton>
								<Badge badgeContent={cart.length} color='error'>
									<ShoppingCartIcon sx={{ color: 'white' }} />
								</Badge>
							</IconButton>
						</MenuItem>
						<MenuItem>Valor do Carrinho: R${sumOfValue}</MenuItem>
					</Toolbar>
				</AppBar>
			</header>
			{
				(cart.length === 0 && (
					<Box>
						<Card>
							<CardContent>
								<Typography variant='h6'>
									Carrinho vazio, adicione algo para que ele apareça aqui
								</Typography>
							</CardContent>
						</Card>
					</Box>
				))
			}
			<Box
				sx={{
					display: 'flex',
					marginTop: 2,
					marginBottom: 2,
					flexWrap: 'wrap',
				}}
			>
				{cart.map((products, index) => {
					return (
						<Card key={index} sx={{ marginLeft: 10, marginBottom: 2 }}>
							<CardMedia
								component='img'
								height='220'
								width='120'
								image={products.image}
								alt={products.name}
							/>
							<CardContent>
								<Typography>{products.name}</Typography>
								<Typography>R${products.price}</Typography>
							</CardContent>
							<CardActions>
								<IconButton
									onClick={() => dispatch(removeFromCart(products.name))}
								>
									<RemoveShoppingCartIcon />
								</IconButton>
							</CardActions>
						</Card>
					)
				})}
			</Box>
		</>
	)
}

export default Cart
