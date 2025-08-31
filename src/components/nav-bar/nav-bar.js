import { Nav } from "react-bootstrap"

const NavBar = () =>{
    return(
        <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/multi-player">Multi Player</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/single-player">Single Player</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default NavBar