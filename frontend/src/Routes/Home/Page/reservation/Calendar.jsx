// 필요한 패키지와 모듈 import
import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Container, Grid } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import '../../style/Reservation.scss';
import { useState } from 'react';

// CustomMonthLayout 컴포넌트 정의
const CustomMonthLayout = ({ updateView, isNextMonth }) => {
    const [view, setView] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(dayjs());  // 오늘 날짜 
    const [nextMonth, setNextMonth] = useState(dayjs().add(1, 'month'));  // 추가된 부분

    // 날짜 선택 이벤트 처리 함수
    const handleDateChange = (date) => {
        const month = date.$M + 1;
        const data = date.$y + '-' + month + '-' + date.$D;
        setView(data);
        updateView(data, isNextMonth);
        
    };

    // 예약 가능한 날짜는 오늘부터 3주뒤까지 
    const today = dayjs();
    const threeWeeksLater = today.add(3, 'weeks');
    const minDate = today.add(1, 'day');
    const maxDate = threeWeeksLater;

    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            dateFormats={{ monthShort: 'M' }}
        >
            <StaticDatePicker
                orientation="landscape"
                onChange={handleDateChange}
                defaultValue={isNextMonth ? dayjs().add(1, 'month') : dayjs()}
                minDate={minDate}
                maxDate={maxDate}
            />
        </LocalizationProvider>
    );
};


// Calendar 컴포넌트 정의
export default function Calendar() {
    const [view, setView] = useState(null);

    // view 상태를 업데이트하는 함수
    const updateView = (data) => {
        setView(data);
    };

    return (
        <Container>
            {/* 달력 */}
            <div className="parent">
                <div className='internet'>
                    <h2>인터넷 예약</h2>
                    <br />
                </div>
            </div>
            <div className="calen2">
                <div className="calen">
                    <Grid container className='cal'>
                        <Grid item>
                            <CustomMonthLayout updateView={updateView} isNextMonth={false}/>
                        </Grid>
                        <Grid item>
                            <CustomMonthLayout updateView={updateView} isNextMonth={true}/>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="calen2">
                <div className="calen">
                    <Grid className='cal'>
                        <h3>예약자: 000님</h3>
                        <h3>선택일: {view}</h3> {/* 선택한 날짜 표시 */}
                    </Grid>
                </div>
            </div>
        </Container>
    );
}
