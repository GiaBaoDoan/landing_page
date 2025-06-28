"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Tôi có thể hủy lịch đã đặt không?",
    answer:
      "Có, bạn hoàn toàn có thể hủy lịch đã đặt. Tuy nhiên, để được hoàn tiền 100%, bạn cần thực hiện việc hủy lịch ít nhất 24 giờ trước thời gian hẹn đã chọn. Việc hủy sau thời gian này có thể không được hoàn phí, tùy vào từng trường hợp cụ thể. Hãy liên hệ với chúng tôi qua Zalo hoặc email để được hỗ trợ nhanh chóng.",
  },
  {
    question: "Tôi có thể đổi lịch hẹn không?",
    answer:
      "Hoàn toàn được! Chúng tôi hiểu rằng đôi khi có những thay đổi đột xuất. Bạn chỉ cần thông báo cho chúng tôi ít nhất 12 tiếng trước khi lịch hẹn bắt đầu. Chúng tôi sẽ sắp xếp lại thời gian phù hợp nhất cho bạn mà không mất thêm phí. Liên hệ qua Zalo hoặc hệ thống hỗ trợ để điều chỉnh.",
  },
  {
    question: "Gói dịch vụ có thời hạn sử dụng không?",
    answer:
      "Có. Mỗi gói dịch vụ sẽ có thời hạn hiệu lực là 30 ngày kể từ ngày đăng ký thanh toán thành công. Trong khoảng thời gian này, bạn có thể sử dụng dịch vụ linh hoạt. Nếu cần gia hạn thêm hoặc chuyển gói, bạn có thể liên hệ bộ phận CSKH để được hỗ trợ nhanh chóng và tiện lợi.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-700">
          Câu hỏi thường gặp
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-teal-600 font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`mt-4 text-gray-600 text-base transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "opacity-100 max-h-screen"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
