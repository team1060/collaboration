import * as React from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Container, Typography, Grid, Button, ListItem } from '@mui/material';
import MemberData from './data/MemberData.js';
import '../components/style/MemberJoin.scss';

function MemberJoin() {
  const [open, setOpen] = React.useState([false, false, false, false]);

  const handleClick = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  const [checked, setChecked] = React.useState([false, false, false, false]);

  const handleCheckAll = (event) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, marginBottom: '10px' }}>
      <Grid container>
        <FormControlLabel
        style={{width: '380px'}}
          label="[필수] 골프의 민족 이용 약관"
          control={<Checkbox checked={checked[0]} onChange={handleChange(0)} />}
        />
        
          <div className="butstyle">
            <ListItemButton onClick={() => handleClick(0)} style={{ justifyContent: 'end'}}>
              {open[0] ? <ExpandLess/> : <ExpandMore />}
            </ListItemButton>
          </div>

      </Grid>
      <List
  sx={{ width: '100%', bgcolor: 'background.paper' }}
  component="nav"
  aria-labelledby="nested-list-subheader"
>
  <Collapse in={open[0]} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      <ListItem style={{ width: '400px', overflowY: 'auto' , height:'200px', border: '1px solid #000'}}>
        <ListItemText primary="골프장이용 표준약관
          제 1 장 총칙
          1 조 (목적)
          본 약관은 더크로스비 골프클럽(이하 ‘클럽’이라 한다.)와 클럽의 시설을 이용하는 모든 이용자의 시설물 이용에 관한 사항을 규정함을 목적으로 한다.

          제 2 조 (준수 의무)
          본 클럽에 내장하는 모든 이용자는 본연의 목적이 명랑하고 질서있게 이루어 질 수 있도록 하기 위하여 반드시 본 약관을 준수하여야 한다.

          제 3 조 (약관의 성립 및 효력)
          본 약관의 모든 이용자가 볼 수 있도록 프론트에 게시하며 이용자는 프론트에서 입장절차를 마침과 동시에 본 약관을 동의한 것으로 하여 효력이 발생한다." />
      </ListItem>
    </List>
  </Collapse>
