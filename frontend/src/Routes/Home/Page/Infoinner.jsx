import { Button, Container, Grid } from "@mui/material";
import "../style/InfoInner.scss"
// 골프장 상세페이지
function Infoinner() {
    return (
        <div id="infoInner">
            <Container>
                <Grid className="tit">
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
                    <div className="">
                        <Button >안성H예약하기</Button>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}

export default Infoinner;
