import React from "react";
import { PROFESSIONAL_EXPERIENCE } from "../data/experiences";

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">PROFESSIONAL EXPERIENCE</h2>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="add-top"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="timeline">
                          {
                            PROFESSIONAL_EXPERIENCE.map((exp) => {
                              return (
                                <li key={exp.id}>
                                  <div className="timeline-date">
                                      <h4>{exp.toYearLabel}<br />{exp.fromYearLabel}</h4>
                                  </div>
                                  <div className="timeline-panel timeline-head-panel">
                                      <div className="timeline-heading">
                                          <h4>{exp.title}</h4>
                                          <h4 className="subheading">{exp.company}</h4>
                                          <h4 className="subheading">{exp.dateText}</h4>
                                      </div>
                                  </div>
                                  <div className="timeline-panel timeline-body-panel">
                                      <div className="timeline-body">
                                          <ul>
                                              {
                                                exp.responsibilities.map((resp, index) => (
                                                  <li key={`${exp.id}-${index}`}>{resp}</li>
                                                ))
                                              }
                                          </ul>
                                      </div>
                                  </div>
                              </li>
                              )
                            })
                          }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;