import { ServiceItem } from "@/types/services";
import { Droplets, HeartHandshake, Leaf, Smile, Sparkle } from "lucide-react";

export const testimonials = [
  {
    name: "Hoàng trung hiếu",
    content:
      "Dịch vụ tuyệt vời, nhân viên thân thiện. Da mình cải thiện rõ sau 3 buổi đầu tiên, rất hài lòng!",
    avatar: "/images/user-1.webp",
    rating: 5,
  },
  {
    name: "Nguyễn Minh Anh",
    content:
      "Không gian spa cực kỳ thư giãn, mùi hương dễ chịu. Mình đã giới thiệu thêm bạn bè tới La Sol!",
    avatar: "/images/user-2.webp",
    rating: 4,
  },
  {
    name: "Phạm Hoàng Yến",
    content:
      "Liệu trình trị mụn hiệu quả hơn mong đợi. Chuyên viên kỹ lưỡng và rất tận tâm. Cảm ơn La Sol Spa!",
    avatar: "/images/user-3.webp",
    rating: 5,
  },
  {
    name: "Trần Thu Hà",
    content:
      "Dịch vụ tuyệt vời, nhân viên thân thiện. Da mình cải thiện rõ sau 3 buổi đầu tiên, rất hài lòng!",
    avatar: "/images/user-1.webp",
    rating: 5,
  },
  {
    name: "Nguyễn Minh Anh",
    content:
      "Không gian spa cực kỳ thư giãn, mùi hương dễ chịu. Mình đã giới thiệu thêm bạn bè tới La Sol!",
    avatar: "/images/user-2.webp",
    rating: 4,
  },
  {
    name: "Phạm Hoàng Yến",
    content:
      "Liệu trình trị mụn hiệu quả hơn mong đợi. Chuyên viên kỹ lưỡng và rất tận tâm. Cảm ơn La Sol Spa!",
    avatar: "/images/user-3.webp",
    rating: 5,
  },
];

export const services: ServiceItem[] = [
  {
    title: "Chăm sóc da mặt chuyên sâu",
    img: "/images/service-1.jpg",
    desc: "Bổ sung độ ẩm chuyên sâu, phục hồi da khô và xỉn màu chỉ sau 45 phút.",
    price: 499000,
    Icon: Droplets,
  },
  {
    title: "Trị mụn chuyên nghiệp",
    img: "/images/service-2.jpg",
    desc: "Làm sạch nhân mụn, giảm viêm, ngừa thâm với sản phẩm y khoa chuẩn FDA.",
    price: 799000,
    Icon: Sparkle,
  },
  {
    title: "Massage thư giãn toàn thân",
    img: "/images/service-3.jpg",
    desc: "Giải tỏa căng thẳng cơ bắp, kích thích lưu thông máu, ngủ ngon hơn.",
    price: 109990,
    Icon: HeartHandshake,
  },
  {
    title: "Tắm trắng phi thuyền",
    desc: "Liệu trình tắm trắng kết hợp ánh sáng sinh học giúp da bật tông rõ rệt và đều màu.",
    img: "/images/service-4.jpg",
    Icon: HeartHandshake,
    price: 109990,
  },
  {
    title: "Triệt lông bằng ánh sáng IPL",
    desc: "Loại bỏ lông hiệu quả, an toàn, giúp da mịn màng lâu dài, không đau rát.",
    img: "/images/service-5.png",
    Icon: Smile,
    price: 499999,
  },
  {
    title: "Liệu trình thải độc",
    desc: "Liệu trình thải độc giúp thanh lọc làn da và cơ thể bằng các bước chăm sóc chuyên sâu kết hợp công nghệ hiện đại.",
    img: "/images/service-6.webp",
    Icon: Leaf,
    price: 499999,
  },
];

export const prices = [
  {
    plan: "Cơ bản",
    price: "499K",
    desc: "Gói phù hợp cho cá nhân",
    features: ["1 buổi tư vấn", "Lịch linh hoạt", "Hỗ trợ email"],
    isPopular: false,
  },
  {
    plan: "Chuyên nghiệp",
    price: "899K",
    desc: "Gói tốt nhất cho người dùng thường xuyên",
    features: ["3 buổi tư vấn", "Lịch ưu tiên", "Hỗ trợ Zalo, email"],
    isPopular: true,
  },
  {
    plan: "Doanh nghiệp",
    price: "1.499K",
    desc: "Giải pháp cho nhóm & công ty",
    features: ["5 buổi tư vấn", "Hỗ trợ theo nhóm", "Báo cáo cá nhân hóa"],
    isPopular: false,
  },
];

export const plans = [
  { plan: "Basic", price: "499k", desc: "Làm sạch & dưỡng ẩm" },
  { plan: "Pro", price: "799k", desc: "Trị liệu mụn chuyên sâu" },
  { plan: "Premium", price: "1.199k", desc: "Massage + Facial cao cấp" },
];
