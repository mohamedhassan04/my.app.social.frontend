import React from "react";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "component/FlexBetween";
import WidgetWrapper from "component/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:5000/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>{" "}
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        tristique tortor id iaculis varius. Aliquam et faucibus nunc. Nulla
        tincidunt scelerisque leo non dapibus.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
