// import { useEffect, useState } from 'react';

function ImageList({ imgData }) {
  if (!imgData) {
    return <p>Loading images...</p>; // 또는 다른 적절한 로딩 메시지 또는 컴포넌트
  }
  console.log(imgData);
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {imgData.length > 0 ? (
          imgData.map((item, i) => {
            return (
              <div key="i">
                <img src={`http://localhost:8081/file/${item.id}`} alt="" style={{ width: 200 }} />
              </div>
            );
          })
        ) : (
          <p>no image</p>
        )}
      </div>
    </>
  );
}
export default ImageList;
