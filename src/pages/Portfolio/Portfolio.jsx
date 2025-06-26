import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Portfolio() {
  const [data] = useState([
    { img: port1, id: "img1" },
    { img: port2, id: "img2" },
    { img: port3, id: "img3" },
    { img: port1, id: "img4" },
    { img: port2, id: "img5" },
    { img: port3, id: "img6" },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navbar />
      <section className="portfolio py-8 text-center">
        <h1 className="text-[#2C3E50] text-4xl mb-4 font-bold">
          PORTFOLIO COMPONENT
        </h1>
        <div className="divider flex gap-4 justify-center items-center mb-3">
          <div className="w-24 h-1 bg-[#2C3E50]"></div>
          <FontAwesomeIcon icon={faStar} className="text-[#2C3E50]" />
          <div className="w-24 h-1 bg-[#2C3E50] "></div>
        </div>
        <div className="container w-[87%]  flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {data.map((item) => (
            <>
              <div
                key={item.id}
                className="items group relative"
                onClick={() => setSelectedImage(item.img)}
              >
                <img src={item.img} alt="" className="w-100 rounded-xl" />
                <div className="plus absolute top-0 left-0 w-full bg-[#1ABC9C] flex justify-center items-center h-full opacity-0 group-hover:opacity-100 rounded-xl group-hover:transition duration-500 group-hover:cursor-pointer  ">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="font-extrabold text-8xl text-white  "
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>

      // modal //
      {selectedImage && (
        <div
          className="fixed inset-0 bg-blue-600/20 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[80vh]"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

{
  /* {data.map((item) => (
            <>
              <div
                className="modal fade bg-blue-500/15"
                id={item.id}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog ">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                        <img src={item.img} className="w-100" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))} */
}