</List>

      <Grid container>
        <FormControlLabel
        style={{width: '380px'}}
          label="[필수] 개인정보 수집 및 활용"
          control={<Checkbox checked={checked[1]} onChange={handleChange(1)} />}
        />
        <div className="butstyle">
          <ListItemButton onClick={() => handleClick(1)}style={{ justifyContent: 'end'}}>
            {open[1] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          </div>
      </Grid>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Collapse in={open[1]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem style={{ width: '400px', overflowY: 'auto' , height:'200px', border: '1px solid #000'}}>
        <ListItemText primary="골프장이용 표준약관
          제 1 장 총칙
          1 조 (목적)
          본 약관은 더크로스비 골프클럽(이하 ‘클럽’이라 한다.)와 클럽의 시설을 이용하는 모든 이용자의 시설물 이용에 관한 사항을 규정함을 목적으로 한다.

          제 2 조 (준수 의무)
          본 클럽에 내장하는 모든 이용자는 본연의 목적이 명랑하고 질서있게 이루어 질 수 있도록 하기 위하여 반드시 본 약관을 준수하여야 한다.

          제 3 조 (약관의 성립 및 효력)
          본 약관의 모든 이용자가 볼 수 있도록 프론트에 게시하며 이용자는 프론트에서 입장절차를 마침과 동시에 본 약관을 동의한 것으로 하여 효력이 발생한다." />
      </ListItem>
          </List>
        </Collapse>
      </List>

      <Grid container>
        <FormControlLabel
        style={{width: '380px'}}
          label="[선택] 마케팅 및 광고 목적 활용"
          control={<Checkbox checked={checked[2]} onChange={handleChange(2)} />}
        />
        <div className="butstyle">
          <ListItemButton onClick={() => handleClick(2)} style={{justifyContent: 'end'}}>
            {open[2] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          </div>
      </Grid>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Collapse in={open[2]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem style={{ width: '400px', overflowY: 'auto' , height:'200px', border: '1px solid #000'}}>
        <ListItemText primary="골프장이용 표준약관
          제 1 장 총칙
          1 조 (목적)
          본 약관은 더크로스비 골프클럽(이하 ‘클럽’이라 한다.)와 클럽의 시설을 이용하는 모든 이용자의 시설물 이용에 관한 사항을 규정함을 목적으로 한다.

          제 2 조 (준수 의무)
          본 클럽에 내장하는 모든 이용자는 본연의 목적이 명랑하고 질서있게 이루어 질 수 있도록 하기 위하여 반드시 본 약관을 준수하여야 한다.

          제 3 조 (약관의 성립 및 효력)
          본 약관의 모든 이용자가 볼 수 있도록 프론트에 게시하며 이용자는 프론트에서 입장절차를 마침과 동시에 본 약관을 동의한 것으로 하여 효력이 발생한다." />
      </ListItem>
          </List>
        </Collapse>
      </List>

      <Grid container>
        <FormControlLabel
          style={{width: '380px'}}
          label="[선택] SNS 문자 수신 동의"
          control={<Checkbox checked={checked[3]} onChange={handleChange(3)} />}
        />
        <div className="butstyle">
          <ListItemButton onClick={() => handleClick(3)} style={{ justifyContent: 'end'}}>
            {open[3] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          </div>
      </Grid>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Collapse in={open[3]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem style={{ width: '400px', overflowY: 'auto' , height:'200px', border: '1px solid #000'}}>
        <ListItemText primary="골프장이용 표준약관
          제 1 장 총칙
          1 조 (목적)
          본 약관은 더크로스비 골프클럽(이하 ‘클럽’이라 한다.)와 클럽의 시설을 이용하는 모든 이용자의 시설물 이용에 관한 사항을 규정함을 목적으로 한다.

          제 2 조 (준수 의무)
          본 클럽에 내장하는 모든 이용자는 본연의 목적이 명랑하고 질서있게 이루어 질 수 있도록 하기 위하여 반드시 본 약관을 준수하여야 한다.

          제 3 조 (약관의 성립 및 효력)
          본 약관의 모든 이용자가 볼 수 있도록 프론트에 게시하며 이용자는 프론트에서 입장절차를 마침과 동시에 본 약관을 동의한 것으로 하여 효력이 발생한다." />
      </ListItem>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <Container>
      <div className="joinbox">
        <div className="join">
          <h2>회원가입</h2>
          <br />
        </div>
      </div>
      <hr />
      <br />
      {MemberData.map((item, i) => (
        <Grid key={i} container spacing={3} className="inputfield">
          <Grid item xs={3} lg={2} className="inputtext">
            {item.label}
            <span>*</span>
          </Grid>
          <Grid item xs={8} lg={7}>
            <TextField
            
              fullWidth
              placeholder={item.placeholder}
              id="fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SlideshowIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      ))}

      {/* 이용약관 */}
      <div className="joinbox">
        <div>
          <h2>약관</h2>
          <br />
        </div>
      </div>
      {/* 체크박스 */}
      <div className="center">
        <div className="checksection">
          <div className="checkbox">
            <div className="leftsection">
              <div className="centeragree">
                <FormControlLabel
                  label={<Typography variant="h5">전체동의</Typography>}
                  control={
                    <Checkbox
                      checked={checked.every((value) => value)}
                      indeterminate={!checked.every((value) => value) && checked.some((value) => value)}
                      onChange={handleCheckAll}
                    />
                  }
                />
              </div>
              <br />
              <div className="textmargin">
                <Typography variant="h7">
                골프의 민족의 모든 약관 및 마케팅 및 광고 활용 동의의 내용을 확인하고 동의합니다.
                </Typography>
              </div>
              <hr />
            </div>
          </div>
          <div className="checkbox">
            {children}
          </div>
        </div>
      </div>
      <div className="butsec"><Button className='joinbut' variant="contained">회원가입</Button></div>
    </Container>
  );
}

export default MemberJoin;
