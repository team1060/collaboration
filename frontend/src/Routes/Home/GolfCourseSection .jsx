import React from 'react';
import './GolfCourseSection.scss';

const GolfCourseSection = () => {
  return (
    <div className="golf-course-section">
      <div className="golf-course-image">
        <div className="image-buttons">
          <button>경기</button>
          <button>순위</button>
          <button>결산</button>
          <button>제주</button>
        </div>
        {/* 이미지 대신 회색 박스를 사용 */}
        <div className="image-placeholder"></div>
      </div>
      <div className="golf-course-info">
        <h1 className="title">한림용8CC</h1>
        <p className="description">100번 개인 호스트를 키우고 있으며...</p>
        <div className="stats">
          <span className="hole-info">#27홀 골프장</span>
          <span className="par-info">Par 108</span>
          <span className="length-info">9,619m 전장</span>
          <span className="discount">60%</span>
        </div>
      </div>
    </div>
  );
};

export default GolfCourseSection;
