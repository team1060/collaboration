import CalendarSwiper from './MainComponents/CalendarSwiper';
import ImgSwiper from './MainComponents/ImgSwiper';
import GolfCourseSection from './MainComponents/GolfCourseSection';
import MainCard from './MainComponents/MainCard'

import ShopCard from './MainComponents/ShopCard';
import BannerManagement from './MainComponents/BannerManagement';
import Banner from '../../components/Banner';
import './style/Home.scss'
// import { Button } from '@mui/material';s
// 사이트 메인페이지 


// import { blue } from '@mui/material/colors'; 
function HomeList() {
  return (
    <>
    
    
    <div>
      <ImgSwiper/>
      <CalendarSwiper/>
      {/* 일정 관리표 */}
      <GolfCourseSection/>
      {/* 골프소개  */}
      <MainCard/>
      <ShopCard/>
      <Banner/>
      <BannerManagement/>


    </div>
    {/* <Button color='primary'></Button> */}
    <a href="/golf/intro" style={{color:"black"}}>골프소개페이지입니다</a>
    <div className="test1" style={{color:"red"}}>
    <a href="/admin" style={{color:"black"}}>관리자 페이지 들어가기</a>
      asd
    </div>
    
    </>
  )
}
export default HomeList;

