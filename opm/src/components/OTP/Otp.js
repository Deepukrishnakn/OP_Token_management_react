import React from "react";
import { Button, Typography } from "@mui/material";
import "./otp.css";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box } from "@mui/system";
import Countdown from "react-countdown";

function Otp() {
  const [otp, setOtp] = React.useState("");
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  return (
    <div
      align="center"
      style={{
        background: "",
        width: "400px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "solid",
        borderColor: "silver",
        borderWidth: "1px",
        borderRadius: "5px",
      }}
    >
      <div style={{ width: "210px" }}>
        <Box align="start" mb={2}>
          <Typography variant="body1" color="black" align="start">
            Enter OTP
          </Typography>
        </Box>
        <MuiOtpInput value={otp} onChange={handleChange} />
        <Box style={{marginTop:'5px'}}>
          <Countdown date={Date.now() + 60000} align='start' >
            <Box align='end' style={{marginTop:'15px'}}>
              <Button size='small' variant='outlined'>resend otp</Button>
            </Box>
          </Countdown>
        </Box>
      </div>
    </div>
  );
}

export default Otp;
