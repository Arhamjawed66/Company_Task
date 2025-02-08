import { Box } from "@mui/material";
import React from "react";

const logos = [
  "/sectionLogo/2.png",
  "/sectionLogo/3.png",
  "/sectionLogo/4.png",
  "/sectionLogo/5.png",
];

const Section1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 2,
          p: 2,
          width: "100%",
          maxWidth: "1000px", // Same width as IconBox
          background: "rgba(255, 255, 255, 0.8)", // Light overlay
          padding: "20px",
          borderRadius: "10px",
          boxShadow: 3,
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 100,
              border: "2px solid #ccc",
              borderRadius: 2,
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              width={80}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Section1;
