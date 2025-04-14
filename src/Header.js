import { Navbar,Nav,Container} from 'react-bootstrap'
function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/add">Add Product</Nav.Link>
                        <Nav.Link href="/upate">Update Product</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link to="/register">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
