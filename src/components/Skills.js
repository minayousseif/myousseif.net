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
            <h3 className="skills-heading">
              Programming and Backend Web Development
            </h3>
            <i className="devicon-typescript-plain colored skill-icon"></i>
            <i className="devicon-nodejs-plain colored skill-icon"></i>
            <i className="devicon-ruby-plain colored skill-icon"></i>
            <i className="devicon-rails-plain-wordmark colored skill-icon"></i>
            <i className="devicon-csharp-line colored skill-icon"></i>
            <i className="devicon-python-plain colored skill-icon"></i>
            <i className="devicon-go-line colored skill-icon"></i>
            <p className="text-muted">
              <b>
                Typescript, Node.js, Ruby, Ruby on Rails, C#, Python and Go.
              </b>
            </p>
            <p className="skill-content">
              Most of my work focused on using Typescript and Node.js for app
              development and serverless AWS Lambda functions for the past year.
              I've been writing production-grade scalable microservices
              applications using Ruby since 2014, AWS Lambdas using Node.js
              since 2016, and I wrote cloud-native applications in Python and
              C++. I use to be a C# guy before that, and I still write any side
              projects using C# and .Net core if I have the chance. Also, I
              enjoy building things using Golang.
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
              <b>React, Angular, Bootstrap and Material-UI.</b>
            </p>
            <p className="skill-content">
              I've been focusing on React, Angular, Bootstrap, and Material-UI
              for the past few years, but I used many libraries and frameworks
              like jQuery, Knockoutjs, Backbone, and AngularJs. And sometimes, I
              use pure JavaScript for simple frontend work.
            </p>
          </div>
        </div>
        <div className="row add-bottom">
          <div className="col-10 col-md-10 offset-md-1 offset-1">
            <h3 className="skills-heading">
              Systems, Platforms and Containers
            </h3>
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
              I got involved with the operations/DevOps side of things besides
              developing for a fair amount of time. Building servers, installing
              operating systems from Windows to Linux and virtualization
              platforms, and configuring them to be production-ready was part of
              my job. A few years ago, I got introduced to Microservices,
              Docker, and cloud computing services like AWS and Azure. Now I am
              an AWS certified solutions architect, and I use AWS services in my
              day-to-day development. Also, I have a Homelab that allows me to
              learn about systems, applications, and different technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
