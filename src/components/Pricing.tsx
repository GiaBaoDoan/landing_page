"use client";

import Container from "@/components/Container";
import { plans } from "@/data/data";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <Container>
        <h2 className="text-center text-3xl font-bold text-teal-700">
          Bảng giá
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <motion.div
              key={p.plan}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-teal-700">{p.plan}</h3>
              <p className="mt-4 text-4xl font-bold text-gray-800">{p.price}</p>
              <p className="mt-2 flex-grow text-gray-600">{p.desc}</p>
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
