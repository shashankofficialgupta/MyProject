import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Col } from "react-bootstrap";
import "../NavCard/NavCard.css";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const useStyles = makeStyles({
  root: {
    minWidth: 575,
    maxWidth: 1000,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    marginTop: "4%",
    height: 550,
    margin: "auto",
    borderRadius: "4rem"
  },
  resize: {
    fontSize: 20,
  },
  labelRoot: {
    fontSize: 14,
    fontWeight: 500,
  },
  labelFocused: {},
  List: {
    width: "100%",
    height: 200,
    display: "flex",
  },
  subList: {
    width: "90%",
    height: "80%",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    margin: "auto",
    justifyContent: "center",
    display: "flex",
    borderRadius: "3rem",
    "&:hover": {
      boxShadow: "0 8px 40px -2px #b4a7b7",
    },
    marginTop:"2rem"
  },
  subList1: {
    width: "80%",
    height: "80%",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    margin: "auto",
    justifyContent: "center",
    borderRadius: "10px",
    marginTop: "-14.3rem",
    display: "flex",
    backgroundColor: "black",
  },
  subListImage: {
    width: "25%",
    height: "48%",
    margin: "auto",
  },
});

export default function NavCard() {
  const classes = useStyles();
  const [DashboardState, handleDashboard] = useState(true);
  const [BookingsState, handleBooking] = useState(false);
  const [TransactionState, handleTransactions] = useState(false);
  const [TrackState, handleTrack] = useState(false);

  return (
    <div className="dash">
      <Card className={classes.List}>
        <Col xs={5} sm={5} md={3} className={classes.colcardList}>
          <Link to="/" onClick={() => handleDashboard(true)} style={{textDecoration:"none"}}>
            <Card className={classes.subList}>
              <Image
                src={require("../../../Images/dashboard.png")}
                className={classes.subListImage}
              />
              <span
                style={{
                  fontFamily: "var(--robo)",
                  fontSize: "1.6em",
                  color: "#9c51b6",
                  margin: "auto"
                }}
              >
                DASHBOARD
              </span>
            </Card>
          </Link>
        </Col>
        <Col xs={5} sm={5} md={3} className={classes.colcardList}>
          <Link to="/booking" onClick={() => handleBooking(true)} style={{textDecoration:"none"}}>
            <Card className={classes.subList}>
              <Image
                src={require("../../../Images/booking.png")}
                className={classes.subListImage}
              />
              <span
                style={{
                  fontFamily: "var(--robo)",
                  fontSize: "1.6em",
                  color: "#9c51b6",
                  margin: "auto",
                  textDecoration:"none"
                }}
              >
                MY BOOKINGS
              </span>
            </Card>
          </Link>
        </Col>
        <Col xs={5} sm={5} md={3} className={classes.colcardList}>
          <Link to="/transactions" onClick={() => handleTransactions(true)} style={{textDecoration:"none"}}>
            <Card className={classes.subList}>
              <Image
                src={require("../../../Images/buy.png")}
                className={classes.subListImage}
              />
              <span
                style={{
                  fontFamily: "var(--robo)",
                  fontSize: "1.6em",
                  color: "#9c51b6",
                  margin: "auto",
                  textDecoration:"none"
                }}
              >
                MY TRANSACTIONS
              </span>
            </Card>
          </Link>
        </Col>
        <Col xs={5} sm={5} md={3} className={classes.colcardList}>
          <Link to="/track" onClick={() => handleTrack(true)} style={{textDecoration:"none"}}>
            <Card className={classes.subList}>
              <Image
                src={require("../../../Images/route.png")}
                className={classes.subListImage}
              />
              <span
                style={{
                  fontFamily: "var(--robo)",
                  fontSize: "1.6em",
                  color: "#9c51b6",
                  margin: "auto",
                  textDecoration:"none"
                }}
              >
                TRACK LIVE
              </span>
            </Card>
          </Link>
        </Col>
      </Card>
    </div>
  );
}
