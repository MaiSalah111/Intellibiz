import React from "react";
import { Box, useTheme } from "@mui/material";
import Pie from "./pie";
import Header from "../../components/Header";

const PieChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header
        title="Revenue Distribution"
        subTitle="Revenue Share by Product Category (Million AED)"
      />
      <Pie />
    </Box>
  );
};

export default PieChart;
