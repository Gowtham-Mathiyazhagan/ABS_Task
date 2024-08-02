import React from "react";
import { StyledBox, StyledGridItem } from "./AvatarComponent";
import { Box, Grid, styled, TextField, Typography } from "@mui/material";

const EmployeeDetails = () => {
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
          general information
        </Typography>
        <StyledEmpGridContainer container spacing={2}>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  date of birth
                </Typography>
                <Typography component="h6" className="Value">
                  7-8-2002
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  gender
                </Typography>
                <Typography component="h6" className="Value">
                  male
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  date of joining
                </Typography>
                <Typography component="h6" className="Value">
                  2-3-2020
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  martial status
                </Typography>
                <Typography component="h6" className="Value">
                  not maried
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  blood group
                </Typography>
                <Typography component="h6" className="Value">
                  o+
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  physically handicapt
                </Typography>
                <Typography component="h6" className="Value">
                  no
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
        </StyledEmpGridContainer>
      </StyleEmpBox>
      <StyleEmpBox>
        <Typography component="h4" className="TopHeadLine" mb={1}>
          contact information
        </Typography>
        <StyledEmpGridContainer container spacing={2}>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  email
                </Typography>
                <Typography component="h6" className="Value">
                  gowtham@gmail
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  official email
                </Typography>
                <Typography component="h6" className="Value">
                  gowtham@gmail
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  date of joining
                </Typography>
                <Typography component="h6" className="Value">
                  2-3-2020
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  mobile no
                </Typography>
                <Typography component="h6" className="Value">
                  9994092559
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  official no
                </Typography>
                <Typography component="h6" className="Value">
                  ---
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
        </StyledEmpGridContainer>
      </StyleEmpBox>
      <StyleEmpBox>
        <Typography component="h4" className="TopHeadLine" mb={1}>
          general information
        </Typography>
        <StyledEmpGridContainer container spacing={2}>
          <StyledGridItem item xs={12} sm={6}>
            <StyledTextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              fullWidth
            />
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={6}>
            <StyledTextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              fullWidth
            />
          </StyledGridItem>
        </StyledEmpGridContainer>
      </StyleEmpBox>
    </Box>
  );
};

export default EmployeeDetails;

export const StyleEmpBox = styled(Box)(() => ({
  border: "1px solid #d1d5db",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  padding: "10px",
  marginBottom: "10px",
  width: "100%",
}));

const StyledTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    fontSize: "13px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "12px",
    textTransform: "capitalize",
  },
}));

export const StyledEmpGridContainer = styled(Grid)(({ theme }) => ({
  minHeight: "50px",
  border: `1px solid ${theme.palette.primary}`,
}));
