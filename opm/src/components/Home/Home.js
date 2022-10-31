import { Card, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './home.css'
function Home() {
  return (
    <div style={{}}>
      <Card variant="outlined" style={{ width: "600px", height: "100vh" }}>
        <Typography textAlign="center" variant="h4">
          Hospital Name
        </Typography>
        <Typography textAlign="center">Doctor Name</Typography>
        <Box align="center" mt={5}>
          <Paper className="paper" elevation={4} sx={{ width: "100px" }}>
            <Typography variant="h5">Your Token :</Typography>
          </Paper>
        </Box>
        <Box align="center" mt={5}>
          <Paper elevation={4} sx={{ width: "100px" }}>
            <Typography variant="h5">current Token :</Typography>
          </Paper>
        </Box>
        <Box align="center" mt={5}>
          <Paper elevation={4} sx={{ width: "200px" }}>
            <Typography variant="h5">Estimated Time :</Typography>
            <Typography variant="h5">Average Time :</Typography>
          </Paper>
        </Box>
      </Card>
    </div>
  );
}

export default Home;
