import Home from './pages/home'
import CartPage from './pages/cart'
import { Route, Switch } from 'react-router'
import './App.css'

function App() {
	return (
		<main className='App'>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/cart'>
					<CartPage />
				</Route>
			</Switch>
		</main>
	)
}

export default App
