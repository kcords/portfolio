import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Lottie from "react-lottie-player";
import linkedInIcon from "../animations/icons8-linkedin.json";
import gitHubIcon from "../animations/icons8-github.json";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationsActive: false,
    };
  }

  componentDidMount() {
    this.toggleValue();
    this.interval = setInterval(this.toggleValue, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleValue = () => {
    this.setState((prevState) => ({
      animationsActive: !prevState.animationsActive,
    }));

    if (!this.state.animationsActive) {
      setTimeout(() => {
        this.setState({ animationsActive: false });
      }, 1120);
    }
  };

  render() {
    const { animationsActive } = this.state;

    return (
      <Container as={"footer"} fluid>
        <Row>
          <Col className="v-flex text-start m-3">
            <Row>
              <Col>&copy; 2023</Col>
            </Row>
            <Row>
              <Col>{this.props.sharedBasicInfo?.name || ""}</Col>
            </Row>
          </Col>
          <Col>
            <div id="socials" className="socials">
              <a
                href={
                  this.props?.sharedBasicInfo?.social?.find(
                    (network) => network.name === "linkedin"
                  )?.url
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                <Lottie
                  loop={animationsActive}
                  animationData={linkedInIcon}
                  play={animationsActive}
                  className="socicon"
                />
              </a>
              <a
                href={
                  this.props?.sharedBasicInfo?.social?.find(
                    (network) => network.name === "github"
                  )?.url
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                <Lottie
                  loop={animationsActive}
                  animationData={gitHubIcon}
                  play={animationsActive}
                  className="socicon"
                />
              </a>
            </div>
          </Col>
          <Col>
            {/* Language selection will remain disabled */}
            <div
              onClick={() =>
                this.props.applyPickedLanguage(
                  window.$primaryLanguage,
                  window.$secondaryLanguageIconId
                )
              }
              style={{ display: "none" }}
            >
              <span
                className="iconify language-icon mr-5"
                data-icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
            </div>
            <div
              onClick={() =>
                this.props.applyPickedLanguage(
                  window.$secondaryLanguage,
                  window.$primaryLanguageIconId
                )
              }
              style={{ display: "none" }}
            >
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-poland"
                data-inline="false"
                id={window.$secondaryLanguageIconId}
              ></span>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
