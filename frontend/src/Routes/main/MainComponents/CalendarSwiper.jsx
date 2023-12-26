import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'; // React Router에서 Link 컴포넌트 가져오기
import '../style/CalendarSwiper.scss'

// 데이터는 모듈에서 망가짐 대소문자 무시 함 폴더명 소문자 
import weeksData from '../data/data.js';

const CalendarSwiper = () => {
  const [selectedDayData, setSelectedDayData] = useState(null);

  // 요일을 클릭했을 때 해당 요일의 데이터를 선택하도록 합니다.
  const handleDayClick = (dayData) => {
    setSelectedDayData(dayData);
  };

  return (
    <div className='container'>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
      >
        {weeksData.map((week, index) => (
          <SwiperSlide key={index}>
            <div className="week">
              {/* 주 시작 날짜를 표시 */}
              <div className="week-start">{week.weekStart}</div>
              {/* 날짜별로 이벤트 표시 */}
              <div className="week-days">
                {week.days.map((day, idx) => (
                  <div
                    key={idx}
                    className="day"
                    onClick={() => handleDayClick(day)}
                  >
                    <div className="date">{day.date}</div>
                    <div className="date">{day.dayOfWeek}요일</div>
                  
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       {/* 선택된 요일의 데이터를 5x2 카드 형식으로 표시 */}
      {selectedDayData && (
        <div className="selected-day-card">
          <h3>선택한날짜 예약 가능 지역</h3>
          <div className="data-grid">
            {selectedDayData.events.map((product, eventIdx) => (
                 <Link to={`/golf/intro/${product.name}`} key={eventIdx} state={product}>
                <div className={`event-card ${product.status.toLowerCase()}`}>
                  <div className="event-name" style={{color:"black"}}>{product.name}</div>
                  <div className="event-status">{product.status}</div>
                </div>
              </Link>
            ))}
            {/* "상세검색" 버튼 추가 */}
            <div className="event-card detail-search">
              <a href="/">상세검색 <i className="fas fa-search"></i></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CalendarSwiper;