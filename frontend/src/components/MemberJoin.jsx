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
import JoinData from './data/JoinData.js';
import '../components/style/MemberJoin.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllMembers } from '../services/auth/Member.js';

function MemberJoin() {
  const [open, setOpen] = React.useState([false, false, false, false]);
  const [check, setCheck] = useState();
  // 모든 계정정보
  const [allEmail, setAllEmail] = useState([]);
  // 중복확인
  const [inputValue, setInputValue] = useState("");
  const [viewMessage, setViewMessage] = useState("");

  const dataHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // 중복 여부 확인
    const isDuplicate = allEmail.some((item) => item.email === value);
    // 중복이면 처리
    if (isDuplicate) {
      console.log("중복된 아이디가 있습니다.");
      setViewMessage("중복된 아이디가 있습니다.");
    } else {
      console.log("사용가능한 아이디입니다.");
      setViewMessage("사용가능한 아이디입니다.");
    }
  };

  // 콜랩스
  const handleClick = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  // 체크박스
  const [checked, setChecked] = React.useState([false, false, false, false]);

  // 전체선택
  const handleCheckAll = (event) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
  };

  // 한개선택
  const handleChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  // 체크박스
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, marginBottom: '10px' }}>
      {JoinData.map((JoinData, index) => (
        <React.Fragment key={index}>
          <Grid container>
            <FormControlLabel
              style={{ width: '360px' }}
              label={JoinData.label}
              control={<Checkbox checked={checked[index]} onChange={handleChange(index)} />}
            />

            <div className="butstyle">
              <ListItemButton onClick={() => handleClick(index)} style={{ justifyContent: 'end' }}>
                {open[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </div>
          </Grid>

          <List sx={{ width: '100%', bgcolor: 'background.paper' }} component="nav">
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem style={{ width: '400px', overflowY: 'auto', height: '200px', border: '1px solid #000' }}>
                  <ListItemText primary={JoinData.text} />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </React.Fragment>
      ))}
    </Box>
  );

  // email 전체 조회
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getAllMembers();
        setAllEmail(userData);
        console.log(allEmail)
      } catch (error) {
        // 에러 처리
      }
    };
    fetchData();
  }, []);

  return (
    <Container id='memberJoin'>
      <div className="joinbox">
        <div className="join">
          <h2>회원가입</h2>
          <br />
        </div>
      </div>
      <hr />
      <br />
      {/* 회원가입 폼 */}
      <form action="">
        <Grid container spacing={3} className="inputfield">
          <Grid item xs={3} lg={2} className="inputtext">
            이메일
            <span>*</span>
          </Grid>
          <Grid item xs={8} lg={7}>
            <TextField
              fullWidth
              label={'이메일'}
              placeholder={'이메일을 입력해주세요'}
              name='email'
              id='email'
              autoComplete="email"
              onChange={dataHandler}
              value={inputValue}
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
        <Grid container spacing={3} className="inputfield">
          <Grid item xs={3} lg={2} className="inputtext"></Grid>
          <Grid style={{ color: viewMessage.includes('중복') ? 'red' : 'green' }} item xs={8} lg={7}>{viewMessage}</Grid></Grid>
        <Grid container spacing={3} className="inputfield">
          <Grid item xs={3} lg={2} className="inputtext">
            비밀번호
            <span>*</span>
          </Grid>
          <Grid item xs={8} lg={7}>
            <TextField
              fullWidth
              label={'비밀번호'}
              placeholder={'비밀번호를 입력해주세요'}
              type='password'
              name='password'
              autoComplete="current-password"  // autocomplete 속성 추가
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
        
        <Grid container spacing={3} className="inputfield">
          <Grid item xs={3} lg={2} className="inputtext">
            닉네임
            <span>*</span>
          </Grid>
          <Grid item xs={8} lg={7}>
            <TextField
              fullWidth
              label={'닉네임'}
              placeholder={'닉네임을 입력해주세요'}
              name='nickname'
              id='nickname'
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
        <Grid container spacing={3} className="inputfield">
          <Grid item xs={3} lg={2} className="inputtext">
            이름
            <span>*</span>
          </Grid>
          <Grid item xs={8} lg={7}>
            <TextField
              fullWidth
              label={'이름'}
              placeholder={'이름을 입력해주세요'}
              name='username'
              id='username'
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
        <Grid container spacing={3} className="inputfield">
          <Grid item xs={3} lg={2} className="inputtext">
            생년월일
            <span>*</span>
          </Grid>
          <Grid item xs={8} lg={7}>
            <TextField
              fullWidth
              label={'생년월일'}
              placeholder={'생년월일을 입력해주세요'}
              name='bithdate'
              id='bithdate'
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
        <Grid container spacing={3} className="inputfield">
          <Grid item xs={3} lg={2} className="inputtext">
            생년월일
            <span>*</span>
          </Grid>
          <Grid item xs={8} lg={7}>
            <TextField
              fullWidth
              label={'휴대폰번호'}
              placeholder={'- 을 뺀 휴대폰 번호를 입력해주세요'}
              name='phonenumber'
              id='phonenumber'
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
      </form>


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
