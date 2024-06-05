import { useState, useEffect,useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
      const onScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        lastScrollY.current = currentScrollY;
  
        setScrolled(currentScrollY > 50);
      };
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
        
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} style={{display: scrollDirection === "down" ? "none" : "flex"}}>
        <Container style={{height:"80px"}} >
          <Navbar.Brand href="/" style={{display:"flex",justifyContent:"center",marginLeft:"30px"}}>
            <img style={{marginTop:"-10px"}} className="logo-navbar" src={logo} alt="Logo" />
            <span style={{marginTop:"30px",marginLeft:"-20px",color:"white"}}>Clever Book</span>

          </Navbar.Brand>
 
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto" style={{color:""}}>
              <Nav.Link >Product</Nav.Link>
              <Nav.Link >Pricing</Nav.Link>
              <Nav.Link >Industry</Nav.Link>
              <Nav.Link >Customer Stories</Nav.Link>
              <Nav.Link >About</Nav.Link>
              <Nav.Link >Blog</Nav.Link>
            </Nav>            
          </Navbar.Collapse>
          <div className="btn-grp">
            <button className="btn-submit">Login</button>
            <button className="secondry-btn">Talk to Us</button>
          </div>
        </Container>
      </Navbar>
  )
}
