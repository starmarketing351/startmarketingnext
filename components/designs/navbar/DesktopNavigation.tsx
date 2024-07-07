import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  aboutNavigation,
  aboutNavigationInterface,
  servicesNavigation,
} from "@/public";
import Link from "next/link";

interface DesktopNavigationDropdownProps {
  hovered: string | null;
  setHovered: React.Dispatch<React.SetStateAction<string | null>>;
  handleNavigation: (path: string) => void;
}

const DesktopNavigationDropdown: React.FC<DesktopNavigationDropdownProps> = ({
  hovered,
  setHovered,
  handleNavigation,
}) => {
  const [showDropdown, setShowDropdown] = useState<string | null>(hovered);

  useEffect(() => {
    if (hovered) {
      setShowDropdown(hovered);
    } else {
      const timeout = setTimeout(() => setShowDropdown(null), 200); // 200ms delay
      return () => clearTimeout(timeout);
    }
  }, [hovered]);

  if (!showDropdown) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 1 } }}
      transition={{ duration: 0.3 }}
      className="fixed top-[70px] left-0 w-full bg-black/20 backdrop-blur-md shadow-lg z-30"
      onMouseEnter={() => setHovered(showDropdown)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="max-w-7xl mx-auto py-8 px-4 min-h-[400px]">
        {showDropdown === "services" && (
          <div className="grid grid-cols-3 gap-8">
            {servicesNavigation.map(
              ({ id, image, path, title }: servicesNavigation) => (
                <div className="flex flex-col gap-y-2 hover:bg-blue-400/20 p-2 rounded-lg w-full items-center justify-center" key={id} onClick={() => handleNavigation(path)}>
                  <div className=" bg-black/20 flex items-center justify-center rounded-full size-28">
                    <Image
                      src={image}
                      alt={title}
                      width={80}
                      height={80}
                      className="size-4/5 rounded-full"
                    />
                  </div>
                  <div className="w-full text-center">
                    <h4 className="text-xl font-bold mb-2 text-white">
                      {title}
                    </h4>
                    <p className="text-white">{title}</p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
        {showDropdown === "about" && (
          <div className="flex flex-col">
            <div className="grid grid-cols-3 gap-8">
              {aboutNavigation.map(
                ({
                  description,
                  id,
                  label: Icon,
                  name,
                  path,
                }: aboutNavigationInterface) => (
                  <div
                    key={id}
                    className="cursor-pointer hover:bg-blue-100/50 p-4 rounded-lg transition-shadow duration-200 shadow-sm hover:shadow-md"
                    onClick={() => handleNavigation(path)}
                  >
                    <div className="mb-4 w-full justify-center items-center flex">
                      <Icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="flex items-center justify-center w-full flex-col">
                      <h4 className="text-xl font-bold mb-2 textwhite">
                        {name}
                      </h4>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="w-full flex items-start justify-center mx-auto">
              <Link
                className="max-w-32 bg-black flex items-center gap-x-2"
                href="/about"
              >
                About Page
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DesktopNavigationDropdown;
