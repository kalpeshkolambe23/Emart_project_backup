import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const footerStyles = {
    backgroundColor: "#343a40",
    color: "white",
    padding: "2rem 0",
  };

  const linkStyles = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const linkHoverStyles = {
    color: "#ffc107",
  };

  const columnHeadingStyles = {
    fontWeight: "bold",
    marginBottom: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.05rem",
  };

  const socialIconStyles = {
    color: "white",
    fontSize: "1.5rem",
    marginRight: "1rem",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  const socialIconHoverStyles = {
    transform: "scale(1.2)",
    color: "#ffc107",
  };

  return (
    <footer style={footerStyles}>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-2 mb-4">
            <h5 style={columnHeadingStyles}>ABOUT</h5>
            <ul className="list-unstyled">
              {[
                "Contact Us",
                "About Us",
                "Careers",
                "Emart Stories",
                "Press",
                "Corporate Information",
              ].map((text, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="#"
                    style={linkStyles}
                    onMouseEnter={(e) =>
                      (e.target.style.color = linkHoverStyles.color)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = linkStyles.color)
                    }
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Companies Section */}
          <div className="col-md-2 mb-4">
            <h5 style={columnHeadingStyles}>GROUP COMPANIES</h5>
            <ul className="list-unstyled">
              {["Emart Group 3", "Cleartrip", "Shopsy"].map((text, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="#"
                    style={linkStyles}
                    onMouseEnter={(e) =>
                      (e.target.style.color = linkHoverStyles.color)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = linkStyles.color)
                    }
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-md-2 mb-4">
            <h5 style={columnHeadingStyles}>HELP</h5>
            <ul className="list-unstyled">
              {["Payments", "Shipping", "Cancellation & Returns", "FAQ"].map(
                (text, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                    <a
                      href="#"
                      style={linkStyles}
                      onMouseEnter={(e) =>
                        (e.target.style.color = linkHoverStyles.color)
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = linkStyles.color)
                      }
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Consumer Policy Section */}
          <div className="col-md-2 mb-4">
            <h5 style={columnHeadingStyles}>CONSUMER POLICY</h5>
            <ul className="list-unstyled">
              {[
                "Cancellation & Returns",
                "Terms Of Use",
                "Security",
                "Privacy",
                "Sitemap",
                "Grievance Redressal",
                "EPR Compliance",
              ].map((text, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="#"
                    style={linkStyles}
                    onMouseEnter={(e) =>
                      (e.target.style.color = linkHoverStyles.color)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = linkStyles.color)
                    }
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div className="col-md-4">
            <h5 style={columnHeadingStyles}>Mail Us:</h5>
            <p>
              Emart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103, Karnataka, India
            </p>
            <h5 style={columnHeadingStyles}>Registered Office Address:</h5>
            <p>
              Emart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103, Karnataka, India
              <br />
              CIN : U51109KA2012PTC066107
              <br />
              Telephone: 044-45614700 / 044-67415800
            </p>
            <div className="d-flex">
              {["facebook-f", "twitter", "youtube"].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  style={socialIconStyles}
                  onMouseEnter={(e) => {
                    e.target.style.transform = socialIconHoverStyles.transform;
                    e.target.style.color = socialIconHoverStyles.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.color = socialIconStyles.color;
                  }}
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
