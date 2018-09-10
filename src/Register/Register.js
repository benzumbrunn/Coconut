import React from "react";
import ReactDOM from "react-dom";
import { Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper>Test</Paper>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary">
            Register
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
