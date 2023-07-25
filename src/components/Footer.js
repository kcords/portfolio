import React, { Component } from "react";
import Lottie from "react-lottie-player";
import linkedInIcon from "../animations/icons8-linkedin.json";
import gitHubIcon from "../animations/icons8-github.json";
class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col social-links">{networks}</div>
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
                  loop
                  animationData={linkedInIcon}
                  play
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
                  loop
                  animationData={gitHubIcon}
                  play
                  className="socicon"
                />
              </a>
            </div>
            <div className="col">
              {/* Language selection will be disabled for now */}
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
            </div>
            <div className="col">
              <div className="copyright py-4 text-center">
                <div className="container">
                  <small>
                    Copyright &copy;{" "}
                    {this.props.sharedBasicInfo
                      ? this.props.sharedBasicInfo.name
                      : "???"}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
