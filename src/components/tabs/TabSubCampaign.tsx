import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { TMessageError } from "../../types/message";
import { TCampaign, TSubCampaign } from "../../types/campaign";
import CardSubCampaign from "../card/CardSubCampaign";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { useEffect, useState } from "react";
import { Label } from "@mui/icons-material";
import TableAds from "../table/TableAds";

interface TProps {
  messageError?: TMessageError;
  infoCampaign?: TCampaign;
}

const TabSubCampaign = ({ messageError, infoCampaign }: TProps) => {
  const [activeSubCamp, setActiveSubCamp] = useState<TSubCampaign>();
  const [activeKey, setActiveKey] = useState(0);

  useEffect(() => {
    setActiveSubCamp(infoCampaign?.subCampaigns?.[0]);
  }, [infoCampaign]);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <Button>
          <AddCircleRoundedIcon fontSize="large" color="info" />
        </Button>
        <Box sx={{ display: "flex", gap: "8px" }}>
          {!!infoCampaign?.subCampaigns?.length &&
            infoCampaign.subCampaigns.map((subCam, index) => {
              return (
                <CardSubCampaign
                  key={`${subCam.name || ""}-${index}`}
                  infoSubCampaign={subCam}
                  activeCamp={activeKey === index}
                  handleClick={() => setActiveKey(index)}
                />
              );
            })}
        </Box>
      </Box>
      <Box sx={{ display: "flex", padding: "24px 0", width: "100%" }}>
        <Box sx={{ width: "50%", padding: "0 20px 0 0" }}>
          <TextField
            error={!!messageError?.errName}
            id="standard-error-helper-text-name"
            label="Tên chiến dịch con"
            helperText={messageError?.errName}
            variant="standard"
            required
            value={activeSubCamp?.name}
            fullWidth
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <FormControlLabel
            control={<Checkbox checked={activeSubCamp?.status} />}
            label="Đang hoạt động"
          />
        </Box>
      </Box>
      <TableAds ads={activeSubCamp?.ads || []} />
    </Box>
  );
};

export default TabSubCampaign;
