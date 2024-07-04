import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface SocialIconInterface {
  name: string;
  icon: IconType;
  link: string;
}

export const socialIcons: SocialIconInterface[] = [
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
    <div className="flexr-center hidden bg-red-400 text-black lg:flex gap-x-2 px-3 ">
     
    hello
    </div>
  );
};

export default SocialIcon;
