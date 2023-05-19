import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/tushii05/"
        target="_blank"
        rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/tushii05"
        target="_blank"
        rel="noopener noreferrer">
        <FaGithub />
      </a>
      {/* <a href="#" target="_blank"></a> */}
    </div>
  );
};

export default HeaderSocial;
