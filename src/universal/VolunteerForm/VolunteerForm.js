import React, { useState,useEffect } from "react";
import { Typography, Button, Modal, Spin } from "antd";
import { addUser } from "../../Redux/Admin/Actions";
import { connect } from "react-redux";
import firebase from "../../base";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;
const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
};
const VolunteerForm = ({ addUser }) => {

  const [isSignedIn, setIsSignedIn] = useState(false);


  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: async (result, ) => {
       
        const userInfo = result.additionalUserInfo;
        if (userInfo.isNewUser && userInfo.providerId === "password") {
          try {
            await result.user.sendEmailVerification().then(() => {
               Modal.info({
                 title: "Sign-in Email sent",
                 content: `A sign-in email with additional instructions was sent to ${
                   firebase.auth().currentUser.email
                 } Check your email to complete sign-in.`,
               });
            });
           
          } catch (e) {
            Modal.error({
              title: "Error",
              content: `${e}`,
            });
          }
        }

        return false;
      },
      
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
  },[]);

  if (!isSignedIn) {
    
    return (
      <div className="w-100 mt5 mb6 ">
        
        <div className=" w-100 tc">
          <Title level={1} style={{ fontWeight: "bolder" }}>
            Please Sign in to Volunteer.
          </Title>
        </div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
        <div className="w-100 flex justify-center">
          <div className="mt5 w-75 tc">
            <div style={{ fontWeight: "lighter" }}>
              Thank you for joining our campaign to elect Kyagulanyi. By
              providing your details you consent to recieve recurring text
              messages from Kyagulanyi for president 2021.
              <br />
              Terms and Conditions and Privacy policy.
            </div>
          </div>
        </div>
      </div>
    );
  }
  if(firebase.auth().currentUser.emailVerified ){
addUser({
   verified: firebase.auth().currentUser.emailVerified,
   email: firebase.auth().currentUser.email,
   name: firebase.auth().currentUser.displayName,
   phoneNumber: firebase.auth().currentUser.phoneNumber,
   photoUrl: firebase.auth().currentUser.photoURL
 });
  }
 
    return (
      <div className="w-100 tc mt6 mb6">
        {firebase.auth().currentUser.emailVerified ? (
          <div>
            <Title level={4} style={{ fontWeight: "lighter" }}>
              Hello {firebase.auth().currentUser.displayName} ! <br />
              Thank You For Supporting Kyagulanyi.
              <br />
              You are a Volunteer!
            </Title>
            <div className="mt4 mb3">SignOut to opt-out</div>
            <Button type="primary" onClick={() => { firebase.auth().signOut();
            addUser(null)}}>
              Sign Out
            </Button>
          </div>
        ) : (
          <div>
            <Spin indicator={antIcon} />
            <Title level={4} style={{ fontWeight: "lighter" }}>
              waiting to verify your email...
            </Title>
          </div>
        )}
      </div>
    );
};


export  default  connect(null,mapDispatchToProps)(VolunteerForm);
