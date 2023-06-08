// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBModal,
//   MDBModalDialog,
//   MDBModalContent,
//   MDBModalHeader,
//   MDBModalBody,
// } from "mdb-react-ui-kit";
// import SignUpForm from "./SignupForm";
// import LoginForm from "./LoginForm";

// import Auth from "../utils/auth";

// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false);

//   const closeModal = () => setShowModal(false);

//   return (
//     <>
//       <MDBNavbar expand="lg" light bgColor="light">
//         <MDBNavbarBrand href="#">Parking App</MDBNavbarBrand>

//         <MDBNavbarNav className="justify-content-end">
//           <MDBNavbarItem>
//             <Link to="/">
//               <MDBNavbarLink active aria-current="page">
//                 Home
//               </MDBNavbarLink>
//             </Link>
//           </MDBNavbarItem>
//           <MDBNavbarItem>
//             <Link to="/browse">
//               <MDBNavbarLink>Browse</MDBNavbarLink>
//             </Link>
//           </MDBNavbarItem>
//           <MDBNavbarItem>
//             <Link to="/list">
//               <MDBNavbarLink>List a Spot</MDBNavbarLink>
//             </Link>
//           </MDBNavbarItem>
//           {/* Commented out because auth isn't used yet. */}
//           {/* {Auth.loggedIn() ? (
//             <>
//               <MDBNavbarItem>
//                 <Link to="/saved">
//                   <MDBNavbarLink>See Your Spots</MDBNavbarLink>
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink onClick={Auth.logout}>Logout</MDBNavbarLink>
//               </MDBNavbarItem>
//             </>
//           ) : ( */}
//           <MDBNavbarItem>
//             <MDBNavbarLink onClick={() => setShowModal(true)}>
//               Login/Sign Up
//             </MDBNavbarLink>
//           </MDBNavbarItem>
//           {/* )} */}
//         </MDBNavbarNav>
//       </MDBNavbar>

//       {showModal && (
//         <MDBModal show={showModal} onHide={closeModal}>
//           <MDBModalDialog>
//             <MDBModalContent>
//               <MDBModalHeader>Login/Sign Up</MDBModalHeader>
//               <MDBModalBody>
//                 {/* Render your login/signup form here */}
//                 <LoginForm closeModal={closeModal} />
//                 {/* or */}
//                 <SignUpForm closeModal={closeModal} />
//               </MDBModalBody>
//             </MDBModalContent>
//           </MDBModalDialog>
//         </MDBModal>
//       )}
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
} from "mdb-react-ui-kit";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

// Removed unused import
// import Auth from "../utils/auth";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  console.log("Whats up LMAO");
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        {/* Replace this with a walter white */}
        <MDBNavbarBrand href="/">Parking App</MDBNavbarBrand>

        <MDBNavbarNav className="justify-content-end">
          <MDBNavbarItem>
            <Link to="/">
              <MDBNavbarLink active aria-current="page">
                Home
              </MDBNavbarLink>
            </Link>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <Link to="/browse">
              <MDBNavbarLink>Browse</MDBNavbarLink>
            </Link>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <Link to="/list">
              <MDBNavbarLink>List a Spot</MDBNavbarLink>
            </Link>
          </MDBNavbarItem>
          {/* Commented out because auth isn't used yet. */}
          {/* {Auth.loggedIn() ? (
            <>
              <MDBNavbarItem>
                <Link to="/saved">
                  <MDBNavbarLink>See Your Spots</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={Auth.logout}>Logout</MDBNavbarLink>
              </MDBNavbarItem>
            </>
          ) : ( */}
          <MDBNavbarItem>
            <MDBNavbarLink onClick={() => setShowModal(true)}>
              Login/Sign Up
            </MDBNavbarLink>
          </MDBNavbarItem>
          {/* )} */}
        </MDBNavbarNav>
      </MDBNavbar>

      {showModal && (
        <MDBModal show={showModal} onHide={closeModal}>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>Login/Sign Up</MDBModalHeader>
              <MDBModalBody>
                {/* Render your login/signup form here */}
                <LoginForm closeModal={closeModal} />
                {/* or */}
                <SignUpForm closeModal={closeModal} />
              </MDBModalBody>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      )}
    </>
  );
};

export default Navbar;
