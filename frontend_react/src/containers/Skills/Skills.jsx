import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapers";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text" id="Skills">
        Skills & Experience
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((exp, index) => (
            <motion.div className="app__skills-exp-item">
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p
                        className="p-text"
                        data-tooltip-id="skill-tooltip"
                        data-tooltip-content={work.desc}
                      >
                        {work.company}
                      </p>
                    </motion.div>

                    <ReactTooltip
                      id="skill-tooltip"
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      key={work.name + index}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
