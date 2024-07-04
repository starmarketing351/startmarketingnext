import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface SocialIcon {
  name: string;
  icon: IconType;
  link: string;
}

const socialIcons: SocialIcon[] = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com",
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: "https://www.whatsapp.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com",
  },

  {
    name: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com",
  },
];

const SocialIcon = () => {
  return (
    <div className="flexr-center hidden lg:flex gap-x-2 px-3 ">
      {socialIcons.map((socialIcon) => {
        const Icon = socialIcon.icon
        return (
            <a
            key={socialIcon.name}
            href={socialIcon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="" fill="black" size={22} startOffset="2"   />
          </a>
        )
      })}
    </div>
  );
};

export default SocialIcon;
