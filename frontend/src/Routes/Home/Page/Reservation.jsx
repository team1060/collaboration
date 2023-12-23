import '../style/Reservation.scss'
import Head from "./reservation/Head";
import Calendar from "./reservation/Calendar";
import Course from "./reservation/Course";
import { useEffect, useState } from "react";


function Reservation() {

  const [view, setView] = useState(null);
  const [golf, setGolf] = useState('');
  const [index, setIndex] = useState();
  // 캘린더에서 날짜 값 받아서 버튼에 주기 
  const parentView = (view) => {
    setView(view);
    console.log(view);
  }

  const parentGolf = (golf, i) => {
    setGolf(golf);
    const plus = i + 1;
    setIndex(plus);
    console.log(plus+golf);
  }

  // useEffect로 골프장 버튼이 바뀔 때 코스 값 바뀌게 하기 

  return (
    <>
      <Head />
      <Calendar parentView={parentView} parentGolf={parentGolf}/>
      <Course golf={golf} view={view} index={index}/>
    </>
  )
}

export default Reservation;
