import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
            <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:"none",color:'white',fontWeight:"30px"}}>
          <i class="fa-solid fa-play fa-beat me-2"></i>
            Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
