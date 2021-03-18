import styles from '../styles/Navbar.module.css'
import { Navbar, Nav,  } from 'react-bootstrap'

const Navigation = () => {
  return (
    <>
      <div >
        <Navbar  fixed="top" bg="dark" expand="lg" variant="dark">
          <Navbar.Brand  href="/">Perry Theobald Jr</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="ml-auto" >
              <Nav.Link id="link" className="m-3" id="link" href="/about">About</Nav.Link>
              <Nav.Link id="link"className="m-3" href="/projects">Projects</Nav.Link>
              <Nav.Link id="link" className="m-3" href="/contact">Contacts</Nav.Link>
              <Nav.Link id="link" className="m-3" href="/skills">Skills</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}

export default Navigation
