"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const TABS = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

export default function Menu() {
  let [selected, setSelected] = useState(null);

  return (
    <div className="flex items-center justify-center space-x-1 py-10">
      {TABS.map(({ label, id }) => (
        <button
          key={id}
          onMouseOver={() => setSelected(id)}
          className={`${
            selected === id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {selected === id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {label}
        </button>
      ))}
    </div>
  );
}
