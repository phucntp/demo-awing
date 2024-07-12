import { Box, Button, Tab, Tabs } from "@mui/material";
import React, { useCallback, useState } from "react";
import CustomTabPanel from "../../components/tabs/CustomTabPanel";
import TabInformation from "../../components/tabs/TabInformation";
import TabSubCampaign from "../../components/tabs/TabSubCampaign";
import { dataDemo } from "../../constants/data";
import { TCampaign, TInfoCampaign } from "../../types/campaign";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DemoTab = () => {
  const [valueTab, setValueTab] = React.useState(0);
  const [dataCampaign, setDataCampaign] = useState<TCampaign>(dataDemo);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  const handleChangeInfoCampaign = useCallback(
    (key: keyof TInfoCampaign, value: string | number) => {
      if (dataCampaign.information[key]) {
        setDataCampaign((prev) => ({
          ...prev,
          information: { ...prev.information, [key]: value },
        }));
      }
    },
    [dataCampaign.information]
  );

  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button variant="contained" sx={{ margin: "12px 16px" }}>
          Submit
        </Button>
      </Box>
      <Box sx={{ borderTop: "1px solid black", padding: "10px 0" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={valueTab}
            onChange={handleChange}
            aria-label="basic tabs"
          >
            <Tab label="THÔNG TIN" {...a11yProps(0)} />
            <Tab label="CHIẾN DỊCH CON" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={valueTab} index={0}>
          <TabInformation
            handleChangeInfoCampaign={handleChangeInfoCampaign}
            infoCampaign={dataCampaign}
          />
        </CustomTabPanel>
        <CustomTabPanel value={valueTab} index={1}>
          <TabSubCampaign infoCampaign={dataCampaign} />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default DemoTab;
