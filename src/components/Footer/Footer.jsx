import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#2C3E50] ">
        <div className="container w-[87%] grid grid-cols-12  py-20">
          <div className="location col-span-4 text-center text-white">
            <h2 className="font-semibold text-2xl mb-2">LOCATION</h2>
            <span>2215 John Daniel Drive</span>
            <h4 className="mt-2">Clark, MO 65243</h4>
          </div>
          <div className="social col-span-4 text-center text-white">
            <h2 className="font-semibold text-2xl">AROUND THE WEB</h2>
            <div className="links ">
              <ul className="flex gap-5 justify-center items-center mt-4 *:size-9  *:border-1 *:rounded-3xl *:flex *:justify-center *:items-center ">
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe} />
                </li>
              </ul>
            </div>
          </div>
          <div className="free col-span-4 text-center text-white px-2">
            <h2 className="font-semibold text-2xl mb-2" >ABOUT FREELANCER</h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        <div className="copy text-center text-white py-6 bg-[#1A252F]">
            <p className="">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
