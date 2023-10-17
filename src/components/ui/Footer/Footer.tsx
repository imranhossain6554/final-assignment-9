import React from "react";

const listStyleFooter = {
  listStyle: "none",
  color: "white",
  padding: "10px 5px",
};

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-3">Hostil</h2>
              <p>
                Hostil is one of the famous hotel service. Arround the
                bangladesh all district. We are available all time.
              </p>
            </div>

            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
              <ul style={listStyleFooter}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-3">Help Center</h2>
              <ul style={listStyleFooter}>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    Get help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <ul style={listStyleFooter}>
                <li
                  style={{
                    color: "#fff",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    Call Us: 0192932342
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    Address: Dhaka- 1202
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    Email: hostil123@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div
        style={{
          background: "gray",
          padding: "15px 0",
          textAlign: "center",
        }}
      >
        <p>
          Copyright @ 2023 All Right Reserved - <a href="/">Hostil</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
