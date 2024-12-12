import { Box, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Line from "./Line";
import Header from "../../components/Header";

const LineChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Emirates Revenue" subTitle="Monthly Revenue by Emirate (Million AED)" />
      <Line />
    </Box>
  );
};

export default LineChart;
