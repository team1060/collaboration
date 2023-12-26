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
              id={item.id}
              name={item.name}
              placeholder={item.placeholder}
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
