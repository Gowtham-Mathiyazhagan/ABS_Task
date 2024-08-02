import React, { useState } from "react";
import image from "../assets/avatarImg.jpg";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const AvatarComponent = () => {
  const [value, setValue] = useState("enable");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          padding: { xs: "20px" },
        }}
      >
        <StyledGridContainer container spacing={2}>
          <StyledGridItem item xs={12} sm={2}>
            {/* <StyledBox> */}
            <BadgeStyled
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={<StyledIcon />}
            >
              <AvatarStyled alt="Travis Howard" src={image} />
            </BadgeStyled>
            <Box>
              <Typography component="h4" className="Value">
                Gowtham
              </Typography>
              <Typography component="h6" className="PlaceHolder">
                frontend developer
              </Typography>
            </Box>
            {/* </StyledBox> */}
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  employee status
                </Typography>
                <Typography component="h6" className="Value">
                  active
                </Typography>
              </Box>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  employee code
                </Typography>
                <Typography component="h6" className="Value">
                  24355
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  designation
                </Typography>
                <Typography component="h6" className="Value">
                  frontend developer
                </Typography>
              </Box>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  location
                </Typography>
                <Typography component="h6" className="Value">
                  chennai
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  department
                </Typography>
                <Typography component="h6" className="Value">
                  developer department
                </Typography>
              </Box>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  reporting to
                </Typography>
                <Typography component="h6" className="Value">
                  agustin raj (ABS1234)
                </Typography>
              </Box>
            </StyledBox>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={2}>
            <StyledBox>
              <Box>
                <Typography component="h4" className="PlaceHolder">
                  portal status
                </Typography>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <StyledFormControlLabel
                      value="enable"
                      control={<StyledRadio />}
                      label="Enable"
                    />
                    <StyledFormControlLabel
                      value="none"
                      control={<StyledRadio />}
                      label="Disable"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </StyledBox>
          </StyledGridItem>
        </StyledGridContainer>
      </Box>
    </>
  );
};

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  minHeight: "50px",
  border: `1px solid ${theme.palette.primary}`,
  display: "flex",
  justifyContent: "center",
}));

export const StyledGridItem = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
}));

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* margin: 0 auto; */
`;

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  border: `2px solid ${theme.palette.secondary.main}`,
}));

export const BadgeStyled = styled(Badge)(() => ({
  ".MuiBadge-badge": {
    bottom: "8px",
    right: "8px",
  },
}));

const StyledIcon = styled(EditOutlinedIcon)(() => ({
  fontSize: "13px",
  borderRadius: "50%",
  backgroundColor: "#c7c6c6",
  padding: "2px",
  cursor: "pointer",
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: "15px",
    color: `${theme.palette.secondary.yellow}`,
  },
}));

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "12px",
    color: "#6b7280",
    fontWeight: 400,
  },
}));
