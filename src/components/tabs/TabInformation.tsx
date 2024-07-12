import { FormControl, TextField } from "@mui/material";
import { TCampaign, TInfoCampaign } from "../../types/campaign";
import { TMessageError } from "../../types/message";

interface TProps {
  messageError?: TMessageError;
  infoCampaign?: TCampaign;
  handleChangeInfoCampaign?: (
    key: keyof TInfoCampaign,
    value: string | number
  ) => void;
}

const TabInformation = ({
  messageError,
  infoCampaign,
  handleChangeInfoCampaign,
}: TProps) => {
  return (
    <FormControl className="w-full">
      <TextField
        error={!!messageError?.errName}
        id="standard-error-helper-text-name"
        label="Tên chiến dịch"
        helperText={messageError?.errName}
        variant="standard"
        required
        onChange={(e) => {
          if (handleChangeInfoCampaign) {
            handleChangeInfoCampaign("name", e.target.value);
          }
        }}
        value={infoCampaign?.information?.name}
      />
      <TextField
        error={!!messageError?.errDescription}
        id="standard-error-helper-text-description"
        label="Mô tả"
        helperText={messageError?.errDescription}
        variant="standard"
        value={infoCampaign?.information?.describe}
        onChange={(e) => {
          if (handleChangeInfoCampaign) {
            handleChangeInfoCampaign("describe", e.target.value);
          }
        }}
      />
    </FormControl>
  );
};

export default TabInformation;
