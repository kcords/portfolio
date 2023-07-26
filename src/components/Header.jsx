import React, { Component } from "react";
import Switch from "@brookr/react-switch";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import LinkContainer from "react-router-bootstrap/LinkContainer";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = {
      checked: false,
      elementHeight: "100vh",
      headerClass: "",
      headerIconClass: ""
    };

    this.elementRef = React.createRef();

    this.intersectionObserver = new IntersectionObserver(
      this.handleIntersection,
      { root: null, rootMargin: "0px", threshold: 1 }
    );
  }

  onThemeSwitchChange = (checked) => {
    this.setState({ checked });
    this.setTheme();
  };

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  handleIntersection = ([header]) => {
    const isVisible = header.isIntersecting;

    this.setState({
      elementHeight: isVisible ? "100vh" : "50vh",
      headerClass: isVisible ? "" : "header-collapse",
      headerIconClass: isVisible ? "" : "header-icon-collapse",
    });
  };

  componentDidMount() {
    this.intersectionObserver.observe(this.elementRef.current);
  }

  componentWillUnmount() {
    this.intersectionObserver.disconnect();
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles;
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return this.titles.join(" | ");
      },
      (props, prevProp) => true
    );

    const { headerClass, headerIconClass } = this.state;

    return (
      <header className={headerClass} ref={this.elementRef}>
        <Navbar className="navbar p-3" fixed="top">
          <Nav className="fs-3 justify-content-between align-items-stretch flex-row container-fluid">
            <Col className="d-flex justify-content-start gap-4 ps-4">
              <Nav.Item>
                <LinkContainer to="/">
                  <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/about">
                  <Nav.Link eventKey="about">About</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/contact">
                  <Nav.Link eventKey="contact">Contact</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Col>
            <Col className="d-flex justify-content-end">
              <Nav.Item>
                <Switch
                  checked={this.state.checked}
                  onChange={this.onThemeSwitchChange}
                  offColor="#dfe6e9"
                  onColor="#353535"
                  className="react-switch mx-auto"
                  width={90}
                  height={40}
                  uncheckedIcon={
                    <span
                      className="iconify"
                      data-icon="twemoji:owl"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 25,
                        textAlign: "end",
                        marginLeft: "20px",
                        color: "#353239",
                      }}
                    ></span>
                  }
                  checkedIcon={
                    <span
                      className="iconify"
                      data-icon="noto-v1:sun-with-face"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 25,
                        textAlign: "end",
                        marginLeft: "10px",
                        color: "#353239",
                      }}
                    ></span>
                  }
                  id="icon-switch"
                />
              </Nav.Item>
            </Col>
          </Nav>
        </Navbar>
        <div
          id="header-hero"
          className="row aligner"
          style={{ height: "100%" }}
        >
          <div className="col-md-12">
            <div>
              <img
                className={`header-icon ${headerIconClass}`}
                src="images/computer_illustration.svg"
                alt="computer"
              />
              <br />
              <h1 className="title-styles mb-0">{name}</h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
