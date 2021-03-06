import { Box } from "@mui/system";
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { blue, pink, green } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SocialMedia = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tooltip title="Facebook" placement="left">
        <IconButton>
          <FacebookIcon fontSize="large" sx={{ color: blue[500] }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Instagram" placement="top">
        <IconButton>
          <InstagramIcon fontSize="large" sx={{ color: pink[500] }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="WhatsApp" placement="right">
        <IconButton>
          <WhatsAppIcon fontSize="large" sx={{ color: green[500] }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default SocialMedia;
