import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Rocket, Atom, Code, Database } from 'lucide-react';

// Import Swiper styles
// import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CourseSwiper() {
  const courses = [
    { icon: Rocket, title: 'Starter (12-16)', code: 'ST-652', color: 'bg-sky-500' },
    { icon: Rocket, title: 'Starter (12-16)', code: 'ST-654', color: 'bg-blue-500' },
    { icon: Atom, title: 'Programming (Front-end)', code: 'FRONT-826', color: 'bg-indigo-500' },
    { icon: Code, title: 'Programming (Back-end)', code: 'BACK-728', color: 'bg-purple-500' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-[#1E3A8A] flex items-center gap-2">
        <span className="text-4xl">💻</span> Курсы
      </h1>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        className="mb-8"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <CourseCard {...course} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"><ChevronLeft className="text-gray-800" /></div>
        <div className="swiper-button-next"><ChevronRight className="text-gray-800" /></div>
      </Swiper>
    </div>
  );
}

function CourseCard({ icon: Icon, title, code, color }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className={`${color} p-6 flex justify-center items-center`}>
        <Icon className="w-16 h-16 text-white" />
      </div>
      <div className="p-4">
        <span className="text-sky-500 text-sm font-semibold">Current</span>
        <h3 className="text-lg font-bold text-gray-800 mt-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{code}</p>
        <button className="text-sky-500 font-semibold flex items-center">
          Check <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}