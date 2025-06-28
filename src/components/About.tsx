"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 relative" id="about">
      <Container className="grid gap-12 lg:grid-cols-2 grid-cols-1 items-center">
        {/* Ảnh bên trái */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full grid sm:grid-cols-2 grid-cols-1 gap-4 order-last lg:order-first"
        >
          <div className="flex justify-center sm:justify-end pt-10 sm:pt-20">
            <Image
              width={200}
              height={200}
              className="rounded-xl object-cover"
              src="/images/about-1.webp"
              alt="about us"
            />
          </div>
          <div className="flex justify-center sm:justify-start">
            <Image
              width={200}
              height={200}
              className="rounded-xl object-cover"
              src="/images/about-2.webp"
              alt="about us"
            />
          </div>
        </motion.div>

        {/* Nội dung bên phải */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-8"
        >
          <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold leading-normal">
            La Sol Spa – Chăm sóc từ tâm, đẹp từ da
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Tại La Sol Spa, chúng tôi tin rằng làn da khỏe mạnh là nền tảng của
            vẻ đẹp tự nhiên. Với không gian thư giãn đẳng cấp và đội ngũ kỹ
            thuật viên giàu kinh nghiệm, bạn sẽ được tận hưởng liệu trình chăm
            sóc da chuyên sâu, an toàn và hiệu quả.
          </p>

          {/* Thống kê */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                5+
              </h3>
              <p className="text-sm text-gray-500">Năm kinh nghiệm</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                300+
              </h3>
              <p className="text-sm text-gray-500">Khách hàng hài lòng</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                50+
              </h3>
              <p className="text-sm text-gray-500">Liệu trình chuyên sâu</p>
            </div>
          </div>

          {/* Nút xem thêm */}
          <a
            href="#"
            className="mt-4 sm:w-fit w-full px-6 py-3 rounded-lg bg-teal-500 text-white font-semibold shadow hover:bg-teal-600 transition-all text-center"
          >
            Xem thêm
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
