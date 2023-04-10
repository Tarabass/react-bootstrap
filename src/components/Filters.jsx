import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Filters = () => {
	return (
		<Form>
			<Container>
				<Row className="mb-3 mt-3 justify-content-md-end">
					<FloatingLabel
						as={Col}
						xs
						lg="1"
						controlId="formGridOrder"
						label="Order"
					>
						<Form.Select defaultValue="ASC">
							<option>ASC</option>
							<option>DESC</option>
						</Form.Select>
					</FloatingLabel>
					<FloatingLabel
						as={Col}
						xs
						lg="1"
						controlId="formGridLimit"
						label="Limit"
					>
						<Form.Select defaultValue="5">
							<option>5</option>
							<option>10</option>
							<option>25</option>
						</Form.Select>
					</FloatingLabel>
					<FloatingLabel
						as={Col}
						xs
						lg="1"
						controlId="formGriformGridPagedLimit"
						label="Page"
					>
						<Form.Select defaultValue="Choose...">
							<option>Choose...</option>
							<option>...</option>
						</Form.Select>
					</FloatingLabel>
					<FloatingLabel
						as={Col}
						xs
						lg="2"
						controlId="formGridBreed"
						label="Breed"
					>
						<Form.Select defaultValue="Choose...">
							<option>Choose...</option>
							<option>...</option>
						</Form.Select>
					</FloatingLabel>
				</Row>
			</Container>
		</Form>
	)
}

export default Filters
