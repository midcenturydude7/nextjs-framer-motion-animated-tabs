"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/resources",
    label: "Resources",
  },
  {
    path: "/contact",
    label: "Contact",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default function Menu() {
  const pathname = usePathname();
  const [selected, setSelected] = React.useState(pathname);

  return (
    <nav className="flex items-center justify-center space-x-1 py-10">
      {navItems.map(({ label, id, path }) => {
        const isActive = path === pathname;

        return (
          <Link href={path} key={id}>
            <button
              data-active={isActive}
              onMouseOver={() => setSelected(path)}
              onMouseLeave={() => setSelected(pathname)}
              className={`${
                isActive && selected === id ? "" : "hover:text-white/80"
              } text-md relative rounded-full px-3 py-[.7rem] font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {path === selected && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white/15 mix-blend-difference"
                  style={{ borderRadius: "8px" }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.9 }}
                />
              )}
              {label}
            </button>
          </Link>
        );
      })}
    </nav>
  );
}
