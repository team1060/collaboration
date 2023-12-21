import { Container,  Grid } from '@mui/material';
import '../../style/Reservation.scss'

function Head() {
  return (
    <div className="con">
        <div className='head'>
            <Container>
                    <Grid className='atag' item lg={12} md={12} xs={12}>
                            <a href='/inter'>인터넷예약</a>
                            <a href='/res'>예약확인</a>
                            <a href='/can'>취소현황</a>
                    </Grid>
            </Container>
        </div>
    </div>
  )
}

export default Head;
