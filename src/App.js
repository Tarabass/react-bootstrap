import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './sass/App.scss'

function App() {
	return (
		<>
			<Navbar />
			<Container>
				<Home />
			</Container>
		</>
	)
}

export default App
