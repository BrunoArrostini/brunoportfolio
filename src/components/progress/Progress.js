import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Progress({lang}) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <CircularProgress variant="determinate" value={progress} style={{width:"150px", marginRight:"80px"}} />
      <p style={{marginRight:"0px"}}>{lang}</p>
    </Stack>
  );
}