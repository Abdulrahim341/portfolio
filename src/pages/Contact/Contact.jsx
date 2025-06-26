import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="py-8">
        <h1 className="text-[#2C3E50] text-4xl mb-4 font-bold text-center">
          CONTACT SECTION
        </h1>
        <div className="divider flex gap-4 justify-center items-center mb-3">
          <div className="w-24 h-1 bg-[#2C3E50]"></div>
          <FontAwesomeIcon icon={faStar} className="text-[#2C3E50]" />
          <div className="w-24 h-1 bg-[#2C3E50] "></div>
        </div>
        <div className="container w-[87%] flex flex-col justify-center items-center">
          <form action="" className="w-1/2 mt-16 ">
            <div className="relative mb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="userName"
                className="form-control mt-10 peer"
              />
              <label
                htmlFor="name"
                className="text-green-600 opacity-0   peer-[&:not(:placeholder-shown)]:opacity-100   peer-[&:not(:placeholder-shown)]:top-0   transition-all duration-700 absolute left-0 top-2"
              >
                userName :
              </label>
            </div>

            <div className="relative mb-5">
              <input
                type="text"
                name="age"
                id="age"
                placeholder="usrAge"
                className="form-control mt-10 peer"
              />
              <label
                htmlFor="age"
                className="text-green-600 opacity-0   peer-[&:not(:placeholder-shown)]:opacity-100   peer-[&:not(:placeholder-shown)]:top-0   transition-all duration-700 absolute left-0 top-2"
              >
                userAge :
              </label>
            </div>

            <div className="relative mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="userEmail"
                className="form-control mt-10 peer"
              />
              <label
                htmlFor="email"
                className="text-green-600 opacity-0   peer-[&:not(:placeholder-shown)]:opacity-100   peer-[&:not(:placeholder-shown)]:top-0   transition-all duration-700 absolute left-0 top-2"
              >
                userEmail :
              </label>
            </div>

            <div className="relative mb-5">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="userPassword"
                className="form-control mt-10 peer"
              />
              <label
                htmlFor="password"
                className="text-green-600 opacity-0   peer-[&:not(:placeholder-shown)]:opacity-100   peer-[&:not(:placeholder-shown)]:top-0   transition-all duration-700 absolute left-0 top-2"
              >
                userPassword :
              </label>
            </div>
          <div className="flex  justify-start items-start">
           <button className="btn ">Send Message</button> 
          </div>
          </form>

        </div>
      </section>
      <Footer />
    </>
  );
}
