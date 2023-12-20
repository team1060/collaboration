import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <div style={{ width: "1200px", margin: "0 auto" }}>
      <Card sx={{ display: 'flex', flexDirection: 'row', height: '250px' }}>
        {/* Image on the left */}
        <CardMedia
          component="img"
          sx={{ width: 450, height: 250 }}
          image="./img/pc04.jpg" // Update the image path to the correct one
          alt="Golf Course"
        />

        {/* Content on the right */}
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              한림용인CC // Update the title text
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              10대 개인 운송 수단 골프 코스, 4개의 홀이 600야드 이상이나 되는 국제적인 규모의 코스... // Update the subtitle
            </Typography>
          </CardContent>
          {/* Controls at the bottom */}
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            {/* Update or remove these buttons as necessary */}
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
      </Card>
    </div>
  );
}
