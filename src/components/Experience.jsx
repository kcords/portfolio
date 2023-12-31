import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        var skills = work.skills.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-briefcase experience-icon"></i>}
            key={i}
            visible={window.innerWidth < 500}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {`${work.company} ${work?.industry && `(${work.industry})`}`}
            </h4>
            {work?.summary && <p>{work.summary}</p>}
            {work?.bullets && (
              <ul>
                {work.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            <div style={{ textAlign: "left", marginTop: "15px" }}>{skills}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-globe-americas mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
