import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <>
      <div>
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand href="/">Perry Theobald Jr</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/contact">Contacts</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}

export default Navigation
