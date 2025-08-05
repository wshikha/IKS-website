import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Myfooter = () => {
  return (
    <Footer className="pt-5 font-bold text-white bg-neutral-800">
      <div className="w-full px-4 sm:px-8 lg:px-24">
        <div className="grid gap-8 py-6 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Footer.LinkGroup col>
              <Footer.Link href="/about" className="text-white text-md">
                About
              </Footer.Link>
              <Footer.Link href="/library" className="text-white text-md">
                Library
              </Footer.Link>
              <Footer.Link href="/people" className="text-white text-md">
                People
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.LinkGroup col>
              <Footer.Link href="/activity" className="text-white text-md">
                Activity
              </Footer.Link>
              <Footer.Link href="/subject-list" className="text-white text-md">
                Subject List
              </Footer.Link>
              <Footer.Link href="/contactus" className="text-white text-md">
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="hidden md:block" />
          <div className="flex items-center justify-center md:justify-end">
            <Link
              to="https://www.iitk.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="iitk-logo.svg"
                alt="IIT Kanpur Logo"
                className="w-full h-auto p-2 bg-white rounded-md height-full rounded-xl"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 px-4 py-4 text-center bg-gray-300 sm:flex-row sm:text-left">
          <Footer.Link className="text-black">Copyright © 2025</Footer.Link>

          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            <Footer.Icon
              href="https://www.facebook.com/iksiitk/"
              icon={BsFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-[#1877F2] hover:text-[#0e63c7]"
            />
            <Footer.Icon
              href="https://www.instagram.com/iksiitk/"
              icon={BsInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-[#E4405F] hover:text-[#bc2a8d]"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="text-4xl text-[#1DA1F2] hover:text-[#0d8ddb]"
            />
            <Footer.Icon
              href="https://www.youtube.com/@iksiitk"
              icon={BsYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-[#FF0000] hover:text-[#cc0000]"
            />
          </div>

          <Link to="/login">
            <button className="px-4 py-2 mt-2 font-semibold text-white transition-all duration-300 bg-blue-700 rounded sm:mt-0 hover:bg-black">
              Admin
            </button>
          </Link>
        </div>
      </div>
    </Footer>
  );
};

export default Myfooter;
