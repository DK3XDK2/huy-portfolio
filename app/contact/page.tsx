"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
  FaFacebook,
  FaPhone,
  FaDiscord,
  FaGithub,
  FaCommentDots,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      <motion.div
        style={{ y: y1, opacity }}
        className="fixed top-20 left-10 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="fixed bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] -z-10"
      />
      <motion.div
        style={{ y: y1, opacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
            Liên hệ
          </span>
        </motion.h1>
        <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 mx-auto rounded-full mb-6" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto"
        >
          Hãy kết nối với mình qua các kênh dưới đây
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid sm:grid-cols-2 gap-6 mb-16 max-w-4xl w-full px-6 relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          className="relative backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 shadow-lg overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-xl font-semibold text-cyan-300">Email</h3>
            </div>
            <a
              href="mailto:hacktyper12@gmail.com"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              hacktyper12@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          className="relative backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 shadow-lg overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl group-hover:bg-fuchsia-500/20 transition" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-fuchsia-500/20 text-fuchsia-400">
                <FaPhone size={24} />
              </div>
              <h3 className="text-xl font-semibold text-fuchsia-300">Điện thoại</h3>
            </div>
            <a
              href="tel:0778366110"
              className="text-slate-300 hover:text-fuchsia-400 transition"
            >
              0778 366 110
            </a>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          className="relative backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 shadow-lg overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="text-xl font-semibold text-purple-300">Địa chỉ</h3>
            </div>
            <p className="text-slate-300">Thái Nguyên, Việt Nam</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          className="relative backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 shadow-lg overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                <FaGithub size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-300">GitHub</h3>
            </div>
            <p className="text-slate-300">Sắp có...</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative flex items-center justify-center min-h-[400px]"
      >
        {icons.map((item, i) => {
          const radius = 140;
          const x = Math.cos((item.angle * Math.PI) / 180) * radius;
          const y = Math.sin((item.angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={i}
              className="absolute z-10"
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
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -10 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`
                    text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg absolute 
                    -top-10 left-1/2 -translate-x-1/2 backdrop-blur-md
                    ${item.hoverBg === "instagram" ? "bg-pink-500/90" : ""}
                  `}
                  style={{
                    backgroundColor:
                      item.hoverBg !== "instagram"
                        ? `${item.hoverBg}E6`
                        : undefined,
                  }}
                >
                  {item.label}
                </motion.div>
              )}

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag("event", "contact_icon_click", {
                      icon_name: item.label,
                      link: item.link,
                    });
                  }
                }}
              >
                <motion.div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`p-4 rounded-full border border-slate-700/50 transition
                    backdrop-blur-xl ${item.defaultBg} ${item.textColor} shadow-lg`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    ...(item.hoverBg === "instagram"
                      ? {
                          background:
                            "linear-gradient(45deg, #facc15, #ec4899, #8b5cf6)",
                          boxShadow: "0 0 30px rgba(236,72,153,0.8)",
                        }
                      : {
                          backgroundColor: item.hoverBg,
                          boxShadow: "0 0 25px rgba(255,255,255,0.3)",
                        }),
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  {item.icon}
                </motion.div>
              </a>
            </motion.div>
          );
        })}

        <motion.button
          onClick={() => {
            if (isLocked) return;
            setIsLocked(true);
            setOpen(!open);

            setTimeout(() => {
              setIsLocked(false);
            }, 600);
          }}
          className="relative z-20 w-20 h-20 rounded-full bg-gradient-to-r 
            from-fuchsia-500 via-purple-500 to-cyan-400 
            shadow-[0_0_40px_rgba(236,72,153,0.6)]
            flex items-center justify-center text-slate-950 font-bold text-xl
            backdrop-blur-xl border-2 border-white/20"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? "×" : "☰"}
        </motion.button>
      </motion.div>
    </div>
  );
}
