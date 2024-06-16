import { FaAnglesRight } from "react-icons/fa6";
import { socialMedia } from "@/data"; // Assuming this imports your social media data correctly
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      {/* background grid */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Get in <span className="text-purple">Touch</span>.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me via email or connect on social media.
        </p>
        <a href="mailto:ashutosh-work@outlook.com">
          <MagicButton
            title="Start a conversation"
            icon={<FaAnglesRight />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ashutosh Anand - ashutoshanand.work
        </p>

        <div className="flex items-center md:gap-5 gap-6 sm:gap-4 mt-5 lg:gap-7">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.link} target="_blank" rel="noopener noreferrer">
              <div
                className="w-10 h-10 mg- cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
