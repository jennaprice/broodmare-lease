import React from 'react';
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid container justify="space-evenly" xs={12}>
          <Button variant="contained" color="primary">
            Item One
          </Button>

          <Button variant="contained" color="primary">
            Item Two
          </Button>

          <Button variant="contained" color="primary">
            Item Three
          </Button>

          <Button variant="contained" color="primary">
            Item Four
          </Button>
        </Grid>
      </Grid>
    );
  }
};

export default Navbar;
