import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import "../Dashboard/Dashboard.css";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Select from "react-select";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  // root: {
  //   minWidth: 575,
  //   maxWidth: 1000,
  //   transition: "0.3s",
  //   boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  //   "&:hover": {
  //     boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
  //   },
  //   marginTop: "4%",
  //   height: 550,
  //   margin: "auto",
  //   borderRadius: "4rem",
  // },
  resize: {
    fontSize: 20,
  },
  labelRoot: {
    fontSize: 14,
    fontWeight: 500,
  },
});

var placeSearch, autocomplete;

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  const google = window.google;
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */ (document.getElementById("autocomplete")),
    { types: ["geocode"] }
  );
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  const google = window.google;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy,
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}

export default function Dashboard() {
 
  const classes = useStyles();

  const From = [
    {
      value: "1",
      label: "Patel Nagar",
    },
    {
      value: "2",
      label: "MP Nagar",
    },
  ];
  const To = [
    {
      value: "1",
      label: "Patel Nagar",
    },
    {
      value: "2",
      label: "MP Nagar",
    },
  ];
  return (
    <div>
      <Card  className="matches">
        <Image
          src={require("../../../Images/Vanwale1.png")}
          className="subList2"
        />
        <Image
          src={require("../../../Images/Frame 1.png")}
          className="subList3"
        />
        <Image
          src={require("../../../Images/Frame 2.png")}
          className="subList4"
        />
        <Image
          src={require("../../../Images/Frame 3.png")}
          className="subList5"
        />
        <CardContent className="cardcontentloc">
          <Form
            style={{ display: "inline-block" }}
            // onSubmit={this.onSubmit}
            className="loginform"
          >
            <FormGroup>
              <Col xs={12} sm={10} md={10} className="colloginform">
                {/* <Row className="colloginlabel">
                  <h2 style={{ margin: "auto", marginBottom: "5%" }} >
                    Start Your Booking
                  </h2>
                </Row> */}
                <Row
                  xs={12}
                  sm={10}
                  md={8}
                  style={{ width: "100%" }}
                  className=""
                >
                  <Select
                    style={{ container: () => ({ width: "100%" }) }}
                    options={From}
                    placeholder="From"
                  />
                </Row>
                <Row
                  xs={12}
                  sm={10}
                  md={8}
                  className=""
                  style={{ marginTop: "10%", width: "100%" }}
                >
                  <Select
                    style={{ container: () => ({ width: "100%" }) }}
                    options={To}
                    placeholder="To"
                  />
                </Row>
                <Row xs={6} sm={5} md={5} className="rowbtnlogin">
                  <Link to="/quotes" className="quotes">
                    <Button
                      variant="contained"
                      color="primary"
                      className="btnlogin"
                      type="submit"
                    >
                      Search
                    </Button>
                  </Link>
                </Row>
              </Col>
            </FormGroup>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
