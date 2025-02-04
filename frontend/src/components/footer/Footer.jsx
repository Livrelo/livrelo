import React from "react";
import { Box, Typography } from "@mui/material";
import "./styles.css";

export default function Footer() {
    return (
        <Box className="footer">
            <Typography className="footer-text">
                © {new Date().getFullYear()} LIVRELO.
            </Typography>
        </Box>
    );
}
