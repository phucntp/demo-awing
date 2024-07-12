import { Box, Button, Card, CardContent } from "@mui/material";
import { TSubCampaign } from "../../types/campaign";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useMemo } from "react";

interface TProps {
  infoSubCampaign: TSubCampaign;
  activeCamp?: boolean;
  handleClick?: () => void;
}

const CardSubCampaign = ({
  infoSubCampaign,
  activeCamp,
  handleClick,
}: TProps) => {
  const getToTalQuantity = useMemo(() => {
    if (infoSubCampaign?.ads?.length) {
      return infoSubCampaign.ads.reduce(
        (accumulator, currentValue) =>
          accumulator + (currentValue.quantity || 0),
        0
      );
    }
    return 0;
  }, [infoSubCampaign]);

  return (
    <Button onClick={() => handleClick && handleClick()}>
      <Card
        sx={{
          width: 275,
          border: activeCamp ? "1px solid blue" : "1px solid gray",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: "8px 0",
              alignItems: "center",
            }}
          >
            <Box>{infoSubCampaign.name ?? ""}</Box>
            <CheckCircleIcon
              fontSize="small"
              color={infoSubCampaign.status ? "success" : "disabled"}
            />
          </Box>
          <Box>{getToTalQuantity}</Box>
        </CardContent>
      </Card>
    </Button>
  );
};

export default CardSubCampaign;
