import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  let Links = [
    { name: "Home", link: "#landing" },
    { name: "About", link: "#about" },
    { name: "Resume", link: "#landing" },
    { name: "Technologies", link: "#technologies" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-white text-2xl cursor-pointer flex items-center">
          <a href="/" className="text-zinc-200">
            <span className="text-lime-500">V</span>edansh{" "}
            <span className="text-lime-500">R</span>ashinkar
          </a>
          <div className=" my-auto ml-auto block cursor-pointer pr-4 md:hidden">
            <div
              className="hamburger-icon"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-zinc-200"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-zinc-200 mt-1"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-zinc-200 mt-1"></span>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8 "
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-zinc-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between md:mt-1">
                {Links.map((link) => (
                  <li key={link.name} className="md:ml-8 mt-4">
                    <Link
                      to={link.link}
                      className="text-grey hover:text-lime-500 transition-colors ease-in-out"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ul className="md:flex max-md:hidden md:items-center text-slate-500 pr-2 md:pb-0 pb-12 absolute md:static left-0 w-full md:w-auto md:pl-0 pl-9 ">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8">
              <Link
                to={link.link}
                className="text-grey hover:text-lime-500 transition-colors ease-in-out"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <p className="mx-6 font-black cursor-default">{`|`}</p>
          <a href="https://github.com/Vedansh404" target="_blank">
            <IoLogoGithub
              href="https://github.com/"
              className="text-xl text-zinc-200 mr-4 cursor-pointer hover:text-lime-500 transform hover:scale-110 motion-reduce:transform-none transition-colors ease-in-out"
            />
          </a>
          <a href="https://x.com/Vedansh78135517" target="_blank">
            <FaXTwitter className="text-xl mr-4 text-zinc-200 cursor-pointer transform hover:scale-110 motion-reduce:transform-none hover:text-lime-500 transition-colors ease-in-out" />
          </a>

          <a
            href="https://www.linkedin.com/in/vedansh-rashinkar"
            target="_blank"
          >
            <FaLinkedinIn className="text-xl text-zinc-200 cursor-pointer transform hover:scale-110 motion-reduce:transform-none hover:text-lime-500 transition-colors ease-in-out" />
          </a>
        </ul>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
        
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #0e1630;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default Navbar;
