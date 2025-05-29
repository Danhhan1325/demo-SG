"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import {
  FaPeopleCarry,
  FaMicrophone,
  FaCamera,
  FaUsers,
  FaHandshake,
  FaSmile,
  FaGraduationCap,
  FaCalendarAlt,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// Sample recruitment news data
const recruitmentNews = [
  {
    id: 1,
    title: "Tuyển TNV cho Đêm nhạc Yêu Là Đủ",
    date: "20/06/2025",
    summary: "Cần 20 TNV hỗ trợ tổ chức đêm nhạc gây quỹ, ưu tiên các bạn có kinh nghiệm về âm thanh, ánh sáng và tổ chức sự kiện.",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
    category: "Sự kiện",
  },
  {
    id: 2,
    title: "Chiến dịch Mắt Sáng cần TNV",
    date: "15/06/2025",
    summary: "Tuyển 15 TNV tham gia chiến dịch khám mắt miễn phí cho người cao tuổi tại các khu vực ngoại thành TP.HCM.",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
    category: "Y tế",
  },
  {
    id: 3,
    title: "TNV Media - Kể chuyện bằng hình ảnh",
    date: "10/06/2025",
    summary: "Tuyển 5 TNV cho team Media: Nhiếp ảnh, quay phim, thiết kế đồ họa. Được đào tạo kỹ năng chuyên môn.",
    image: "https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg",
    category: "Media",
  },
  {
    id: 4,
    title: "Tuyển TNV Ban Văn nghệ",
    date: "05/06/2025",
    summary: "Mở đơn tuyển TNV cho Ban Văn nghệ: Ca sĩ, nhạc công, diễn viên. Không yêu cầu kinh nghiệm, chỉ cần đam mê.",
    image: "https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg",
    category: "Văn nghệ",
  },
  {
    id: 5,
    title: "Tuyển TNV Công quả tại chùa",
    date: "01/06/2025",
    summary: "Cần TNV tham gia công quả định kỳ tại các ngôi chùa đối tác. Công việc: Phát cơm, dọn dẹp, hỗ trợ người già.",
    image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
    category: "Công quả",
  },
];

type VolunteerFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
  occupation: string;
  skills: string[];
  availability: string[];
  reason: string;
  hearAbout: string;
  agreeTerms: boolean;
};

const ITEMS_PER_PAGE = 4;

