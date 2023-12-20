import { BrowserRouter, Routes , Route} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
// 메인
import HomeList from "../Routes/Home/Home"; // 메인 홈페이지 
import EventDetail from "../Routes/Home/Page/EventDetail"; // 골프 
import Reservation from "../Routes/Home/Page/Reservation"; // 골프 예매 페이지 
import Info from "../Routes/Home/Page/Info";// 골프 목록 페이지 

// 상품
import Shop from "../Routes/shop/Shop"; //상품 메인
import Product from "../Routes/shop/Product";// 상품 목록 
// 배송
import Addr from "../Routes/addr/Addr";
import Detail from "../Routes/addr/Detail";
// 고객 지원

// 마이페이지 

// 로그인 회원가입
import Member from "../Routes/mart/Member";





// 관리자 페이지 import 
import Admin from "../Routes/admin/Admin";
import AdminHeader from "../Routes/admin/AdminHeader";
import AdminFooter from "../Routes/admin/AdminFooter";
import AdminMember from "../Routes/admin/AdminMember";

// 공통 레이아웃 컴포넌트
const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const AdminLayout = ({ children }) => (
  <>
    <AdminHeader />
    {children}
    <AdminFooter />
  </>
);

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 라우트 */}
        <Route
          path="/"
          element={<MainLayout><HomeList /></MainLayout>}
        />
        {/* 골프장 상세페이지, 골프 예약 */}
        <Route path="/reservation" element={<MainLayout><Reservation /></MainLayout>} />
        <Route path="/golf/info" element={<MainLayout><Info /></MainLayout>} /> 
        {/* <Route path="/golf/info/:" element={<MainLayout><Intro /></MainLayout>} />  */}

        {/* 골프장 예매 상세페이지 */}

        <Route path="/reservation/:eventname" element={<MainLayout><EventDetail /></MainLayout>} /> 
          {/* 상품 메인 목록  */}
        <Route path="/shop" element={<MainLayout><Shop /></MainLayout>} />
        <Route path="/product" element={<MainLayout><Product /></MainLayout>} />
        {/* 배송 목록 배송지 등록 수정  */}
        <Route path="/addr" element={<MainLayout><Addr/></MainLayout>} />
        <Route path="/detail" element={<MainLayout><Detail/></MainLayout>} />
        {/* 로그인 회원 가입 */}
        <Route path="/member" element={<MainLayout><Member/></MainLayout>} />



        {/* 어드민 라우트 */}
        <Route
          path="/admin/*"
          element={<AdminLayout>
            <Routes>
              <Route path="/" element={<Admin />} />
              <Route path="/member" element={<AdminMember/>} />
              <Route path="/mart" element={<div>상품 목록 페이지</div>} />
            </Routes>
          </AdminLayout>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;