import React from "react";
import { Button, Typography } from "@mui/material";
import "./otp.css";
import { useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box } from "@mui/system";
import Countdown from "react-countdown";
import styled from 'styled-components';

function Otp() {
  const [otp, setOtp] = React.useState("");
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  const MuiOtpInputStyled = styled(MuiOtpInput)`
  display: flex;
  gap: 110px;
  max-width: 650px;
  margin-inline: auto;
`;
  let navigate = useNavigate()
  const Submit = ()=> navigate('/')
  return (
    <div className="main"
      align="center"
      style={{
        margin:'0 auto',
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
      <div style={{ width: "90%" }}>
        <Box align="start" mb={2}>
          <Typography variant="body1" color="black" align="start">
            Enter OTP
          </Typography>
        </Box>
        <MuiOtpInputStyled value={otp} onChange={handleChange} onComplete={Submit} length={6} gap={2}/>
        <Box style={{ marginTop: "5px" }}>
          <Countdown date={Date.now() + 60000} align="start">
            <Box align="end" style={{ marginTop: "15px" }}>
              <Button size="small" variant="outlined">
                resend otp
              </Button>
            </Box>
          </Countdown>
        </Box>
      </div>
    </div>
  );
}

export default Otp;
