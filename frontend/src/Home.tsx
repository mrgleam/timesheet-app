import { Box, Button, Typography } from '@mui/joy';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography gutterBottom>
        Welcome to My App
      </Typography>
      <Button color="primary">
        Create Project
      </Button>
    </Box>
  );
}

export default Home;