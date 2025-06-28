// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ChevronDown, MapPin, Phone, Clock } from "lucide-react";
import Video from "@/components/Video";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen  w-full overflow-hidden">
      <Video />

      {/* === Content === */}
      <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          Chăm sóc da với sự tận tâm
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-xl text-sm sm:text-lg md:text-xl text-white/90"
        >
          Ẩn mình giữa phố thị phồn hoa, La Sol Spa là một người bạn cũng là một
          góc nhỏ xinh cho riêng bạn - nơi mọi lo toan phải nhường chỗ cho tâm
          hồn thư thái. Hãy đến để được chăm sóc và ở lại vì cảm giác được yêu
          chiều.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          href="#contact"
          className="mt-10 inline-block rounded-full bg-teal-500 px-8 py-3 text-lg font-semibold shadow-md transition-colors hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          Đặt lịch hẹn ngay
        </motion.a>

        {/* === Contact info row === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/90"
        >
          <div className="flex items-center gap-2">
            <MapPin size={18} /> 123 Đường Spa, Q.1, TP.HCM
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} /> 0981 234 567
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} /> 09:00 – 20:00 (T2 – CN)
          </div>
        </motion.div>

        {/* === Scroll down indicator === */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/20"
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </motion.div>
      </Container>
    </section>
  );
}
