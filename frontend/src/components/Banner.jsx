import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ imageUrl, linkUrl,imgData }) => {
  console.log(imageUrl);
  console.log(linkUrl);
  console.log(imgData);
  return (
    <Link href={linkUrl || '#'} target="_blank" rel="noopener noreferrer">
      {imageUrl ? (
        <img src={imageUrl} alt="fileList" style={{ maxWidth: '1200px' }} />
      ) : (
        <span>광고문의</span> // 이미지가 없을 경우 표시
      )}
    </Link>
  );
  
};

export default Banner;
