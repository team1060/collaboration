
import './Home.scss'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import { blue } from '@mui/material/colors'; 
function HomeList() {
  return (
    <>
    <Header/>
    <div style={{marginTop:"150px"}}>홈페이지입니다</div>
    <div className="test1" style={{color:"red"}}>
    <a href="/admin" style={{color:"black"}}>관리자 페이지 들어가기</a>
      asd
    </div>
    <Footer/>
    </>
  )
}
export default HomeList;

