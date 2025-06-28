"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 relative" id="about">
      <Container>
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          {/* Ảnh bên trái */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last"
          >
            <div className="pt-24 lg:justify-center sm:justify-start justify-start items-start gap-2.5 flex">
              <Image
                width={200}
                height={200}
                className="rounded-xl object-cover"
                src="/images/about-1.webp"
                alt="about us"
              />
            </div>
            <Image
              width={200}
              height={200}
              className="rounded-xl object-cover"
              src="/images/about-2.webp"
              alt="about us"
            />
          </motion.div>

          {/* Nội dung bên phải */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
          >
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold leading-normal lg:text-start text-center">
                  La Sol Spa – Chăm sóc từ tâm, đẹp từ da
                </h2>
                <p className="text-gray-500 text-base leading-relaxed lg:text-start text-center">
                  Tại La Sol Spa, chúng tôi tin rằng làn da khỏe mạnh là nền
                  tảng của vẻ đẹp tự nhiên. Với không gian thư giãn đẳng cấp và
                  đội ngũ kỹ thuật viên giàu kinh nghiệm, bạn sẽ được tận hưởng
                  liệu trình chăm sóc da chuyên sâu, an toàn và hiệu quả.
                </p>
              </div>

              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold leading-normal">
                    5+
                  </h3>
                  <h6 className="text-gray-500 text-base leading-relaxed">
                    Năm kinh nghiệm
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold leading-normal">
                    300+
                  </h4>
                  <h6 className="text-gray-500 text-base leading-relaxed">
                    Khách hàng hài lòng
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold leading-normal">
                    50+
                  </h4>
                  <h6 className="text-gray-500 text-base leading-relaxed">
                    Liệu trình chuyên sâu
                  </h6>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="sm:w-fit font-bold w-full px-3.5 py-2 bg-teal-500 hover:bg-teal-800 transition-all duration-700 ease-in-out rounded-lg text-white shadow justify-center items-center flex"
            >
              Xem thêm
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
