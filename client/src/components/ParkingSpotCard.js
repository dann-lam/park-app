import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

export const ParkingSpotCard = ({ ParkingSpot }) => {
  if (!ParkingSpot) {
    return <h1>No Parking Spot found!</h1>;
  }
  // Add logic to parse the dateStarts and dateEnds.
  const spotDetailsPath = `/spotdetails/${ParkingSpot._id}`;

  // change date to local time
  const formattedDateStart = new Date(
    ParkingSpot.dateStart
  ).toLocaleDateString();
  const formattedDateEnd = new Date(ParkingSpot.dateEnd).toLocaleDateString();

  const imageContext = require.context(
    "../../public/images/user_uploaded",
    false,
    /\.(jpg|jpeg)$/
  );
  const imagePaths = imageContext.keys().map(imageContext);

  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  const randomImagePath = imagePaths[randomIndex];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <MDBCard
        className="text-center text-white h-100 m-2"
        style={{
          maxHeight: "550px",
          maxWidth: "475px",
          minHeight: "475px",
          minWidth: "400px",
        }}
      >
        {/* {
          maxHeight: "350px",
          maxWidth: "350px",
          minHeight: "75%",
          minWidth: "75%",
        } */}
        {/* style={{ maxWidth: "30rem", backgroundColor: "#1565C0" }} */}
        <Link to={spotDetailsPath}>
          <MDBCardImage
            className="rounded-top-8"
            position="top"
            src={randomImagePath}
            alt="Random"
            height="350px"
            width="350px"
            object-fit="cover"
          ></MDBCardImage>

          {/* <img
            id="random-image"
            height="350px"
            width="350px"
            object-fit="cover"
            object-position="center"
          /> */}

          <MDBCardBody>
            <MDBCardTitle className="text-start fw-bold text-dark">
              {ParkingSpot.name}
            </MDBCardTitle>
            <MDBCardText className="text-start text-muted">{`${ParkingSpot.streetAddress}, ${ParkingSpot.zipcode}`}</MDBCardText>
            <MDBCardText className="text-start text-muted">{`${formattedDateStart} - ${formattedDateEnd}`}</MDBCardText>
            {/* <MDBCardText className="text-start text-muted">
              {ParkingSpot.description}
            </MDBCardText> */}
            <MDBCardText className="text-start fw-bold text-dark">
              ${ParkingSpot.price} / day
            </MDBCardText>
          </MDBCardBody>
        </Link>
      </MDBCard>
    </motion.div>
  );
};
