import React from "react";
import { Box } from "@mui/material";
import { usePageData } from '../pages/PageContext';

export default function BasicBox(props) {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  
  return (
    <Box
      sx={{
        height: props.config.height || 100,
        width: "100%",
        bgcolor: "background.paper", // blank content with background
        border: "0px solid",
        borderColor: "divider",
        borderRadius: 1,
      }}
    />
  );
}
