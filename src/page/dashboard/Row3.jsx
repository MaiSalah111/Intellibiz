import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../pieChart/pie";
import React from "react";
import Bar from "../barChart/bar";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} spacing={2} mt={2}>
      <Paper sx={{ flexGrow: 1, height: "280px" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Revenue by Category
        </Typography>
        <Box height="250px">
          <Pie isDashbord={true} />
        </Box>
      </Paper>

      <Paper sx={{ flexGrow: 1, height: "280px" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Product Performance
        </Typography>
        <Box height="250px">
          <Bar isDashbord={true} />
        </Box>
      </Paper>
    </Stack>
  );
};

export default Row3;
