"use client";

import Container from "@/components/Container";
import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <h2 className="text-center text-3xl font-bold text-teal-700">
          Liên hệ
        </h2>
        <div className="mx-auto mt-12 max-w-xl">
          <form
            action="https://formsubmit.co/YOUR_EMAIL@example.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="Đặt lịch La Sol Spa" />
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Họ tên
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 p-3"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 p-3"
                placeholder="ban@example.com"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Nội dung
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-gray-300 p-3"
                placeholder="Mình muốn đặt lịch liệu trình mụn…"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-3 text-white hover:bg-teal-700"
            >
              <Phone size={18} /> Gửi yêu cầu
            </button>
          </form>
          <div className="mt-8 flex flex-col items-center gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>0981&nbsp;234&nbsp;567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>contact@lasolspa.site</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
