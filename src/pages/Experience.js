import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#94C4EB">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October '23 - December '23"
          iconStyle={{ background: "#94C4EB", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UX Design at Happy-Help
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chicago, US
          </h4>
          <p>
            Utilized leadership skills to achieve a remarkable shift in the
            company's brand, orchestrating solution-driven strategies within 9
            weeks.
          </p>
          <p>
            Oversaw and coordinated the conversion of a high-fidelity prototype
            for a critical use case in a team of 6 members from diverse
            localities efficiently despite remote work challenges.
          </p>
          <p>
            Directed user research, wireframing, and Figma prototyping in
            alignment with 10 Norman heuristics, thereby enhancing 20%
            usability.
          </p>
          <p>
            Generated comprehensive reports every week resulting in prototype
            refinement through 7+ iterations, while also crafting the company
            logo to amplify brand presence and improve the user experience.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May '21 - August '21"
          iconStyle={{ background: "#94C4EB", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UX Design at Meshteck Project Consultancy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mumbai, India
          </h4>
          <p>
            Revitalized a company lacking online presence, credibility, and
            client communication by consolidating a Wix website within 3 weeks
            through competitive analysis, and providing 5 new clients while
            implementing UX enhancements for substantial growth.
          </p>
          <p>
            Executed strategic planning, conveyed concepts to stakeholders,
            managed SEO while refining content, designed a company logo, and
            supervised client interactions to attain a 15% surge in search
            visibility and brand recognition.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
