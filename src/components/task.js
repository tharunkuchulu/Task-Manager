import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Task() {
    const [status1, setStatus1] = useState("open"); 
    const [status2, setStatus2] = useState("open"); 
    const [status3, setStatus3] = useState("open");

    const theme = {
        open: {
            buttonBg: "#ff4500",
            buttonText: "white",
            inputBg: "#ffffff",
            inputBorder: "#ccc",
        },
        completed: {
            buttonBg: "#2e8b57",
            buttonText: "white",
            inputBg: "#ffffff",
            inputBorder: "#ccc",
        },
    };

    const getCurrentStatus = (status) => (status === "open" ? theme.open : theme.completed);

    return (
        <Box sx={{ position: "relative", top: "50px" }}>
            <Typography variant="h4" color="white" gutterBottom>
                Here are your Tasks:
            </Typography>
        <Box sx={{position:'relative', top:'50px', left:'530px'}}>
            <Box padding={2} display="flex" alignItems="center" gap={18}>
                <Typography variant="h5" color="white">
                    Task 1: Python Basics
                </Typography>
                <Button
                    onClick={() => {
                        if (status1 === "open") {
                            setStatus1("completed");
                        }
                    }}
                    style={{
                        padding: "8px 15px",
                        backgroundColor: getCurrentStatus(status1).buttonBg,
                        color: getCurrentStatus(status1).buttonText,
                        border: "none",
                        borderRadius: "4px",
                        cursor: status1 === "completed" ? "not-allowed" : "pointer",
                    }}
                    disabled={status1 === "completed"} 
                >
                    {status1 === "open" ? "open" : "completed"}
                </Button>
            </Box>

            <Box padding={2} display="flex" alignItems="center" gap={13}>
                <Typography variant="h5" color="white">
                    Task 2: Classes in Python
                </Typography>
                <Button
                    onClick={() => {
                        if (status2 === "open") {
                            setStatus2("completed");
                        }
                    }}
                    style={{
                        padding: "8px 15px",
                        backgroundColor: getCurrentStatus(status2).buttonBg,
                        color: getCurrentStatus(status2).buttonText,
                        border: "none",
                        borderRadius: "4px",
                        cursor: status2 === "completed" ? "not-allowed" : "pointer",
                    }}
                    disabled={status2 === "completed"} 
                >
                    {status2 === "open" ? "open" : "completed"}
                </Button>
            </Box>

            <Box padding={2} display="flex" alignItems="center" gap={12}>
                <Typography variant="h5" color="white">
                    Task 3: Libraries in Python
                </Typography>
                <Button
                    onClick={() => {
                        if (status3 === "open") {
                            setStatus3("completed");
                        }
                    }}
                    style={{
                        padding: "8px 15px",
                        backgroundColor: getCurrentStatus(status3).buttonBg,
                        color: getCurrentStatus(status3).buttonText,
                        border: "none",
                        borderRadius: "4px",
                        cursor: status3 === "completed" ? "not-allowed" : "pointer",
                    }}
                    disabled={status3 === "completed"} 
                >
                    {status3 === "open" ? "open" : "completed"}
                </Button>
            </Box>
        </Box>
        </Box>
    );
}
