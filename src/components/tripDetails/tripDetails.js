import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import trip from "../../data.json";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    marginTop: "80px",
    padding: "10px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  hideTravel: {
    display: "none",
  },
});
class TripDetails extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg">
        <Button
          size="small"
          variant="contained"
          style={{ marginTop: '30px' }}
          color="primary">
          <Link to="/" style={{ textDecoration: "none", color: "white", }}>
            Back
          </Link>
        </Button>
        <Card style={{ marginTop: "100px" }}>
          <CardContent style={{ paddingBottom: "0" }}>
            <Grid container spacing={2}>
              <Grid md="6">
                <img
                  src={trip.imageUrl}
                  alt={trip.TravelID}
                  style={{ maxWidth: "95%", maxHeight: "100%" }}
                />
              </Grid>
              <Grid md="6">
                <Typography className={classes.title} gutterBottom>
                  {trip.name}
                </Typography>
                <Typography className={classes.pos}>{trip.tripType}</Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {trip.TravelID}
                </Typography>
                <Typography>
                  <strong>price:</strong> {trip.price} $
                </Typography>
                <Typography component="p">
                  <strong>description:</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum
                </Typography>
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}

                  >
                      <Link to='/users' style={{ textDecoration: 'none', color: 'white' }}>Buy</Link>
                  </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
export default withStyles(useStyles)(TripDetails);
