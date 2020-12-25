import {
    Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
class UserList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsersList();
  }

  getUsersList = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { classes } = this.props;

    return (
      <>
      <h1 style={{ textAlign: "center" }}>Users</h1>
        <Button
          size="small"
          variant="contained"
          style={{ marginTop: "15px", marginBottom: '15px' }}
          color="primary"
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Back
          </Link>
        </Button>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">UserName</TableCell>
                <TableCell align="left">email</TableCell>
                <TableCell align="left">address</TableCell>
                <TableCell align="left">phone</TableCell>
                <TableCell align="left">website</TableCell>
                <TableCell align="left">company</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map((user) => (
                <TableRow key={user.name}>
                  <TableCell component="th" scope="user">
                    {user.name}
                  </TableCell>
                  <TableCell align="left">{user.username}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">
                    {user.address.city} {user.address.street}{" "}
                    {user.address.suite} {user.address.suite}{" "}
                    {user.address.zipcode}
                  </TableCell>
                  <TableCell align="left">{user.phone}</TableCell>
                  <TableCell align="left">{user.website}</TableCell>
                  <TableCell align="left">{user.company.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}
export default withStyles(useStyles)(UserList);
