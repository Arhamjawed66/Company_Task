import { Box, Typography } from '@mui/material';
import React from 'react';

const CountNum = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 3,
        position: 'relative',
        top: '-80px', 
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      
      }}
    >
      {/* Box 1 */}
      <Box
        sx={{
          width: { xs: '300px', md: '250px' },
          height: '150px',
          border: '2px solid ',
          borderRadius: '20px',
          bgcolor: '#F0F0F0',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 2,
          
        }}
      >
        <Typography variant="h4" color="primary" fontWeight={"bold"}  >2.7K+</Typography>
        <Typography variant="body1">Downloads</Typography>
      </Box>

      {/* Box 2 */}
      <Box
        sx={{
          width: { xs: '300px', md: '250px' },
          height: '150px',
          border: '2px solid ',
          borderRadius: '20px',
          bgcolor: '#F0F0F0',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 2,
        }}
      >
        <Typography variant="h4" color="primary" fontWeight={"bold"}>1.3K+</Typography>
        <Typography variant="body1">Users</Typography>
      </Box>

      {/* Box 3 */}
      <Box
        sx={{
          width: { xs: '300px', md: '250px' },
          height: '150px',
          border: '2px solid ',
          borderRadius: '20px',
          bgcolor: '#F0F0F0',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 2,
        }}
      >
        <Typography variant="h4" color="primary" fontWeight={"bold"}>74+</Typography>
        <Typography variant="body1">Files</Typography>
      </Box>

      {/* Box 4 */}
      <Box
        sx={{
          width: { xs: '300px', md: '250px' },
          height: '150px',
          border: '2px solid ',
          borderRadius: '20px',
          bgcolor: '#F0F0F0',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 2,
        }}
      >
        <Typography variant="h4" color="primary" fontWeight={"bold"}>46+</Typography>
        <Typography variant="body1">Places</Typography>
      </Box>
    </Box>

    



  );
};

export default CountNum;
 