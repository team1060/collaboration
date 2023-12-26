
import { Button, Container, Grid, Rating, Typography } from "@mui/material";
import "../style/InfoInner.scss"
import LocationOn from "@mui/icons-material/LocationOn";
import Call from '@mui/icons-material/Call';
import Print from '@mui/icons-material/Print';
// 골프장 상세페이지
function Infoinner() {
    return (
        <div id="infoInner">
            <Container>
                <Grid className="title">
                    <h2>안성H<span>경기</span></h2>
                </Grid>
                <Grid container className="golfSec1">
                    <Grid item md={6} className="golfImage">
                        <img src="/img/golf/1.jpg" alt="" />
                    </Grid>
                    <Grid
                        direction="column"
                        item md={6} className="golfCont">
                        <div className="tit">품격있는 명품 퍼블릭</div>
                        <p className="">
                            안성H는 커리어 그랜드 슬럼을 달성하고 세계골프 명예의 전당에 오른 Gary Player가 설계한 전세계 36개국 400개 명품 골프코스 중 하나입니다.
                            LPGA로부터 PAT(Playing Ability Test) 코스로 인증 받았으며, 2018년 KPGA 정규대회를 개최한 바 있습니다.
                        </p>
                    </Grid>
                </Grid>
                <Grid>
                    <div className="reserve">
                        <Button className="reserveButton" variant="contained">예약하기</Button>
                    </div>
                </Grid>
                <Grid container className="golfSec2">
                    <Grid item md={5} xs={12} className="">
                        <Grid className="Sec2Inner courseIntroducing">
                            <h3>코스 소개</h3>
                        </Grid>
                        <Grid container className="golfSec2Inner">
                            <Grid item xs={3} direction="column" className="tcourses">
                                <div className="tit">코스</div>
                                <div>3</div>
                            </Grid>
                            <Grid item xs={3} direction="column" className="tholes">
                                <div className="tit">홀</div>
                                <div>18</div>
                            </Grid>
                            <Grid item xs={3} direction="column" className="tpars">
                                <div className="tit">파</div>
                                <div>108</div>
                            </Grid>
                            <Grid item xs={3} direction="column" className="tscores">
                                <div className="tit">평균 스코어</div>
                                <div>91.8</div>
                            </Grid>

                        </Grid>
                        <Grid className="rating">
                            <Grid className="ratingInner" item container justifyContent="space-between"
                                alignItems="center">
                                <Typography component="legend">난이도</Typography>
                                <Rating name="read-only" value="4" readOnly />
                            </Grid>
                            <Grid className="ratingInner" item container justifyContent="space-between"
                                alignItems="center">
                                <Typography component="legend">레이디티 난이도</Typography>
                                <Rating name="read-only" value="3" readOnly />
                            </Grid>
                            <Grid className="ratingInner" item container justifyContent="space-between"
                                alignItems="center">
                                <Typography component="legend">그린 난이도</Typography>
                                <Rating name="read-only" value="5" readOnly />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Grid
                        direction="column"
                        item md={5} xs={12} className="">
                        <Grid className="Sec2Inner directions">
                            <h3>오시는 길</h3>
                        </Grid>
                        <Grid className="">
                            <Grid className=" directionsInner" item container>
                                <div className="locationEmo"><LocationOn></LocationOn></div>
                                <div className="location">용인시 처인구 남사면 경기동로 628</div>
                            </Grid>
                            <Grid className=" directionsInner" item container>
                                <div className="callEmo"><Call></Call></div>
                                <div className="call">031-336-8350</div>
                            </Grid>
                            <Grid className=" directionsInner" item container>
                                <div className="printEmo"><Print></Print></div>
                                <div className="print">031-336-8482</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Infoinner;
