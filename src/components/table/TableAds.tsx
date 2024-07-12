import { Box, Button } from "@mui/material";
import { TAds } from "../../types/campaign";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface TProps {
  ads: TAds[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Tên quảng cáo", width: 400 },
  { field: "quantity", headerName: "Số lượng", width: 250 },
];

const TableAds = ({ ads }: TProps) => {
  return (
    <Box sx={{ padding: "20px 0" }}>
      <Box
        sx={{
          color: "#000000",
          display: "flex",
          padding: "0 0 20px 0",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Box>Danh sách quảng cáo</Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button size="small" color="primary" variant="contained">
            Thêm
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button size="small" color="error" variant="contained">
            Xóa
          </Button>
        </Box>
      </Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={ads.map((ad, index) => ({ ...ad, id: index }))}
          columns={columns}
          checkboxSelection
        />
      </div>
    </Box>
  );
};

export default TableAds;
