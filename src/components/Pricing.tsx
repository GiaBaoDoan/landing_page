"use client";

import Container from "@/components/Container";
import { prices } from "@/data/data";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-center text-4xl font-bold text-teal-700">
          Bảng giá
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Chọn gói phù hợp với nhu cầu của bạn
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {prices.map((p, index) => (
            <motion.div
              key={p.plan}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col rounded-2xl border p-8 shadow-sm transition-transform hover:scale-105 ${
                p.isPopular
                  ? "border-teal-600 bg-white shadow-lg ring-2 ring-teal-600"
                  : "border-gray-200 bg-white"
              }`}
            >
              {p.isPopular && (
                <span className="mb-4 self-center rounded-full bg-teal-600 px-4 py-1 text-sm font-semibold text-white">
                  Phổ biến nhất
                </span>
              )}
              <h3 className="text-xl font-semibold text-teal-700 text-center">
                {p.plan}
              </h3>
              <p className="mt-4 text-center text-4xl font-bold text-gray-800">
                {p.price}
              </p>
              <ul className="mt-4 flex-grow space-y-2 text-gray-600">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 rounded-lg bg-teal-600 px-4 py-2 text-center font-medium text-white hover:bg-teal-700"
              >
                Đặt lịch
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
