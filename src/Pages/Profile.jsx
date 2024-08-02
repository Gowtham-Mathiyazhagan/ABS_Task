import React from "react";
import { AvatarComponent } from "../Components/AvatarComponent";
import { Box, styled } from "@mui/system";
import TabComponent from "../Components/TabComponent";

const Profile = () => {
  return (
    <>
      <StyledBox
        sx={{
          width: { sm: "90%" },
          margin: "0 auto",
        }}
      >
        <AvatarComponent />
        <TabComponent />
      </StyledBox>
    </>
  );
};

export default Profile;

const StyledBox = styled(Box)`
  padding: 40px;
  background-color: #e8e9ea;
`;
