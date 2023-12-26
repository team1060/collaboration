import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import coursesData from '../data/golf.json'; // golf.json 경로 확인 필요


const GolfCourseCard = ({ course }) => {
  return (

    <div style={{width:"100%", margin:"0 auto"}} className='GolfCourseCard'> 
      <Card sx={{ display: 'flex', margin: '20px', padding: '10px' }}>
        {/* 이미지 자리 (임시로 색상만 표시) */}
        <CardMedia
            component="img"
            sx={{ width: 450, height: 250 }}
            image="./img/pc04.jpg" // Update the image path to the correct one
            alt="Golf Course"
          />
      
        <CardContent sx={{ flex: '1' }}>
          <Typography component="h5" variant="h5">
            {course.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {course.description}
          </Typography>
          <Typography variant="subtitle1">
            {course.holes} 홀 / 파 {course.pars}
          </Typography>
          <Typography variant="subtitle1">
            면적: {course.landArea}㎡
          </Typography>
          <Typography variant="subtitle1">
            {course.contact}
          </Typography>
          {/* 예약 버튼은 그대로 유지 */}
          <Button variant="contained" color="primary">
            예약하기
          </Button>
        </CardContent>
      </Card>
    </div>

  );
};

const GolfCourseSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(coursesData[0]); // 초기값 설정

  const handleRegionClick = (region) => {
    const filteredCourses = coursesData.filter(course => course.region === region);
    const randomCourse = filteredCourses[Math.floor(Math.random() * filteredCourses.length)];
    setSelectedCourse(randomCourse);
  };

  return (
    <div style={{width:"1200px", margin:"0 auto" , marginTop:"15px"}}> 
      {/* 지역 버튼 */}
      <div style={{paddingLeft:"20px"}}>
        <Button sx={{ pl: 3, pr:3, alignItems: 'center'}} variant="contained" color="primary" onClick={() => handleRegionClick('경기')}>경기</Button>
        <Button sx={{ pl: 3, pr:3, alignItems: 'center'}} variant="contained" color="primary" onClick={() => handleRegionClick('충청')}>충청</Button>
        <Button sx={{ pl: 3, pr:3, alignItems: 'center'}}variant="contained" color="primary" onClick={() => handleRegionClick('경상')}>경상</Button>
        <Button sx={{ pl: 3, pr:3, alignItems: 'center'}}variant="contained" color="primary" onClick={() => handleRegionClick('전라')}>전라</Button>
      </div>
      {/* 골프 코스 카드 */}
      <div>
        {selectedCourse && <GolfCourseCard course={selectedCourse} />}
      </div>
    </div>
  );
};

export default GolfCourseSection;
