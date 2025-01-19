import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import "./styles.css";
//cards do dashboard da tela inicial do bibliotecario

export default function DashboardCard({ icon: Icon, title, value, buttonLabel, onButtonClick }) {
    return (
        <Card className="dashboard-card">
            <CardContent className="dashboard-card-content">
                <Box textAlign="center" mb={2}>
                    {Icon && <Icon style={{ fontSize: "40px", color: "#162E62" }} />}
                </Box>
                <Typography className="dashboard-card-title">
                    {title}
                </Typography>
                <Typography className="dashboard-card-value">
                    {value}
                </Typography>
                <Box textAlign="center">
                    <Button
                        className="dashboard-card-button"
                        onClick={onButtonClick}
                    >
                        {buttonLabel}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
