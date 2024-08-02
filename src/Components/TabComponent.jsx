import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Family from "./Family";
import EmployeeDetails from "./EmployeeDetails";
import { Divider, Typography } from "@mui/material";
import { Experience } from "./Experience";

const TabComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabdata = [
    { label: "Employee Details", content: <EmployeeDetails /> },
    { label: "Family", content: <Family /> },
    { label: "Experience", content: <Experience /> },
  ];

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            aria-label="basic tabs example"
            TabIndicatorProps={{ sx: { backgroundColor: "transparent" } }}
          >
            {tabdata.map((tab, index) => (
              <Tab
                sx={{
                  color: "#b1b2b4",
                  fontWeight: "600",
                  fontSize: "13px",
                  "&.Mui-selected": {
                    color: "#0b0331",
                    borderBottom: "2px solid #f59e0b",
                  },
                  "& .MuiTabs-indicator": {
                    borderColor: "#f59e0b",
                  },
                }}
                key={tab}
                label={tab.label}
                disableRipple
              />
            ))}
          </Tabs>
          <Divider sx={{ color: "#000", ml: 2, mr: 2 }} />
          {tabdata.map((tab, index) => (
            <>
              <TabPanel key={tab} value={value} index={index}>
                {tab.content}
              </TabPanel>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TabComponent;

const TabPanel = ({ value, index, children }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box pt={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
