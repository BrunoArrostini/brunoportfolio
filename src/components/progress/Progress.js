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
    <Stack spacing={0} direction="row">
      <div className='circle'>
        <CircularProgress variant="determinate" value={progress} style={{width:"80px", position: "absolute",
          left: "50%",
          bottom: "50%",
          transform: "translate(-50%, -50%)"}}/>
        <p>{lang}</p>
      </div>

    </Stack>
  );
}