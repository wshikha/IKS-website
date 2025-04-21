import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa6";

const Myfooter = () => {
  return (
    <div>
      <Footer className="font-bold text-white bg-neutral-800">
        <div className="w-full px-4 lg:px-24">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about">About</Footer.Link>
                <Footer.Link href="/library">Library</Footer.Link>
                <Footer.Link href="/people">People</Footer.Link>
                <Footer.Link href="/project">Project</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Events</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="download" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full px-4 py-6 bg-gray-700 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Myfooter;
