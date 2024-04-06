"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

// const TABS = [
//   { id: "world", label: "World" },
//   { id: "ny", label: "N.Y." },
//   { id: "business", label: "Business" },
//   { id: "arts", label: "Arts" },
//   { id: "science", label: "Science" },
// ];

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
  const pathname = usePathname() || "/";
  const [selected, setSelected] = React.useState(pathname);

  return (
    <div className="flex items-center justify-center space-x-1 py-10">
      {navItems.map(({ label, id, path }) => {
        const isActive = path === pathname;

        return (
          <Link href={path} key={id}>
            <button
              data-active={isActive}
              onMouseOver={() => setSelected(path)}
              onMouseLeave={() => setSelected(pathname)}
              className={`${
                isActive && selected === id ? "" : "hover:text-white/60"
              } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {path === selected && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {label}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
