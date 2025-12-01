"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BioCard from "../components/BioCard";
import {
  FaArrowDown,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaPalette,
  FaServer,
} from "react-icons/fa";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center gap-16 py-20">
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

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            top: `${20 + i * 10}%`,
            left: `${10 + i * 12}%`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-8 px-6 sm:px-10 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block"
        >
          <p className="text-sm text-fuchsia-300 uppercase tracking-[0.35em] mb-2">
            Welcome to my space
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
            Xin chào,
          </span>
          <br />
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
            mình là Huy 👋
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
        >
          Web Developer thích tạo ra những giao diện đẹp, trực quan và trải
          nghiệm mượt mà. Khi cần, mình có thể linh hoạt làm cả frontend lẫn
          backend — tùy theo dự án.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {[
            { icon: <FaCode />, label: "Frontend" },
            { icon: <FaLaptopCode />, label: "Backend" },
            { icon: <FaRocket />, label: "Full Stack" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full 
                         backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 
                         text-slate-300 text-sm shadow-lg"
            >
              <span className="text-cyan-400">{skill.icon}</span>
              <span>{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-px w-40 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full" 
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-slate-400 italic max-w-xl"
        >
          "Sự chỉn chu trong từng chi tiết tạo nên sự khác biệt."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r 
                       from-fuchsia-500 via-purple-500 to-cyan-400 
                       text-slate-950 font-semibold shadow-lg hover:shadow-xl transition"
          >
            Tìm hiểu thêm
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full backdrop-blur-xl 
                       bg-slate-900/50 border border-slate-700/50 
                       text-slate-200 font-semibold shadow-lg hover:shadow-xl transition"
          >
            Liên hệ với mình
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 text-slate-400 text-sm pt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown />
          </motion.div>
          <span>Scroll để khám phá</span>
        </motion.div>
      </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end px-6 sm:px-10 relative z-10"
        >
          <BioCard />
        </motion.div>
      </section>

      <section className="relative py-20 px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                Kỹ năng & Công nghệ
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Những công nghệ và kỹ năng mình đang sử dụng và phát triển
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaCode />,
                title: "Frontend Development",
                description:
                  "Xây dựng giao diện người dùng hiện đại với React, Next.js và các framework mới nhất",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: <FaServer />,
                title: "Backend Development",
                description:
                  "Phát triển API và server-side logic với Node.js, Express và các công nghệ backend",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <FaDatabase />,
                title: "Database",
                description:
                  "Làm việc với MySQL, SQL và các hệ thống quản lý cơ sở dữ liệu",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <FaMobile />,
                title: "Responsive Design",
                description:
                  "Tạo ra các giao diện responsive, tối ưu cho mọi thiết bị",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: <FaPalette />,
                title: "UI/UX Design",
                description:
                  "Thiết kế giao diện đẹp mắt, trực quan và mang lại trải nghiệm tốt",
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: <FaRocket />,
                title: "Full Stack",
                description:
                  "Linh hoạt làm việc với cả frontend và backend để tạo ra sản phẩm hoàn chỉnh",
                color: "from-violet-500 to-purple-500",
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 shadow-lg overflow-hidden group"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white mb-4 shadow-lg`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative py-20 px-6 sm:px-10 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Mình làm gì?
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 mx-auto rounded-full mb-8" />

          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Web Development",
                description:
                  "Phát triển các ứng dụng web hiện đại, responsive và tối ưu hiệu suất",
              },
              {
                title: "UI/UX Design",
                description:
                  "Thiết kế giao diện đẹp mắt, dễ sử dụng và mang lại trải nghiệm tốt cho người dùng",
              },
              {
                title: "Full Stack Solutions",
                description:
                  "Xây dựng giải pháp hoàn chỉnh từ frontend đến backend, database và deployment",
              },
              {
                title: "Code Quality",
                description:
                  "Viết code sạch, có cấu trúc và dễ bảo trì, tuân thủ best practices",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative py-20 px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-3xl p-12 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-cyan-500/10" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                  Sẵn sàng làm việc cùng nhau?
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Hãy liên hệ với mình để thảo luận về dự án của bạn hoặc chỉ đơn
                giản là trò chuyện về công nghệ!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r 
                           from-fuchsia-500 via-purple-500 to-cyan-400 
                           text-slate-950 font-semibold shadow-lg hover:shadow-xl transition text-lg"
                >
                  Liên hệ ngay
                </motion.a>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full backdrop-blur-xl 
                           bg-slate-900/50 border border-slate-700/50 
                           text-slate-200 font-semibold shadow-lg hover:shadow-xl transition text-lg"
                >
                  Tìm hiểu thêm
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
