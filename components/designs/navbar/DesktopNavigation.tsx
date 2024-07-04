import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  aboutNavigation,
  aboutNavigationInterface,
  servicesNavigation,
} from "@/public";

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
      className="fixed top-[70px] left-0 w-full bg-white/20 backdrop-blur-md shadow-lg z-30"
      onMouseEnter={() => setHovered(showDropdown)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="max-w-7xl mx-auto py-8 px-4 min-h-[400px]">
        {showDropdown === "services" && (
          <div className="grid grid-cols-3 gap-8">
            {servicesNavigation.map(
              ({ id, image, path, title }: servicesNavigation) => (
                <div
                  key={id}
                  className="flex items-start space-x-4 cursor-pointer hover:bg-blue-100/50 p-4 rounded-lg transition-shadow duration-200 shadow-sm hover:shadow-md"
                  onClick={() => handleNavigation(path)}
                >
                  <Image
                    src={image}
                    alt={title}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">
                      {title}
                    </h4>
                    <p className="text-gray-600">{title}</p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
        {showDropdown === "about" && (
          <div className="grid grid-cols-3 gap-8">
            {aboutNavigation.map(
              ({
                description,
                id,
                label,
                name,
                path,
              }: aboutNavigationInterface) => (
                <div
                  key={id}
                  className="cursor-pointer hover:bg-blue-100/50 p-4 rounded-lg transition-shadow duration-200 shadow-sm hover:shadow-md"
                  onClick={() => handleNavigation(path)}
                >
                  <div className="mb-4">
                    <Image
                      src={label}
                      alt={name}
                      height={80}
                      width={80}
                      className="rounded-lg"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    {name}
                  </h4>
                  <p className="text-gray-600">{description}</p>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DesktopNavigationDropdown;
