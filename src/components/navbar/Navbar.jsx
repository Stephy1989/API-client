import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navigationbar = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://ih1.redbubble.net/image.1525565696.5435/st,small,507x507-pad,600x600,f8f8f8.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            My Simpsons API
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export { Navigationbar }

//