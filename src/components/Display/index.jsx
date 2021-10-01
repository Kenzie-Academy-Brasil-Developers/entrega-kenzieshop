import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../modules/Cart/actions'
import { useHistory } from 'react-router-dom'
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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HomeIcon from '@mui/icons-material/Home'

const Display = () => {
	const { products, cart } = useSelector((state) => state)
	const dispatch = useDispatch()
	const history = useHistory()
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
					</Toolbar>
				</AppBar>
			</header>
			<Box
				sx={{
					display: 'flex',
					marginTop: 2,
					marginBottom: 2,
					flexWrap: 'wrap',
				}}
			>
				{products.map((product, index) => {
					return (
						<Card
							key={index}
							sx={{ marginLeft: 10, marginBottom: 2, width: '320px' }}
						>
							<CardMedia
								component='img'
								height='220'
								width='120'
								image={product.image}
								alt={product.name}
							/>
							<CardContent>
								<Typography>{product.name}</Typography>
								<Typography>R${product.price}</Typography>
							</CardContent>
							<CardActions>
								<IconButton onClick={() => dispatch(addToCart(product))}>
									<AddShoppingCartIcon />
								</IconButton>
							</CardActions>
						</Card>
					)
				})}
			</Box>
		</>
	)
}

export default Display
