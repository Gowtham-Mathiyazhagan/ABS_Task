import React from "react";
import { StyledBox, StyledGridItem } from "./AvatarComponent";
import { Box, Typography } from "@mui/material";
import { StyledEmpGridContainer, StyleEmpBox } from "./EmployeeDetails";

const Family = () => {
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
          family information
        </Typography>
        <StyledEmpGridContainer container spacing={2}>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  father name
                </Typography>
                <Typography component="h6" className="Value">
                  mathiyazhagn
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  mother name
                </Typography>
                <Typography component="h6" className="Value">
                  karpagam
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  occupation
                </Typography>
                <Typography component="h6" className="Value">
                  farmer
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  monthly income
                </Typography>
                <Typography component="h6" className="Value">
                  ---
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  annual income
                </Typography>
                <Typography component="h6" className="Value">
                  ---
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  adress
                </Typography>
                <Typography component="h6" className="Value">
                  1/23 middle street
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
        </StyledEmpGridContainer>
      </StyleEmpBox>
    </Box>
  );
};

export default Family;
