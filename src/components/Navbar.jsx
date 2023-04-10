import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
	return (
		<Navbar as={Container} bg="light" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand href="#home">Catmandu</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="justify-content-end"
				>
					<Nav>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#upload">Upload</Nav.Link>
						<Nav.Link href="#starred">Starred</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar
