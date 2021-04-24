import React from "react";
import PatentIcon from "./../img/patent-icon.png";

const Accomplishments = () => {
  return (
    <section id="accomplishments">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">
              Accomplishments and Certifications
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="add-top"></div>
          </div>
        </div>
        <div className="row add-bottom">
          <div className="col-10 col-md-10 col-lg-10 offset-md-1 offset-1">
            <div className="row accomplishment-badge">
              <div className="col-12 col-md-4 col-lg-4 badge-img-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/e5b7a79a-ccb0-4112-843a-35741e21ca48/embedded"
                >
                  <img
                    alt=""
                    src="https://images.credly.com/images/598f6ac6-2dbd-4394-8ae4-943b2f4c43ea/AWS-Developer-Associate-2020.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-8 col-lg-8 badge-details">
                <span className="badge-name">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.credly.com/badges/e5b7a79a-ccb0-4112-843a-35741e21ca48/embedded"
                  >
                    AWS Certified Developer – Associate
                  </a>
                </span>
                <p>Issuer: Amazon Web Services Training and Certifications</p>
              </div>
            </div>
            <div className="row accomplishment-badge">
              <div className="col-12 col-md-4 col-lg-4 badge-img-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/549783e9-a501-48fb-8eec-fe9c697cd7cb/embedded"
                >
                  <img
                    alt=""
                    src="https://images.credly.com/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-8 col-lg-8 badge-details">
                <span className="badge-name">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.credly.com/badges/e5b7a79a-ccb0-4112-843a-35741e21ca48/embedded"
                  >
                    AWS Certified Solutions Architect – Associate
                  </a>
                </span>
                <p>Issuer: Amazon Web Services Training and Certifications</p>
              </div>
            </div>
            <div className="row accomplishment-badge">
              <div className="col-12 col-md-4 col-lg-4 badge-img-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://patents.google.com/patent/US20200287914A1"
                >
                  <img alt="" src={PatentIcon} />
                </a>
              </div>
              <div className="col-12 col-md-8 col-lg-8 badge-details">
                <span className="badge-name">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://patents.google.com/patent/US20200287914A1"
                  >
                    Patent: Facet Whitelisting in Anomaly Detection
                  </a>
                </span>
                <p>Malwarebytes - Status: Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
