import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";

const data = [
  {
    id: "Electronics",
    label: "Electronics & Smart Devices",
    value: 2390,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Perfumes",
    label: "Perfumes & Cosmetics",
    value: 1700,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "Textiles",
    label: "Textiles & Fashion",
    value: 3220,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "Gold",
    label: "Gold & Jewelry",
    value: 5030,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "Services",
    label: "Business Services",
    value: 5840,
    color: "hsl(344, 70%, 50%)",
  },
];

const Pie = ({ isDashbord = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashbord ? "250px" : "75vh" }}>
      <ResponsivePie
        data={data}
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
              borderRadius: 4,
              padding: 12,
            },
          },
        }}
        margin={
          isDashbord
            ? { top: 20, right: 20, bottom: 20, left: 20 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashbord ? 0.6 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLabels={true}
        arcLabel={d => `${d.value}`}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        enableArcLinkLabels={!isDashbord}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        isInteractive={true}
        motionConfig="gentle"
        transitionMode="startAngle"
        legends={
          isDashbord
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.primary,
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: theme.palette.text.primary,
                      },
                    },
                  ],
                },
              ]
        }
      />
    </Box>
  );
};

export default Pie; 