import React from "react";
import { StyledEmpGridContainer, StyleEmpBox } from "./EmployeeDetails";
import { StyledBox, StyledGridItem } from "./AvatarComponent";
import { Box, Typography } from "@mui/material";

export const Experience = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <StyleEmpBox>
        <Typography component="h4" className="TopHeadLine" mb={1}>
          experience information
        </Typography>
        <StyledEmpGridContainer container spacing={2}>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  how many year experience
                </Typography>
                <Typography component="h6" className="Value">
                  0
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  year of passed out
                </Typography>
                <Typography component="h6" className="Value">
                  2023
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  role
                </Typography>
                <Typography component="h6" className="Value">
                  frontend develper
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
        </StyledEmpGridContainer>
      </StyleEmpBox>
    </Box>
  );
};
