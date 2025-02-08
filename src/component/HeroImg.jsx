import { Box, Typography } from '@mui/material';

function RelativePositioning() {
  return (
    <Box sx={{ position: 'relative', width: '90%', height: '50%',  }}>
      <img
        src="/header/landing-mockup 1.png"
        alt="image"
        style={{ width: '337px', height: '950px', objectFit: 'cover' }}
      />
      <Typography
        sx={{
          position: 'absolute',
          top: '20%',
          left: '75%',
          transform: 'translate(-50%, -50%)',
          width:"50%",
          height:"15%",
          backgroundColor:"rgba(240, 240, 240, 1)",
          borderTopRightRadius:"20px",
          borderBottomRightRadius:"20px",
          borderTopLeftRadius:"10px",
          borderBottomLeftRadius:"10px",
          boxShadow: " -5px -5px 10px rgba(0, 0, 0, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.3)",          
          display: { xs: "none", md: "block" },


        }}
      >
      </Typography>
        
      <Typography
        sx={{
          position: 'absolute',
          top: '45%',
          right: '30%',
          transform: 'translate(-50%, -50%)',
          width:"300px",
          height:"200px",
          backgroundColor:"rgba(21, 5, 120, 1)",
          borderTopRightRadius:"20px",
          borderBottomRightRadius:"20px",
          borderTopLeftRadius:"10px",
          borderBottomLeftRadius:"10px",
          boxShadow: " -5px -5px 10px rgba(0, 0, 0, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.3)",          
          display: { xs: "none", md: "block" },


        }}
      >
        
      </Typography>
    </Box>
  );
}

export default RelativePositioning;
