import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import trip from "../../data.json";
import "./TravelCard.css";
import { Link } from "react-router-dom";

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

const TravelCard = () => {
  const classes = useStyles();
  const [isRemove, setIsRemove] = useState(false);

  const removeTrip = () => {
    setIsRemove(true);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Trips</h1>
      <div className="travel">
        <Card className={`root ${isRemove ? "hide-travel" : ""}`}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid xs="4">
                <Link
                  to="/details"
                  style={{ cursor: "pointer", height: "100%" }}
                >
                  <img
                    src={trip.imageUrl}
                    alt={trip.TravelID}
                    style={{ maxWidth: "147px", maxHeight: "160px" }}
                  />
                </Link>
              </Grid>
              <Grid xs="4">
                <Typography className={classes.title} gutterBottom>
                  {trip.name}
                </Typography>
                <Typography className={classes.pos}>{trip.tripType}</Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {trip.TravelID}
                </Typography>
                <div style={{ display: "inline-block", marginTop: "50px" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                  >
                      <Link to='/users' style={{ textDecoration: 'none', color: 'white' }}>Buy</Link>
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => removeTrip()}
                  >
                    Remove
                  </Button>
                </div>
              </Grid>
              <Grid xs="4">
                <div className="price">{trip.price} $</div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default TravelCard;
