"use client";

import BioCard from "../components/BioCard";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen flex flex-col md:flex-row items-center gap-16 py-20
                 bg-gradient-to-br from-slate-900 via-slate-950 to-black
                 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
    >
      {}
      <div className="flex-1 space-y-6 px-10">
        <p className="text-sm text-fuchsia-300 uppercase tracking-[0.35em]">
          Welcome to my space
        </p>

        <h2
          className="text-4xl sm:text-5xl font-extrabold 
                     bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400
                     bg-clip-text text-transparent"
        >
          Xin chào, mình là Huy 👋
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
          Web Developer thích tạo ra những giao diện đẹp, trực quan và trải
          nghiệm mượt mà. Khi cần, mình có thể linh hoạt làm cả frontend lẫn
          backend — tùy theo dự án.
        </p>

        <div className="h-px w-40 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full" />

        <p className="text-xs text-slate-400 italic">
          “Sự chỉn chu trong từng chi tiết tạo nên sự khác biệt.”
        </p>
      </div>

      {}
      <div className="flex-1 flex justify-center md:justify-end px-10">
        <BioCard />
      </div>
    </div>
  );
}
