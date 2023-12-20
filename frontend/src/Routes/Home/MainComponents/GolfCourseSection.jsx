import React, { useState } from 'react';
import '../style/GolfCourseSection.scss';
import coursesData from '../data/golf.json';

const GolfCourseCard = ({ course, onClick }) => {
  return (
    <div className="golf-course-card" onClick={() => onClick(course)}>
      <div className="golf-course-image-placeholder"></div>
      <div className="golf-course-info">
        <h2 className="golf-course-name">{course.name}</h2>
        <p className="golf-course-description">{course.description}</p>
        <p className="golf-course-holes-pars">{course.holes} 홀 / 파 {course.pars}</p>
        <p className="golf-course-land-area">면적: {course.landArea}㎡</p>
        <p className="golf-course-contact">{course.contact}</p>
        <button className="golf-course-reservation-button">예약하기</button>
      </div>
    </div>
  );
};

const GolfCourseSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  // const [selectedRegion, setSelectedRegion] = useState('');

  
  // 지역 버튼 클릭 핸들러
  const handleRegionClick = (region) => {
    // setSelectedRegion(region);
    
    // 선택된 지역의 골프 코스들을 필터링합니다.
    const filteredCourses = coursesData.filter(course => course.region === region);

    // 필터링된 골프 코스들 중에서 랜덤으로 하나를 선택합니다.
    const randomCourse = filteredCourses[Math.floor(Math.random() * filteredCourses.length)];

    // 선택된 골프 코스를 상태에 설정합니다.
    setSelectedCourse(randomCourse);
  };
  
  // 지역 버튼 컴포넌트
  const RegionButton = ({ region }) => {
    return <button onClick={() => handleRegionClick(region)}>{region}</button>;
  };


  // const handleCardClick = (course) => {
  //   setSelectedCourse(course);
  //   console.log(handleCardClick);
  // }; // 오류 주석처리 

  return (
    <div>
    <div className="region-buttons">
    
      <RegionButton region="경기" />
      <RegionButton region="충청" />
      <RegionButton region="경상" />
      <RegionButton region="전라" />
 
    </div>
    <section className="golf-course-section">
      {selectedCourse && <GolfCourseCard course={selectedCourse} />}
    </section>
  </div>
);
};
export default GolfCourseSection;
