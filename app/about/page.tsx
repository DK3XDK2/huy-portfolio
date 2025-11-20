"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 text-slate-100">
      {}
      <h1 className="text-4xl font-bold mb-2">Giới thiệu</h1>
      <div className="h-[2px] w-28 bg-cyan-400 mb-6 rounded-full" />

      <p className="text-slate-400 mb-10">
        Thông tin mô tả về bản thân sẽ được hiển thị ở đây.
      </p>

      {}
      <div className="flex flex-col md:flex-row gap-10">
        {}
        <div className="md:w-1/3 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className="relative w-64 h-64 flex items-center justify-center"
          >
            {}
            <div
              className="
        absolute w-[270px] h-[270px] rounded-full 
        animate-spin-slow 
        opacity-60
        bg-conic-led
      "
            >
              {}
              <div className="absolute inset-0 bg-slate-900 rounded-full m-[7px]"></div>
            </div>

            {}
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-slate-900">
              <img
                src="/OIP.webp"
                alt="Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {}
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-3xl font-semibold">
            Lập trình viên Web & Ứng dụng.
          </h2>

          <p className="text-slate-300 italic">
            Giới thiệu ngắn gọn về kinh nghiệm và kỹ năng. Mình là người thích
            học hỏi, sáng tạo và luôn cố gắng hoàn thiện bản thân.
          </p>

          {}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {}
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold">Ngày sinh:</span>{" "}
                <span className="text-cyan-400">12/08/2006</span>
              </p>
              <p>
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://webictutests.netlify.app/"
                  className="text-cyan-400 hover:underline"
                >
                  https://webictutests.netlify.app
                </a>
              </p>
              <p>
                <span className="font-semibold">Số điện thoại:</span>{" "}
                <a
                  href="tel:0778366110"
                  className="text-cyan-400 hover:underline"
                >
                  0778 366 110
                </a>
              </p>
              <p>
                <span className="font-semibold">Thành phố:</span> Thái Nguyên,
                VN
              </p>
            </div>

            {}
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold">Tuổi:</span> 19
              </p>
              <p>
                <span className="font-semibold">Trình độ:</span> Sinh viên ĐH
                CNTT & TT
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:hacktyper12@gmail.com"
                  className="text-cyan-400 hover:underline"
                >
                  hacktyper12@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Nghề nghiệp:</span> Sinh viên
              </p>
            </div>
          </div>

          {}
          <div className="mt-6 space-y-2 text-sm">
            <p>
              <span className="font-semibold">Zalo:</span>{" "}
              <a
                href="https://zalo.me/0778366110"
                className="text-cyan-400 hover:underline"
              >
                Ấn vào đây
              </a>
            </p>
            <p>
              <span className="font-semibold">Facebook:</span>{" "}
              <a
                href="https://www.facebook.com/vu.q.huy.795955"
                className="text-cyan-400 hover:underline"
                target="_blank"
              >
                Ấn vào đây
              </a>
            </p>
            <p>
              <span className="font-semibold">Instagram:</span>{" "}
              <a href="#" className="text-cyan-400 hover:underline">
                Ấn vào đây
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
