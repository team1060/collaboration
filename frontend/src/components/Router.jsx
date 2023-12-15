import { BrowserRouter, Routes , Route} from "react-router-dom";

// import Header from "./Header";
// import Footer from "./Footer";
// 메인
import HomeList from "../Routes/Home/Home";
import Intro from "../Routes/Home/Intro"; // 클럽 소개 //Inquiry Mart member Join
// 예약안내
// 로그인 회원가입
import Member from "../Routes/mart/Member";
// 500 386 dl 
import Admin from "../Routes/admin/Admin";

function Router () {
  return (

  

      <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<HomeList/>}/>
        <Route path="/golf/intro" element={<Intro/>}/>
        <Route path="/member" element={<Member/>}/>
        
        
        
        <Route path="/list2" element={<>상품페이지2</>}/>
        <Route path="/list2" element={<>상품페이지2</>}/>
        <Route path="/list3" element={<>상품페이지3</>}/>
        
        {/* 어드민 별도 중첩라우터 쓰니까 터짐 헤더 푸터 별도로 각 라우터 안으로 뿌림 */}
        <Route path="/admin" element={<Admin/>}/>
         
      </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
  
  )
}

export default Router;