import React from "react";
import { Box, useTheme } from "@mui/material";
import Bar from "./bar";
import Header from "../../components/Header";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header
        title="Product Performance by Emirate"
        subTitle="Revenue by Product Category across Emirates (Million AED)"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;
