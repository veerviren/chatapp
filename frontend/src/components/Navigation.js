import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
function Navigation() {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e) {
    e.preventDefault();
    await logoutUser(user);
    // redirect to home page
    window.location.replace("/");
  }
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#3A1078" }}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <p
              style={{
                color: "white",
                alignContent: "center",
                blockSize: "20px",
              }}
            >
              ChatApp
            </p>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <Button
                href="/Login"
                style={{ backgroundColor: "#2F58CD", margin: "10px" }}
              >
                Login
              </Button>
            )}

            <Button
              href="/chat"
              style={{ backgroundColor: "#2F58CD", margin: "10px" }}
            >
              Chat
            </Button>
            <Button
              href="/about"
              style={{ backgroundColor: "#2F58CD", margin: "10px" }}
            >
              About us
            </Button>
            {user && (
              <NavDropdown
                style={{ backgroundColor: "#2F58CD", margin: "10px"}}
                title={
                  <>
                    <img
                      src={user.picture}
                      alt="user_image"
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                    {user.name}
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Button variant="danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
