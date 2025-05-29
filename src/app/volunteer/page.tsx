"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCalendarAlt, FaSearch, FaArrowRight } from "react-icons/fa";
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

const ITEMS_PER_PAGE = 6;

export default function VolunteerPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Link href={`/volunteer/${news.id}`}>
                      Xem chi tiết
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
    </div>
  );
}