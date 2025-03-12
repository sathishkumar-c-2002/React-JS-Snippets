// Suggested code may be subject to a license. Learn more: ~LicenseLog:2569825959.
import React, { useState } from "react";
import { Container, Paper, Typography, Box, Button } from "@mui/material";

const Home = () => {
  const [defaultValue, setDefaultValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleNumberClick = (number) => {
    if (defaultValue === "0") {
      setDefaultValue(number.toString());
    } else {
      setDefaultValue(defaultValue + number.toString());
    }
  };

  const handleOperatorClick = (op) => {
    if (previousValue === null) {
      setPreviousValue(parseFloat(defaultValue));
      setOperator(op);
      setDefaultValue("0");
    } else {
      handleEqaulClick();
      setDefaultValue(parseFloat(defaultValue));
      setOperator(op);
      setDefaultValue("0");
    }
  };

  const handleEqaulClick = () => {
    if (previousValue !== null && operator) {
      const currentValue = parseFloat(defaultValue);
      let result;

      switch (operator) {
        case "+":
          result = previousValue + currentValue;
          break;
        case "-":
          result = previousValue - currentValue;
          break;
        case "*":
          result = previousValue * currentValue;
          break;
        case "/":
          result = previousValue / currentValue;
          break;
        default:
          return;
      }

      setDefaultValue(result.toString());
      setPreviousValue(null);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDefaultValue("0");
    setOperator(null);
    setPreviousValue(null);
  };

  const handleDecimalClick = () => {
    if (!defaultValue.includes(".")) {
      setDefaultValue(defaultValue + ".");
    }
  };
  return (
    <Container maxWidth="xs" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Box sx={{ mb: 2, textAlign: "right", p: 1, bgcolor: "#f0f0f0" }}>
          <Typography
            variant="h5"
            align="right"
            style={{
              marginBottom: "10px",
              wordWrapL: "break-word",
              minHeight: "40px",
            }}
          >
            {defaultValue}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Button variant="outlined" onClick={() => handleNumberClick(7)}>
              7
            </Button>
            <Button variant="outlined" onClick={() => handleNumberClick(8)}>
              8
            </Button>
            <Button variant="outlined" onClick={() => handleNumberClick(9)}>
              9
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOperatorClick("/")}
            >
              /
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Button variant="outlined" onClick={() => handleNumberClick(4)}>
              4
            </Button>
            <Button variant="outlined" onClick={() => handleNumberClick(5)}>
              5
            </Button>
            <Button variant="outlined" onClick={() => handleNumberClick(6)}>
              6
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOperatorClick("*")}
            >
              *
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Button variant="outlined" onClick={() => handleNumberClick(1)}>
              1
            </Button>
            <Button variant="outlined" onClick={() => handleNumberClick(2)}>
              2
            </Button>
            <Button variant="outlined" onClick={() => handleNumberClick(3)}>
              3
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOperatorClick("-")}
            >
              -
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Button variant="outlined" onClick={handleDecimalClick}>
              .
            </Button>
            <Button variant="outlined" onClick={() => handleNumberClick(0)}>
              0
            </Button>
            <Button variant="outlined" onClick={() => handleClearClick()}>
              C
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOperatorClick("+")}
            >
              +
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handleEqaulClick}
            >
              =
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
