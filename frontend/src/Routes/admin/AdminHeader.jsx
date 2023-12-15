
function AdminHeader() {
  return (
    <div style={{ width: '100%',  display: 'flex' }}>
      {/* 좌측 사이드바 */}
      <div style={{ width: '200px', backgroundColor: '#f0f0f0'}}>
        {/* 메뉴 예제 */}
        <ul>
          <li>메뉴 1</li>
          <li>메뉴 2</li>
          <li>메뉴 3</li>
        </ul>
      </div>

      {/* 우측 컨텐츠 영역 */}
      <div style={{ flex: '1', padding: '20px' }}>
        {/* 위에 nav 바 */}
        <div style={{ height: '50px', backgroundColor: '#ccc' }}>
          {/* 네비게이션 바 내용 */}
        </div>

        {/* 나머지 컨텐츠 */}
        <div>
          {/* 내용을 이곳에 추가 */}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;