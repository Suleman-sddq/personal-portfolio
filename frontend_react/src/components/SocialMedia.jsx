import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="mailto:sulemansddq@gmail.com">
          <SiGmail />
        </a>
      </div>
      <div>
        <a href=" https://wa.me/923059865169" target="blank" rel="noreffer">
          <IoLogoWhatsapp />
        </a>
      </div>
      <div>
        <a href="https://github.com/Suleman-sddq" target="blank" rel="noreffer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
