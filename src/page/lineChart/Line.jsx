import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Abu Dhabi",
    color: "hsl(4, 70%, 50%)",
    data: [
      { x: "Jan", y: 147 },
      { x: "Feb", y: 125 },
      { x: "Mar", y: 156 },
      { x: "Apr", y: 165 },
      { x: "May", y: 153 },
      { x: "Jun", y: 172 },
      { x: "Jul", y: 168 },
      { x: "Aug", y: 182 },
      { x: "Sep", y: 191 },
      { x: "Oct", y: 181 },
      { x: "Nov", y: 185 },
      { x: "Dec", y: 194 },
    ],
  },
  {
    id: "Dubai",
    color: "hsl(205, 70%, 50%)",
    data: [
      { x: "Jan", y: 158 },
      { x: "Feb", y: 162 },
      { x: "Mar", y: 170 },
      { x: "Apr", y: 179 },
      { x: "May", y: 175 },
      { x: "Jun", y: 185 },
      { x: "Jul", y: 183 },
      { x: "Aug", y: 189 },
      { x: "Sep", y: 197 },
      { x: "Oct", y: 187 },
      { x: "Nov", y: 199 },
      { x: "Dec", y: 201 },
    ],
  },
  {
    id: "Sharjah",
    color: "hsl(39, 70%, 50%)",
    data: [
      { x: "Jan", y: 92 },
      { x: "Feb", y: 85 },
      { x: "Mar", y: 96 },
      { x: "Apr", y: 105 },
      { x: "May", y: 103 },
      { x: "Jun", y: 112 },
      { x: "Jul", y: 108 },
      { x: "Aug", y: 122 },
      { x: "Sep", y: 131 },
      { x: "Oct", y: 121 },
      { x: "Nov", y: 125 },
      { x: "Dec", y: 134 },
    ],
  },
  {
    id: "Ajman",
    color: "hsl(179, 70%, 50%)",
    data: [
      { x: "Jan", y: 45 },
      { x: "Feb", y: 42 },
      { x: "Mar", y: 48 },
      { x: "Apr", y: 53 },
      { x: "May", y: 51 },
      { x: "Jun", y: 56 },
      { x: "Jul", y: 54 },
      { x: "Aug", y: 61 },
      { x: "Sep", y: 65 },
      { x: "Oct", y: 60 },
      { x: "Nov", y: 62 },
      { x: "Dec", y: 67 },
    ],
  },
];

const Line = ({isDahboard = false}) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDahboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.0f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard ? null : "Month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard ? null : "Revenue (Million AED)",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line; 
 