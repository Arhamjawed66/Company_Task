import { Box, Typography } from "@mui/material";
import React from "react";

const SectionHeading = () => {
  return (
    <Box
      display="flex"
      textAlign="center"
      justifyContent="center"
      flexWrap="wrap"
      sx={{
        width: "100%",
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "20px",
      }}
    >
      <Typography
        variant="h2"
        color="primary"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "30px", md: "40px" },
          textAlign: "center",
          letterSpacing: { xs: "0.5px", md: "1px" },
          margin: { xs: "20px 0", md: "40px 0" },
        }}
      >
        WhaleFundr
        <Box component="span" color="black" fontWeight="bold">
          {" "}
          is one of the most reliable firms in the modern prop trading industry
        </Box>
      </Typography>
    </Box>
  );
};

export default SectionHeading;
