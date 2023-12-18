import CalendarSwiper from './CalendarSwiper';
import ImgSwiper from './ImgSwiper';
import GolfCourseSection from './GolfCourseSection ';
import './Home.scss'

// import { blue } from '@mui/material/colors'; 
function HomeList() {
  return (
    <>
    
    
    <div>
      <ImgSwiper/>
      <CalendarSwiper/>
    <GolfCourseSection/>
    </div>
    <a href="/golf/intro" style={{color:"black"}}>골프소개페이지입니다</a>
    <div className="test1" style={{color:"red"}}>
    <a href="/admin" style={{color:"black"}}>관리자 페이지 들어가기</a>
      asd
    </div>
    
    </>
  )
}
export default HomeList;

