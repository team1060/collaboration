import { useState } from "react";
import { Link } from "react-router-dom";
import './style/HeaderStyle.scss';


function Header() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  const closeSideMenu = () => {
    setSideMenuOpen(false);
  };

  return (
    <div className="HeaderContainer"  >
      
      {/* 토글 버튼 */}
      <button onClick={toggleSideMenu} style={{width:"50px", height:"50px"}}>=</button>

      {/* 사이드 메뉴 */}
      <div className={`side-menu ${isSideMenuOpen ? "open" : ""}`}>
        {/* 사이드 메뉴 내용 */}
        <button className="close-btn" onClick={closeSideMenu}>
          &times;
        </button>
      </div>
      <div id="header">
  <div className="inner">
    <h1 className="logo">
      <Link to="/">
        <img src="/img/img001.png" alt="logo" />
      </Link>
    </h1>
    <div className="util">
      <ul className="Ul">
        <li><Link to="/member/login">로그인</Link></li>
        <li><Link to="/member/join">회원가입</Link></li>
       
      </ul>
    </div>
    <button className="rBtn" id="my_reserve">나의 예약</button>
  </div>

  {/* gnb */}
  <div className="gnb">
    <nav>
      <ul className="Ul">
        <li>
        <Link to="/">클럽안내</Link>
          <div className="two-depth">
            <div className="innerWrap">
           <div>
             <h4 >클럽 안내</h4>
             <div><h3><Link to="/">골프장 메인</Link></h3></div>
             <div><h3><Link to="/">오시는 길</Link></h3></div>
              
           </div>
           <div>
           <h4 >요금 안내</h4>
            <h3><Link to="/">요금 안내</Link></h3>
           </div>

           <div>
           <h4 >소개</h4>
                <div><h3><Link to="/">부대 시설</Link></h3></div>
                <div><h3><Link to="/">클럽 소개</Link></h3></div>
             
           </div>

         
            </div>
          </div>
        </li>
        <li>
        <Link to="/">예약안내</Link>
          <div className="two-depth">
            <div className="innerWrap">
              
              <div><h3><Link to="/">예약 및 문의</Link></h3></div>
              <div><h3><Link to="/">실시간 예약</Link></h3></div>
              <div><h3><Link to="/">예약확인 및 취소</Link></h3></div>
              <div><h3><Link to="/">위약 처리규정</Link></h3></div>
              
            </div>
          </div>
        </li>
        
        <li>
        <Link to="/">골프마켓</Link>
          <div className="two-depth">
            <div className="innerWrap">
           <div>
             
             <div><h3><Link to="/">마켓 메인</Link></h3></div>
             <div><h3><Link to="/">골프 클럽</Link></h3></div>
             <div><h3><Link to="/">골프 용품</Link></h3></div>
              
           </div>
           <div>
           
            <h3><Link to="/">상품 상세</Link></h3>
           </div>

           <div>
           
                <div><h3><Link to="/">상품 주문 확인</Link></h3></div>
                <div><h3><Link to="/"> 핫 딜 </Link></h3></div>
             
           </div>

         
            </div>
          </div>
        </li>
        <li>
        <Link to="/">고객지원</Link>
          <div className="two-depth">
            <div className="innerWrap">
           <div>
             
             <div><h3><Link to="/">FAQ</Link></h3></div>
             <div><h3><Link to="/">공지사항</Link></h3></div>
             <div><h3><Link to="/">문의하기</Link></h3></div>
             <div><h3><Link to="/">문의내용</Link></h3></div>
              
           </div>
           <div>
           
                <div><h3><Link to="/">개인정보 취급 방침</Link></h3></div>
                <div><h3><Link to="/">이용약관</Link></h3></div>
             
           </div>

         
            </div>
          </div>
        </li>

        <li>
        <Link to="/">마이페이지</Link>
          <div className="two-depth">
            <div className="innerWrap">
           <div>
             
             <div><h3><Link to="/">회원정보수정</Link></h3></div>
             <div><h3><Link to="/">회원탈퇴</Link></h3></div>          
           </div>

           <div>
                <div><h3><Link to="/">배송지 관리</Link></h3></div>
                <div><h3><Link to="/">배송지 등록/수정</Link></h3></div>
           </div>

         
            </div>
          </div>
        </li>

      </ul>
    </nav>
  </div>
  {/* // gnb */}
</div>
{/* //header */}
{/* // header include 처리부분 */}


    </div>
  )
}

export default Header;