import { useState } from "react";
import { Link } from "react-router-dom";
import {
  InputGroup,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"; // Import your custom CSS file

function Header() {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;

    setSearchText(value);
  };

  const handleClick = () => {
    console.log("Search " + searchText);
  };

  return (
    <Navbar
      bg="transparent"
      variant="transparent"
      expand="lg"
      className="custom-navbar"
      style={{ color: "black" }}
    >
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand>
          <Link to="/">
            <img className="logo" src=".\img\logo-no-background.png"></img>
          </Link>
        </Navbar.Brand>

        {/* Menu links in the middle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link className="link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/about">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/shop">
                Shop
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Search box with search icon */}
        <Form inline>
          <InputGroup>
            <FormControl
              value={searchText ? searchText : ""}
              className="rounded-search"
              name="search"
              onChange={handleChange}
              type="text"
              placeholder="Search"
              variant="outline-primary"
            />
            <InputGroup.Text>
              <Button onClick={() => handleClick} variant="outline-primary">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;
