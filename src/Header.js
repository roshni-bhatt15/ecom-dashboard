import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
    
    let user = null;
    const navigate = useNavigate();
    if(localStorage){
        user = JSON.parse(localStorage.getItem('user-info'));
    }
    function Logout() {
        localStorage.clear('');
        navigate('/login')
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to="/add">Add Product</Link>
                                    <Link to="/update">Update Product</Link>
                                </>
                                :
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>
                        }

                    </Nav>
                    {
                        localStorage.getItem('user-info') ?
                            <Nav>
                                <NavDropdown title={user.name}>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            : null
                    }
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
