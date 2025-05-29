"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaArrowLeft } from "react-icons/fa";
import Button from "@/components/ui/Button";

// Sample recruitment news data (this should be moved to a shared data file)
const recruitmentNews = [
  {
    id: 1,
    title: "Tuyển TNV cho Đêm nhạc Yêu Là Đủ",
    date: "20/06/2025",
    summary: "Cần 20 TNV hỗ trợ tổ chức đêm nhạc gây quỹ, ưu tiên các bạn có kinh nghiệm về âm thanh, ánh sáng và tổ chức sự kiện.",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
    category: "Sự kiện",
    location: "Nhà văn hóa Thanh Niên, Q.1, TP.HCM",
    positions: 20,
    deadline: "15/07/2025",
    requirements: [
      "Có kinh nghiệm về âm thanh, ánh sáng là một lợi thế",
      "Có tinh thần trách nhiệm và làm việc nhóm tốt",
      "Có thể tham gia tập luyện và tổng duyệt",
      "Ưu tiên các bạn đã từng tham gia tổ chức sự kiện",
    ],
    responsibilities: [
      "Hỗ trợ setup và vận hành thiết bị âm thanh, ánh sáng",
      "Hỗ trợ công tác tổ chức sự kiện",
      "Hướng dẫn khách mời và điều phối chương trình",
      "Hỗ trợ các công tác hậu cần",
    ],
    benefits: [
      "Được đào tạo về kỹ năng tổ chức sự kiện",
      "Được cấp giấy chứng nhận tham gia",
      "Được tham gia miễn phí đêm nhạc",
      "Được kết nối với cộng đồng TNV",
    ],
    schedule: [
      {
        date: "10/07/2025",
        time: "18:30 - 21:30",
        activity: "Tập huấn TNV",
      },
      {
        date: "15/07/2025",
        time: "18:30 - 21:30",
        activity: "Tổng duyệt chương trình",
      },
      {
        date: "20/07/2025",
        time: "14:00 - 22:00",
        activity: "Ngày diễn ra sự kiện",
      },
    ],
  },
  // Add more detailed data for other recruitment posts
];

export default function VolunteerDetailPage({ params }: { params: { id: string } }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const id = Number(params.id);
  const post = recruitmentNews.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="pt-24 min-h-screen bg-neutral-50">
        <div className="container-custom py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Không tìm thấy tin tuyển TNV</h1>
          <p className="mb-8">Tin tuyển TNV này không tồn tại hoặc đã hết hạn.</p>
          <Button variant="primary">
            <Link href="/volunteer" className="flex items-center">
              <FaArrowLeft className="mr-2" />
              <span>Quay lại danh sách</span>
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative bg-primary-800 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <Link
            href="/volunteer"
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Quay lại danh sách
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Đang tuyển
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-6 text-white/90 mb-8">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>Hạn đăng ký: {post.deadline}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>{post.location}</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>Cần {post.positions} TNV</span>
              </div>
            </div>

            <p className="text-xl mb-8 text-white/90">{post.summary}</p>

            <Button
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-secondary-600 to-secondary-500"
            >
              <Link href="/volunteer/register">Đăng ký ngay</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Requirements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Yêu cầu</h2>
              <ul className="space-y-3">
                {post.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-700 mr-3">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Công việc</h2>
              <ul className="space-y-3">
                {post.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-700 mr-3">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Quyền lợi</h2>
              <ul className="space-y-3">
                {post.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-700 mr-3">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Lịch trình</h2>
              <div className="space-y-6">
                {post.schedule.map((item, index) => (
                  <div key={index} className="bg-neutral-50 p-6 rounded-lg">
                    <div className="font-semibold text-lg mb-2">{item.date}</div>
                    <div className="text-neutral-600">{item.time}</div>
                    <div className="text-primary-700">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Sẵn sàng tham gia?</h3>
              <p className="text-lg mb-6">
                Đăng ký ngay để trở thành một phần của chương trình!
              </p>
              <Button variant="primary" size="lg">
                <Link href="/volunteer/register">Đăng ký tham gia</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}