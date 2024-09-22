import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-[#1E3A8A] flex items-center gap-2">
        <span className="text-4xl">🎉</span> Новости
      </h1>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        className="mb-8 rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-8 text-white rounded-2xl relative h-64">
            <img 
              src="https://lab.marsit.uz/media/news/Space_oktyabr_380x1050.png" 
              alt="" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-8 text-white rounded-2xl h-64">
            <img 
              src="https://lab.marsit.uz/media/news/880x300.png" 
              alt="" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <div className="swiper-button-prev"><ChevronLeft className="text-white" /></div>
        <div className="swiper-button-next"><ChevronRight className="text-white" /></div>
      </Swiper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard
          icon="👨‍🏫"
          title="Дополнительный учитель"
          description="Запишитесь на дополнительный урок"
          actionText="Записаться"
          actionType="button"
        />
        <FeatureCard
          icon="🔥"
          title="Новости"
          description="Будьте в курсе последних новостей о нашем учебном центре"
          actionText="Watch"
          actionType="watch"
        />
        <FeatureCard
          icon="🎓"
          title="Сертификаты"
          description="Сертификаты, выданные Mars IT School"
          actionText="Check"
          actionType="link"
        />
        <FeatureCard
          icon="🌟"
          title="Поделиться с друзьями"
          description="Делитесь с друзьями и получайте коины"
          actionText="Share"
          actionType="link"
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, actionText, actionType }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-start space-x-4">
      <div className="text-4xl">{icon}</div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-[#1E3A8A]">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        {actionType === 'button' && (
          <button className="bg-[#38BDF8] text-white px-4 py-1 rounded-full text-sm">
            {actionText}
          </button>
        )}
        {actionType === 'watch' && (
          <span className="text-[#F43F5E] font-semibold flex items-center">
            {actionText} <span className="ml-1 text-xs">⏱</span>
          </span>
        )}
        {actionType === 'link' && (
          <span className="text-[#38BDF8] font-semibold flex items-center">
            {actionText} <ChevronRight className="w-4 h-4 ml-1" />
          </span>
        )}
      </div>
    </div>
  );
}
