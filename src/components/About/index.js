import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faVuejs, faGithub } from "@fortawesome/free-brands-svg-icons";

function _renderIcon(icon) {
  if (icon === "react") return faReact;
  if (icon === "vue") return faVuejs;
  if (icon === "git") return faGithub;
}

const About = props => (
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mb-4 text-center">
          <h4 style={{ textTransform: "uppercase" }}>
            comunidade de desenvolvedores angolanos
          </h4>
        </div>

        {props.content.map(about => (
          <div key={about.key} className="col-sm-4 text-center">
            <h5>
              <FontAwesomeIcon icon={_renderIcon(about.icon)} />
            </h5>
            <h5>{about.title}</h5>
            <small>{about.shortDesc}</small>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
