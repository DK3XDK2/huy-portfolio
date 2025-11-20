"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaFacebook,
  FaPhone,
  FaDiscord,
  FaGithub,
  FaCommentDots,
  FaInstagram,
} from "react-icons/fa";

export default function ContactPage() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  const icons = [
    {
      icon: <FaFacebook size={28} />,
      link: "https://www.facebook.com/vu.q.huy.795955",
      label: "Facebook",
      angle: 270,
      defaultBg: "bg-slate-900",
      hoverBg: "#3b82f6",
      textColor: "text-blue-400",
    },
    {
      icon: <FaCommentDots size={28} />,
      link: "https://zalo.me/0778366110",
      label: "Zalo",
      angle: 330,
      defaultBg: "bg-slate-900",
      hoverBg: "#22d3ee",
      textColor: "text-cyan-300",
    },
    {
      icon: <FaPhone size={28} />,
      link: "tel:0778366110",
      label: "Phone",
      angle: 30,
      defaultBg: "bg-slate-900",
      hoverBg: "#22c55e",
      textColor: "text-green-400",
    },
    {
      icon: <FaDiscord size={28} />,
      link: "https://discordapp.com/users/blackthangoodname",
      label: "Discord",
      angle: 90,
      defaultBg: "bg-slate-900",
      hoverBg: "#6366f1",
      textColor: "text-indigo-400",
    },
    {
      icon: <FaGithub size={28} />,
      link: "",
      label: "GitHub",
      angle: 150,
      defaultBg: "bg-slate-900",
      hoverBg: "#3f3f46",
      textColor: "text-fuchsia-400",
    },
    {
      icon: <FaInstagram size={28} />,
      link: "",
      label: "Instagram",
      angle: 210,
      defaultBg: "bg-slate-900",
      hoverBg: "instagram",
      textColor: "text-white",
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative">
      {}
      {icons.map((item, i) => {
        const radius = 140;
        const x = Math.cos((item.angle * Math.PI) / 180) * radius;
        const y = Math.sin((item.angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              open
                ? { opacity: 1, scale: 1, x, y }
                : { opacity: 0, scale: 0.4, x: 0, y: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              mass: 0.6,
              duration: 0.55,
              delay: open ? i * 0.06 : (icons.length - i) * 0.06,
            }}
          >
            {}
            {hovered === i && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={`
                  text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg absolute 
                  -top-10 left-1/2 -translate-x-1/2
                  ${item.hoverBg === "instagram" ? "bg-pink-500" : ""}
                `}
                style={{
                  backgroundColor:
                    item.hoverBg !== "instagram" ? item.hoverBg : undefined,
                }}
              >
                {item.label}
              </motion.div>
            )}

            {}
            <motion.div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`p-4 rounded-full border border-slate-700 transition
                ${item.defaultBg} ${item.textColor}`}
              whileHover={{
                scale: 1.15,
                ...(item.hoverBg === "instagram"
                  ? {
                      background:
                        "linear-gradient(45deg, #facc15, #ec4899, #8b5cf6)",
                      boxShadow: "0 0 25px rgba(236,72,153,0.7)",
                    }
                  : {
                      backgroundColor: item.hoverBg,
                      boxShadow: "0 0 20px rgba(255,255,255,0.25)",
                    }),
              }}
              whileTap={{
                scale: 1.15,
                ...(item.hoverBg === "instagram"
                  ? {
                      background:
                        "linear-gradient(45deg, #facc15, #ec4899, #8b5cf6)",
                      boxShadow: "0 0 25px rgba(236,72,153,0.7)",
                    }
                  : {
                      backgroundColor: item.hoverBg,
                      boxShadow: "0 0 20px rgba(255,255,255,0.25)",
                    }),
              }}
            >
              {item.icon}
            </motion.div>
          </motion.div>
        );
      })}

      {}
      <motion.button
        onClick={() => {
          if (isLocked) return;
          setIsLocked(true);

          setOpen(!open);

          setTimeout(() => {
            setIsLocked(false);
          }, 600);
        }}
        className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-r 
  from-fuchsia-500 via-purple-500 to-cyan-400 
  shadow-[0_0_30px_rgba(255,0,255,0.5)]
  flex items-center justify-center text-black font-bold text-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {open ? "×" : "Menu"}
      </motion.button>
    </div>
  );
}
