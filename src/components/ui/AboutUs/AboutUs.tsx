import Image from "next/image";
import aboutImg from "../../../assets/images/about.png";
import iconImg1 from "../../../assets/images/icon-world.png";
import iconImg2 from "../../../assets/images/icon-walte.png";
import iconImg3 from "../../../assets/images/icon-star.png";
import iconImg4 from "../../../assets/images/icon-persentis.png";
import { Button } from "antd";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-lg p-4 w-1/3">
              <Image
                style={{
                  maxWidth: "500px",
                  height: "auto",
                }}
                src={aboutImg}
                alt="img"
              />
            </div>
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">About us</h2>

              <h2>We Are The World Best Travel Agency Company Since 2000</h2>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr{" "}
              </p>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr{" "}
              </p>
              <a href="tour-search.html" className="btn btn_theme btn_md">
                <Button type="primary">Find tours</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div> */}
      {/* about section service */}
      {/* <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-2">Section 1</h2>
                <Image src={iconImg1} alt="img" />
                <h5>
                  <a href="#!">Best services</a>
                </h5>
                <p>
                  Phaseus site amet tristique ligua donec iaculis leo sus cipit.
                  Consec tetur adipiscing elit. Incididunt ut dolore.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-2">Section 2</h2>
                <p>Content for section 2 goes here.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-2">Section 3</h2>
                <p>Content for section 3 goes here.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-2">Section 4</h2>
                <p>Content for section 4 goes here.</p>
              </div>
            </div>
          </div> */}
      {/* <div className="about_service_section">
            <div className="about_service_div">
              <div className="about_service_boxed"></div>
            </div>
            <div className="about_service_div">
              <div className="about_service_boxed"></div>
            </div>
            <div className="about_service_div">
              <div className="about_service_boxed">
                <Image src={iconImg3} alt="img" />
                <h5>
                  <a href="#!">Top facility</a>
                </h5>
                <p>
                  Phaseus site amet tristique ligua donec iaculis leo sus cipit.
                  Consec tetur adipiscing elit. Incididunt ut dolore.
                </p>
              </div>
            </div>
            <div className="about_service_div">
              <div className="about_service_boxed">
                <Image src={iconImg4} alt="img" />
                <h5>
                  <a href="#!">Awesome deals</a>
                </h5>
                <p>
                  Phaseus site amet tristique ligua donec iaculis leo sus cipit.
                  Consec tetur adipiscing elit. Incididunt ut dolore.
                </p>
              </div>
            </div>
          </div> */}
      {/* </div>
      </section> */}

      {/* <div className="bg-gray-100">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2">Section 1</h2>
              <p>Content for section 1 goes here.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2">Section 2</h2>
              <p>Content for section 2 goes here.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2">Section 3</h2>
              <p>Content for section 3 goes here.</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AboutUs;
