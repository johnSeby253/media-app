import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="" className="fw-bolder fs-4">
         <Link style={{textDecoration:'none',color:"red"}} to={'/'}>
         <i className="fa-solid fa-music fa-shake"></i>
         Media-Player
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
