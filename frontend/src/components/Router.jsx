import { BrowserRouter, Routes , Route} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
// 메인
import HomeList from "../Routes/Home/Home";
import Intro from "../Routes/Home/Intro"; // 클럽 소개 //Inquiry Mart member Join
// 예약안내
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
        <Route path="/golf/intro" element={<MainLayout><Intro /></MainLayout>} />
        <Route path="/member" element={<MainLayout><Member /></MainLayout>} />
        <Route path="/list2" element={<MainLayout>상품페이지2</MainLayout>} />
        <Route path="/list3" element={<MainLayout>상품페이지3</MainLayout>} />

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