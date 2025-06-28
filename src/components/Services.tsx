// components/Services.tsx – phiên bản nâng cấp đẹp + rõ nội dung
"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import { services } from "@/data/data";

export default function Services() {
  return (
    <section id="services" className="bg-teal-50 py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold text-teal-700">
          Dịch vụ của chúng tôi
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Một làn da sáng khỏe – một tinh thần nhẹ tênh. Hãy để chúng tôi chăm
          sóc bạn – bằng sự ân cần trong từng bước nhỏ.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, img, desc, price, Icon }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl"
            >
              {/* khung ảnh */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* overlay mờ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* giá */}
                <span className="absolute bottom-3 right-3 rounded-lg bg-teal-600/90 px-3 py-1 text-xs font-medium text-white">
                  {price.toLocaleString("vi-VN") + " ₫"}
                </span>
              </div>

              {/* nội dung */}
              <div className="p-6 flex flex-col items-center text-center">
                <Icon className="mb-3 h-8 w-8 text-teal-600" />
                <h3 className="text-xl font-semibold text-teal-700">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm min-h-[60px]">
                  {desc}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-block rounded-full bg-teal-500 px-4 py-2 font-medium text-white transition-colors hover:bg-teal-600"
                >
                  Tư vấn ngay
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
