import React, { useEffect, useState } from "react";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { geoFeatures } from "../data/geoFeatures";
import { ResponsiveChoropleth } from "@nivo/geo";
import { scaleQuantize } from "d3-scale";
import axios from "axios";

const MapChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7061/api/Order/order-counts"
        );
        const transformedData = response.data.map((order) => ({
          id: order.countryName,
          value: order.totalOrders,
        }));

        console.log("Transformed Data:", transformedData);

        const fullData = geoFeatures.features.map((feature) => {
          const countryData = transformedData.find(
            (order) => order.id === feature.properties.name
          );
          return {
            id: feature.properties.name,
            value: countryData ? countryData.value : 0,
          };
        });

        console.log("Full Data with Zero Values:", fullData);
        setData(fullData);
      } catch (err) {
        console.error(
          "Error fetching data:",
          err.response ? err.response.data : err.message
        );
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const minValue = Math.min(...data.map((d) => d.value), 1);
  const maxValue = Math.max(...data.map((d) => d.value), 200);

  const colorScale = scaleQuantize()
    .domain([0, maxValue])
    .range(["#a4d3e2", "#007bff", "#003f8a"]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div style={{ height: "500px", width: "100%", overflow: "hidden" }}>
      <ResponsiveChoropleth
        data={data}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={colorScale}
        domain={[minValue, maxValue]}
        unknownColor="#e3f2fd"
        label="properties.name"
        valueFormat=".2s"
        projectionType="mercator"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#d1e3fc"
        borderWidth={0.5}
        borderColor="#0056b3"
        isInteractive={false}
        enableZoom={false}
        enablePan={false}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 20,
            items: [
              {
                title: "Total Orders",
                value: "Count",
                color: "#007bff",
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default MapChart;
