import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


export default function About() {
  return (
    <>
    <Navbar/>
    <section className="bg-[#1ABC9C] py-30">
      <div className="container w-[87%]  flex flex-col  justify-center items-center \">
        <h1 className="text-4xl text-white font-bold mb-3">ABOUT COMPONENT</h1>
        <div className="divider flex gap-4 justify-center items-center">
          <div className="w-24 h-1 bg-white"></div>
          <FontAwesomeIcon icon={faStar} className="text-white" />
          <div className="w-24 h-1 bg-white "></div>
        </div>
        <div className="about-pargrah grid grid-cols-12 mt-3">
          <p className="col-span-6 text-white px-4">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="col-span-6 text-white px-4">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </section>
    <Footer/>

    </>
  );
}
