import React from "react";
import { Box, Typography } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MessageIcon from "@mui/icons-material/Message";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Section3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          maxWidth: "1000px",
          gap: { xs: 4, md: 2 },
          background: "rgba(255, 255, 255, 0.8)", 
          padding: "20px",
          borderRadius: "10px",
          boxShadow: 3,
        }}
      >
        {/* Box 1 - Idea */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <LightbulbIcon fontSize="large" color="primary" />
          <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
            Idea
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
            Generating new innovative ideas.
          </Typography>
        </Box>

        {/* Box 2 - Communication */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <MessageIcon fontSize="large" color="secondary" />
          <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
            Communication
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
            Effective communication is key.
          </Typography>
        </Box>

        {/* Box 3 - Growth */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ArrowUpwardIcon fontSize="large" color="success" />
          <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
            Growth
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
            Continuous improvement and growth.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Section3;