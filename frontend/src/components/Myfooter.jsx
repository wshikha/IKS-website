import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaDribbble } from "react-icons/fa6";
import logo from "../assets/iitk-logo.svg";
import { Link } from "react-router-dom";
const Myfooter = () => {
  return (
    <div>
      <Footer className="pt-5 font-bold text-white bg-neutral-800">
        <div className="w-full px-2 lg:px-24">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-6 md:grid-cols-4">
            <div>
              <Footer.LinkGroup col>
                <Footer.Link href="/about">About</Footer.Link>
                <Footer.Link href="/library">Library</Footer.Link>
                <Footer.Link href="/people">People</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col>
                <Footer.Link href="/events">Events</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col>
                <Footer.Link href="/subject-list">Subject List</Footer.Link>
                <Footer.Link href="#">Upcoming Events</Footer.Link>
                <Footer.Link href="/contactus">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Link to="https://www.iitk.ac.in/" className="block">
                <img
                  src={logo}
                  alt=""
                  className="w-full h-full p-2 bg-white background-cover"
                />
              </Link>
            </div>
          </div>
          <div className="w-full px-4 py-3 bg-gray-700 sm:flex sm:items-center sm:justify-between">
            <Footer.Link href="https://www.youtube.com/@iksiitk">
              youtube
            </Footer.Link>
            <div className="flex mt-3 space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://www.facebook.com/profile.php?id=61576360602186"
                icon={BsFacebook}
              />
              <Footer.Icon
                href="https://www.instagram.com/iks3.5849/?next=%2F"
                icon={BsInstagram}
              />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon
                href="https://www.youtube.com/@iksiitk"
                icon={BsYoutube}
              />
            </div>
            <div>
              <Link to="/login" className="block">
                <button className="px-5 py-2 font-semibold text-white transition-all duration-300 bg-blue-700 rounded hover:bg-black">
                  Admin
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Myfooter;
