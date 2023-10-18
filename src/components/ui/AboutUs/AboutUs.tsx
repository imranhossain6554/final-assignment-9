import Image from "next/image";
import aboutImg from "../../../assets/images/about.png";
import { Button } from "antd";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            <div className="bg-white rounded-lg p-4 w-full sm:block hidden">
              <Image
                style={{}}
                src={aboutImg}
                alt="img"
                className="md:w-80 lg:w-full"
              />
            </div>
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-400">
                About us
              </h2>

              <div className="py-5">
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
              </div>
              <a href="tour-search.html" className="btn btn_theme btn_md">
                <Button type="primary">Find tours</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