export default function VolunteerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VolunteerFormData>();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit = (data: VolunteerFormData) => {
    console.log(data);
    setIsSubmitted(true);
  };

  // Filter and paginate recruitment news
  const filteredNews = recruitmentNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const currentNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const categories = [...new Set(recruitmentNews.map(news => news.category))];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative bg-primary-800 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
            alt="Tình nguyện viên"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tin tuyển tình nguyện viên
            </h1>
            <p className="text-xl mb-6 text-neutral-200">
              Tham gia cùng Smile Gift trong các hoạt động thiện nguyện. Mỗi đóng góp của bạn đều mang ý nghĩa to lớn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-white" />
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm tin tuyển TNV..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 pl-10 pr-4 bg-white/10 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="py-3 px-4 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
              >
                <option value="">Tất cả danh mục</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment News Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {currentNews.map((news) => (
              <Card key={news.id} className="h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-primary-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {news.category}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-3 flex items-center text-sm text-neutral-500">
                    <FaCalendarAlt className="mr-1" />
                    {news.date}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                  
                  <p className="text-neutral-600 mb-4 flex-grow">
                    {news.summary}
                  </p>
                  
                  <Button 
                    variant="primary" 
                    size="sm"
                    rightIcon={<FaArrowRight />}
                  >
                    <Link href="/volunteer#registration-form">
                      Đăng ký ngay
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                disabled={currentPage === 1}
              >
                Trước
              </Button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-primary-700 text-white'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
              >
                Tiếp
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bạn sẽ nhận được gì?
            </h2>
            <p className="text-lg text-neutral-600">
              Tham gia Smile Gift không chỉ là cơ hội để đóng góp cho cộng đồng
              mà còn là hành trình phát triển bản thân đầy ý nghĩa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <FaUsers />,
                title: "Kết nối",
                description:
                  "Gặp gỡ và làm việc với những người bạn tuyệt vời có cùng đam mê và giá trị.",
              },
              {
                icon: <FaGraduationCap />,
                title: "Học hỏi",
                description:
                  "Phát triển kỹ năng tổ chức, truyền thông, teamwork và nhiều kỹ năng mềm khác.",
              },
              {
                icon: <FaHandshake />,
                title: "Trải nghiệm",
                description:
                  "Tham gia các chương trình thiện nguyện thực tế với những tác động tích cực.",
              },
              {
                icon: <FaSmile />,
                title: "Niềm vui",
                description:
                  "Cảm nhận niềm hạnh phúc khi thấy nụ cười trên gương mặt của những người nhận hỗ trợ.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-700 rounded-full mb-4 text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16" id="registration-form">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Đăng ký tham gia
            </h2>
            <p className="text-lg text-center mb-10 text-neutral-600">
              Điền thông tin bên dưới để đăng ký trở thành tình nguyện viên của
              CLB Thiện Nguyện Smile Gift.
            </p>

            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Họ <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className={`w-full px-4 py-2 border ${
                        errors.firstName
                          ? "border-accent-500"
                          : "border-neutral-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      {...register("firstName", { required: true })}
                    />
                    {errors.firstName && (
                      <span className="text-sm text-accent-500 mt-1">
                        Vui lòng nhập họ của bạn
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Tên <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className={`w-full px-4 py-2 border ${
                        errors.lastName
                          ? "border-accent-500"
                          : "border-neutral-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      {...register("lastName", { required: true })}
                    />
                    {errors.lastName && (
                      <span className="text-sm text-accent-500 mt-1">
                        Vui lòng nhập tên của bạn
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Email <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 border ${
                        errors.email
                          ? "border-accent-500"
                          : "border-neutral-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && (
                      <span className="text-sm text-accent-500 mt-1">
                        Vui lòng nhập địa chỉ email hợp lệ
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Số điện thoại <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`w-full px-4 py-2 border ${
                        errors.phone
                          ? "border-accent-500"
                          : "border-neutral-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && (
                      <span className="text-sm text-accent-500 mt-1">
                        Vui lòng nhập số điện thoại
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="birthDate"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Ngày sinh <span className="text-accent-500">*</span>
                  </label>
                  <input
                    id="birthDate"
                    type="date"
                    className={`w-full px-4 py-2 border ${
                      errors.birthDate
                        ? "border-accent-500"
                        : "border-neutral-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    {...register("birthDate", { required: true })}
                  />
                  {errors.birthDate && (
                    <span className="text-sm text-accent-500 mt-1">
                      Vui lòng chọn ngày sinh
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Địa chỉ
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    {...register("address")}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Nghề nghiệp / Trường học
                  </label>
                  <input
                    id="occupation"
                    type="text"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    {...register("occupation")}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-neutral-700 mb-3">
                    Kỹ năng và sở thích{" "}
                    <span className="text-accent-500">*</span>
                  </label>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Ca hát",
                      "Diễn xuất",
                      "MC",
                      "Nhiếp ảnh",
                      "Thiết kế",
                      "Viết lách",
                      "Tổ chức sự kiện",
                      "Kỹ năng giao tiếp",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <input
                          id={`skill-${skill}`}
                          type="checkbox"
                          value={skill}
                          className="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                          {...register("skills")}
                        />
                        <label
                          htmlFor={`skill-${skill}`}
                          className="ml-2 text-sm text-neutral-700"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-neutral-700 mb-3">
                    Thời gian có thể tham gia{" "}
                    <span className="text-accent-500">*</span>
                  </label>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Thứ 2-6 (buổi tối)",
                      "Thứ 7-CN (buổi sáng)",
                      "Thứ 7-CN (buổi chiều)",
                      "Toàn thời gian",
                      "Tùy dự án",
                    ].map((time) => (
                      <div key={time} className="flex items-center">
                        <input
                          id={`time-${time}`}
                          type="checkbox"
                          value={time}
                          className="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                          {...register("availability")}
                        />
                        <label
                          htmlFor={`time-${time}`}
                          className="ml-2 text-sm text-neutral-700"
                        >
                          {time}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Lý do bạn muốn tham gia CLB Thiện Nguyện Smile Gift{" "}
                    <span className="text-accent-500">*</span>
                  </label>
                  <textarea
                    id="reason"
                    rows={4}
                    className={`w-full px-4 py-2 border ${
                      errors.reason ? "border-accent-500" : "border-neutral-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    {...register("reason", { required: true })}
                  ></textarea>
                  {errors.reason && (
                    <span className="text-sm text-accent-500 mt-1">
                      Vui lòng chia sẻ lý do bạn muốn tham gia
                    </span>
                  )}
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="hearAbout"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Bạn biết đến CLB qua đâu?
                  </label>
                  <select
                    id="hearAbout"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    {...register("hearAbout")}
                  >
                    <option value="">-- Chọn --</option>
                    <option value="facebook">Facebook</option>
                    <option value="friend">Bạn bè giới thiệu</option>
                    <option value="event">Sự kiện</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div className="mb-8">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        type="checkbox"
                        className={`h-4 w-4 text-primary-600 border ${
                          errors.agreeTerms
                            ? "border-accent-500"
                            : "border-neutral-300"
                        } rounded focus:ring-primary-500`}
                        {...register("agreeTerms", { required: true })}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeTerms" className="text-neutral-700">
                        Tôi đồng ý với{" "}
                        <a
                          href="#"
                          className="text-primary-700 hover:underline"
                        >
                          điều khoản
                        </a>{" "}
                        và{" "}
                        <a
                          href="#"
                          className="text-primary-700 hover:underline"
                        >
                          chính sách bảo mật
                        </a>{" "}
                        của CLB <span className="text-accent-500">*</span>
                      </label>
                      {errors.agreeTerms && (
                        <p className="text-accent-500 mt-1">
                          Bạn cần đồng ý với điều khoản và chính sách
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Đăng ký tham gia
                </Button>
              </form>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-50 text-primary-700 rounded-full mb-6 text-3xl">
                  <FaSmile />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Cảm ơn bạn đã đăng ký!
                </h3>
                <p className="text-lg mb-6">
                  Thông tin đăng ký của bạn đã được ghi nhận. Chúng tôi sẽ liên
                  hệ với bạn trong thời gian sớm nhất để thông báo về các bước
                  tiếp theo.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Quay lại form đăng ký
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}