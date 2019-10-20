import React from "react";

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Skills</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="add-top"></div>
                    </div>
                </div>
                <div className="row add-bottom">
                    <div className="col-10 col-md-10 offset-md-1 offset-1">
                        <h3 className="skills-heading">Programming and Backend Web Development</h3>
                        <i className="devicon-ruby-plain colored skill-icon"></i>
                        <i className="devicon-rails-plain-wordmark colored skill-icon"></i>
                        <i className="devicon-nodejs-plain colored skill-icon"></i>
                        <i className="devicon-csharp-line colored skill-icon"></i>
                        <i className="devicon-python-plain colored skill-icon"></i>
                        <p className="text-muted">
                            <b>Ruby, Ruby on Rails, Node.js, C# and Python.</b>
                        </p>
                        <p className="skill-content">
                            I got introduced to Ruby in early 2014 and for the past 3 years, I've been using Ruby & Ruby on Rails for backend and web development, Node.js for serverless AWS Lambda functions and lately I've been working with Python for Windows and Linux applications. 
                            Before that, I used to be a C# guy and I still write any side projects using C# and .Net core if I have the chance. Also, I enjoy building things using Golang. 
                        </p>
                    </div>
                </div>
                <div className="row add-bottom">
                    <div className="col-10 col-md-10 offset-md-1 offset-1">
                        <h3 className="skills-heading">Frontend Web Development</h3>
                        <i className="devicon-html5-plain colored skill-icon"></i>
                        <i className="devicon-css3-plain colored skill-icon"></i>
                        <i className="devicon-bootstrap-plain colored skill-icon"></i>
                        <i className="devicon-react-original colored skill-icon"></i>
                        <i className="devicon-angularjs-plain colored skill-icon"></i>
                        <i className="devicon-javascript-plain colored skill-icon"></i>
                        <p className="text-muted">
                            <b>React, Angular and Bootstrap.</b>
                        </p>
                        <p className="skill-content">
                            I've been focusing on React, Angular, and Bootstrap for the past few years, but I used in the past many libraries and frameworks like jQuery, Knockoutjs, Backbone, and AngularJs. 
                            And sometimes I use pure JavaScript for simple frontend work.
                        </p>
                    </div>
                </div>
                <div className="row add-bottom">
                    <div className="col-10 col-md-10 offset-md-1 offset-1">
                        <h3 className="skills-heading">Systems, Platforms and Containers</h3>
                        <i className="devicon-linux-plain colored skill-icon"></i>
                        <i className="devicon-ubuntu-plain colored skill-icon"></i>
                        <i className="devicon-debian-plain colored skill-icon"></i>
                        <i className="devicon-windows8-original colored skill-icon"></i>
                        <i className="devicon-docker-plain colored skill-icon"></i>
                        <i className="fab fa-aws skill-icon"></i>
                        <p className="text-muted">
                            <b>Linux, Windows, AWS and Docker.</b>
                        </p>
                        <p className="skill-content">
                            For a fair amount of time, I involved with the operations/DevOps side of things besides developing. So building servers, installing operating systems from Windows to Linux and virtualization platforms, And configuring them to be production-ready was part of my job. 
                            A few years ago, I got introduced to Microservices, Docker and cloud computing services like Azure and AWS. Now I am an AWS Certified Developer and I use AWS services in my day-to-day development.
                            Also, I have a Homelab which allows me to learn about systems, applications, and different technologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;