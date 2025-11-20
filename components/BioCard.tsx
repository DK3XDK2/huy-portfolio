"use client";

import { motion } from "framer-motion";

export default function BioCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-xl w-full 
                 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 
                 border border-slate-700 
                 rounded-3xl p-6 sm:p-8 
                 shadow-[0_25px_80px_rgba(0,0,0,0.7)]
                 overflow-hidden"
    >
      {}
      <div className="absolute -top-40 -right-40 h-96 w-96 bg-fuchsia-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative">
        <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300 mb-2">
          Web Developer
        </p>

        {}
        <h1
          className="text-3xl sm:text-4xl font-semibold mb-2 
                       bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 
                       text-transparent bg-clip-text"
        >
          Vũ Quang Huy
        </h1>

        <p className="text-sm text-slate-300 mb-4">
          Sinh ngày{" "}
          <span className="font-medium text-cyan-300">12/08/2006</span>, hiện
          đang sống tại <span className="font-medium">Thái Nguyên</span> và học
          tại
          <span className="font-medium text-cyan-300">
            {" "}
            Trường Đại học CNTT &amp; Truyền thông
          </span>
          .
        </p>

        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          Mình thích xây dựng các sản phẩm web từ giao diện cho đến logic xử lý.
          Công nghệ mình dùng linh hoạt tùy dự án, chủ yếu xoay quanh frontend
          và backend hiện đại. Mục tiêu của mình là tạo ra trải nghiệm mượt mà,
          tốc độ và trực quan.
        </p>

        {}
        <div className="space-y-4 mb-6">
          <Skill label="HTML & CSS" percent={90} />
          <Skill label="JavaScript (ES6+)" percent={75} />
          <Skill label="Typescript/Next.JS" percent={65} />
          <Skill label="Git & GitHub" percent={60} />
          <Skill label="MySQL / SQL" percent={55} />
          <Skill label="Node.js & Express" percent={50} />
        </div>

        {}
        <div className="text-xs text-slate-300 space-y-1 mb-4">
          <p>
            📞 SĐT: <span className="font-medium">0778 366 110</span>
          </p>
          <p>📍 Thái Nguyên • Sinh viên ĐH CNTT &amp; Truyền thông</p>
        </div>

        <a
          href="/contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full 
                     text-sm font-medium 
                     bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 
                     hover:opacity-90 text-slate-950 transition shadow-lg"
        >
          Liên hệ với mình
        </a>
      </div>
    </motion.div>
  );
}

function Skill({ label, percent }: { label: string; percent: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-slate-200">{label}</span>
        <span className="text-slate-400">{percent}%</span>
      </div>

      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r 
                     from-fuchsia-500 via-purple-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
