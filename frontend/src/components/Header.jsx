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
          <a href="/">클럽안내</a>
          <div className="two-depth">
            <div className="innerWrap">
              <div><h3><Link to="/">예약</Link></h3></div>
              <div><h3><Link to="/">예약안내</Link></h3></div>
              <div><h3><Link to="/">이용안내</Link></h3></div>
            </div>
          </div>
        </li>
        <li id="golfList">
          <Link to="/">예약안내</Link>
          <div className="two-depth">
            <div className="innerWrap">
              <div className="list01" id="area1">
                <h4>경기</h4>
              </div>
              <div className="list01" id="area2">
                <h4>충청</h4>
              </div>
              <div className="list01" id="area3">
                <h4>경상</h4>
              </div>
              <div className="list01" id="area4">
                <h4>전라</h4>
              </div>
              <div className="list01" id="area5">
                <h4>제주</h4>
              </div>
            </div>
          </div>
        </li>
        
        <li className="off"><Link to="/showping">골프마켓</Link></li>
        <li>
          <Link to="/">고객지원</Link>
          <div className="two-depth">
            <div className="innerWrap">
              <div><h3><Link to="/event">이벤트</Link></h3></div>
              <div><h3><Link to="/notice">공지사항</Link></h3></div>
            </div>
          </div>
        </li>
        <li>
          <Link to="/">마이페이지</Link>
          <div className="two-depth">
            <div className="innerWrap">
              <div className="list02">
                <h4>나의 예약</h4>
                <p><Link to="/">예약내역</Link></p>
                <p><Link to="/">미션존</Link></p>
                <p><Link to="/">마일리지</Link></p>
                <p><Link to="/">텍스트</Link></p>
              </div>
              <div className="list02">
                <h4>라운드기록</h4>
                <p><Link to="/">예약내역</Link></p>
                <p><Link to="/">미션존</Link></p>
                <p><Link to="/">마일리지</Link></p>
                <p><Link to="/">텍스트</Link></p>
              </div>
              <div className="list02">
                <h4>프로필</h4>
                <p><a href="/">내 프로필</a></p>
              </div>
              <div className="list02">
                <h4>인증센터</h4>
                <p><a href="/">인증센터</a></p>
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