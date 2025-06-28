// components/TestimonialsCarousel.tsx – cảm nhận khách hàng dạng carousel + xếp hạng sao
"use client";

import Image from "next/image";
import Container from "@/components/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { testimonials } from "@/data/data";

export default function TestimonialsCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <section id="testimonials" className="bg-teal-50 py-10">
      <Container>
        <h2 className="text-center text-3xl font-bold text-teal-700">
          Khách hàng nói gì?
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 32 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            0: { slidesPerView: 1, spaceBetween: 16 },
          }}
          className="mt-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <blockquote className="rounded-lg shadow bg-white p-8  text-center">
                <p className="italic text-gray-700">“{t.content}”</p>

                <div className="flex justify-center gap-0.5 mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < t.rating ? "text-yellow-400" : "text-gray-300"
                      }
                      fill={i < t.rating ? "#facc15" : "none"}
                    />
                  ))}
                </div>

                <footer className="mt-6 flex flex-col items-center">
                  <Image
                    src={t.avatar}
                    width={100}
                    height={100}
                    alt={`Avatar ${t.name}`}
                    className="rounded-full w-14 h-14 object-cover"
                  />
                  <cite className="mt-2 font-semibold text-gray-800">
                    {t.name}
                  </cite>
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex justify-center gap-6">
          <button
            ref={prevRef}
            className="group rounded-full cursor-pointer bg-white/80 backdrop-blur p-3 shadow hover:bg-teal-100 transition"
            aria-label="Trước"
          >
            <ChevronLeft className="h-5 w-5 text-teal-600 group-hover:-translate-x-1 transition" />
          </button>
          <button
            ref={nextRef}
            className="group rounded-full cursor-pointer bg-white/80 backdrop-blur p-3 shadow hover:bg-teal-100 transition"
            aria-label="Sau"
          >
            <ChevronRight className="h-5 w-5 text-teal-600 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </Container>
    </section>
  );
}
