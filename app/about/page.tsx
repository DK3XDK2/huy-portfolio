"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaGlobe,
} from "react-icons/fa";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 0.8, 0.6]
  );

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="fixed top-20 left-10 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        style={{ y: y2 }}
        className="fixed bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] -z-10"
      />
      <motion.div
        style={{ y: y1, opacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] -z-10"
      />

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                Giới thiệu
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Khám phá hành trình và đam mê của một Web Developer trẻ
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative w-72 h-72 flex items-center justify-center group"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] rounded-full opacity-70 bg-conic-led"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-full m-[8px]" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
              >
                <img
                  src="/OIP.webp"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </motion.div>

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${15 + i * 12}%`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />
              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                  Lập trình viên Web & Ứng dụng
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Mình là người thích học hỏi, sáng tạo và luôn cố gắng hoàn
                  thiện bản thân. Đam mê với việc xây dựng những sản phẩm web
                  hiện đại, tối ưu và mang lại trải nghiệm tuyệt vời cho người
                  dùng.
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-6 shadow-lg overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition" />
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300 flex items-center gap-2">
                    <FaCode className="text-cyan-400" />
                    Thông tin cá nhân
                  </h3>
                  <div className="space-y-3 text-sm">
                    <InfoItem label="Ngày sinh" value="1x/0x/200x" />
                    <InfoItem label="Tuổi" value="1X" />
                    <InfoItem
                      label="Thành phố"
                      value="Thái Nguyên, VN"
                      icon={<FaMapMarkerAlt />}
                    />
                    <InfoItem label="Nghề nghiệp" value="Sinh viên" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-6 shadow-lg overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl group-hover:bg-fuchsia-500/20 transition" />
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-300 flex items-center gap-2">
                    <FaEnvelope className="text-fuchsia-400" />
                    Liên hệ
                  </h3>
                  <div className="space-y-3 text-sm">
                    <InfoItem
                      label="Email"
                      value="hacktyper12@gmail.com"
                      href="mailto:hacktyper12@gmail.com"
                      icon={<FaEnvelope />}
                    />
                    <InfoItem
                      label="Số điện thoại"
                      value="0778 366 110"
                      href="tel:0778366110"
                      icon={<FaPhone />}
                    />
                    <InfoItem
                      label="Website"
                      value="webictutests.netlify.app"
                      href="https://webictutests.netlify.app/"
                      icon={<FaGlobe />}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-6 shadow-lg overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition" />
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4 text-purple-300 flex items-center gap-2">
                  <FaGraduationCap className="text-purple-400" />
                  Học vấn
                </h3>
                <p className="text-slate-300">
                  <span className="font-semibold text-purple-300">
                    Trình độ:
                  </span>{" "}
                  Sinh viên ĐH CNTT & TT
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-6 shadow-lg overflow-hidden"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-200">
                Mạng xã hội
              </h3>
              <div className="flex flex-wrap gap-4">
                <SocialLink
                  href="/contact"
                  label="Zalo"
                  color="from-blue-500 to-blue-600"
                />
                <SocialLink
                  href="/contact"
                  label="Facebook"
                  color="from-blue-600 to-blue-700"
                />
                <SocialLink
                  href="/contact"
                  label="Instagram"
                  color="from-pink-500 to-purple-600"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function InfoItem({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
}) {
  const content = (
    <div className="flex items-center justify-between group/item">
      <span className="font-semibold text-slate-400">{label}:</span>
      <span
        className={`flex items-center gap-2 ${
          href
            ? "text-cyan-400 hover:text-cyan-300 cursor-pointer transition"
            : "text-slate-200"
        }`}
      >
        {icon && <span className="text-xs">{icon}</span>}
        <span>{value}</span>
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:translate-x-1 transition-transform">
        {content}
      </a>
    );
  }

  return content;
}

function SocialLink({
  href,
  label,
  color,
}: {
  href: string;
  label: string;
  color: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-lg bg-gradient-to-r ${color} text-white font-medium shadow-lg hover:shadow-xl transition-all`}
    >
      {label}
    </motion.a>
  );
}
