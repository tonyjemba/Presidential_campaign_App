//am not using the dispatches
export const addEvent = (event) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('events')
      .add({ ...event })
      .then(() => {
        dispatch({ type: 'ADD_EVENT', payload: event })
      })
      .catch((error) => {
        dispatch({ type: 'ADD_EVENT_ERROR', payload: error })
      })
  }
}


export const addNews = (news) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('news')
      .add({ ...news })
      .then(() => {
        dispatch({ type: 'ADD_NEWS' })
      })
      .catch((error) => {
        dispatch({ type: 'ADD_NEWS_ERROR', payload: error })
      })
  }
}
export const addEventHeroImage = (image) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('images')
      .doc("EventHero")
      .set({ ...image })
      .then(() => {
        dispatch({ type: 'EVENT_HEROIMAGE'})
      })
      .catch((error) => {
        dispatch({ type: 'EVENT_HEROIMAGE_ERROR', payload: error })
      })
  }
}
export const addNewsVideoHeroImage = (image) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('images')
      .doc("NewsVideoHero")
      .set({ ...image })
      .then(() => {
        dispatch({ type: 'EVENT_HEROIMAGE'})
      })
      .catch((error) => {
        dispatch({ type: 'EVENT_HEROIMAGE_ERROR', payload: error })
      })
  }
}

export const addLiveVideoHeroImage = (image) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("images")
      .doc("ZLiveVideo")
      .set({ ...image })
      .then(() => {
        dispatch({ type: "LIVE_HEROIMAGE" });
      })
      .catch((error) => {
        dispatch({ type: "LIVE_HEROIMAGE_ERROR", payload: error });
      });
  };
};
export const addStory = (story) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('stories')
      .add({ ...story })
      .then(() => {
        dispatch({ type: 'ADD_STORY' })
      })
      .catch((error) => {
        dispatch({ type: 'ADD_STORY_ERROR', payload: error })
      })
  }
}
export const addVolunteer = (volunteer) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('involved')
      .add({ ...volunteer })
      .then(() => {
        dispatch({ type: 'ADD_VOLUNTEER' })
      })
      .catch((error) => {
        dispatch({ type: 'ADD_VOLUNTEER_ERROR', payload: error })
      })
  }
}
export const addMessage = (msg) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("messages")
      .add({ ...msg })
      .then(() => {
        dispatch({ type: "ADD_STORY" });
      })
      .catch((error) => {
        dispatch({ type: "ADD_STORY_ERROR", payload: error });
      });
  };
};
export const addHomeHeroHeroImage = (image) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("HomeContent")
      .doc("AHomeHero")
      .set({ ...image })
      .then(() => {
        dispatch({ type: "EVENT_HEROIMAGE" });
      })
      .catch((error) => {
        dispatch({ type: "EVENT_HEROIMAGE_ERROR", payload: error });
      });
  };
};

export const addHomeBlueSection = (image) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("HomeContent")
      .doc("Bluesection")
      .set({ ...image })
      .then(() => {
        dispatch({ type: "EVENT_HEROIMAGE" });
      })
      .catch((error) => {
        dispatch({ type: "EVENT_HEROIMAGE_ERROR", payload: error });
      });
  };
};

export const addHomeShortNotes = (note) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("HomeContent")
      .doc("CShortNotes")
      .set({ ...note })
      .then(() => {
        dispatch({ type: "EVENT_HEROIMAGE" });
      })
      .catch((error) => {
        dispatch({ type: "EVENT_HEROIMAGE_ERROR", payload: error });
      });
  };
};

export const addPanels = (panel) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("HomeContent")
      .doc("DPanels")
      .set({ ...panel })
      .then(() => {
        dispatch({ type: "EVENT_HEROIMAGE" });
      })
      .catch((error) => {
        dispatch({ type: "EVENT_HEROIMAGE_ERROR", payload: error });
      });
  };
};
export const addFooterImage = (image) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("images")
      .doc("OFooterImage")
      .set({ ...image })
      .then(() => {
        dispatch({ type: "FOOTERIMAGE" });
      })
      .catch((error) => {
        dispatch({ type: "FOOTERIMAGE_ERROR", payload: error });
      });
  };
};
export const addAboutImage = (image) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("images")
      .doc("PAboutImage")
      .set({ ...image })
      .then(() => {
        dispatch({ type: "ABOUTIMAGE" });
      })
      .catch((error) => {
        dispatch({ type: "ABOUTIMAGE_ERROR", payload: error });
      });
  };
};
export const addMapImage = (image) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("images")
      .doc("QMapImage")
      .set({ ...image })
      .then(() => {
        dispatch({ type: "MAPIMAGE" });
      })
      .catch((error) => {
        dispatch({ type: "MAPIMAGE_ERROR", payload: error });
      });
  };
};
export const addNupImage = (image) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("images")
      .doc("RNupImage")
      .set({ ...image })
      .then(() => {
        dispatch({ type: "NUPIMAGE" });
      })
      .catch((error) => {
        dispatch({ type: "NUPIMAGE_ERROR", payload: error });
      });
  };
};
export const addUser = (user) => {
  return { type: "CURRENT_USER", payload: user } 
};
  export const prevPath = (path) => {
  return { type: "PREV_PATH", payload: path } 
  };
//d
//dELETING
// export const deleteEvent = (event) => {
//   return (dispatch, getstate, { getFirebase }) => {
//     const firestore = getFirebase().firestore();

//     firestore
//       .collection('events')
//       .doc(event.id)
//       .delete()
//       .then(() => {
//         dispatch({ type: 'EVENT_DELETED'})
//       })
//       .catch((error) => {
//         dispatch({ type: 'EVENT_DELETE_ERROR' })
//       })
//   }
// }
//updating docs ie toggling
// export const togglebool = (event) => {
//   return (dispatch, getstate, { getFirebase }) => {
//     const firestore = getFirebase().firestore();

//     firestore
//       .collection('events')
//       .doc(event.id)
//       .set(
//         {
//           ...event,
//           checked: !event.checked
//         },
//         {merge: true}
//       )
//       .then(() => {
//         dispatch({ type: 'TOGGLED'})
//       })
//       .catch((error) => {
//         dispatch({ type: 'TOGGLE_ERROR' })
//       })
//   }
// }
//sign in 
//make auth file it with its own auth reducer and add t 2 root reducer creds from input form onsubmit dispatch
/*
to redirect after sign in use the uid that is in the state after signing in import redirect from react router dom
if(uid) return <redirect to ="/dashbord"/>
*/
// export const adminSignin = (creds) => {
//   return (dispatch, getstate, { getFirebase }) => {
//     const firebase = getFirebase();

//     firebase
//       .auth()
//       .signInWithEmailAndPassword(creds.email,creds.password)
//       .then(() => {
//         dispatch({ type: 'SIGNIN'})
//       })
//       .catch((error) => {
//         dispatch({ type: 'SIGNIN_ERROR' })
//       })
//   }
// }

/*
signout
connect to store with matSt.. to get uid mapDis.. to signout
if(uid){
  //show signout (after go to login)
}else{
  show login and create acc
}
in the dashbord connect to stat and only sho it wen u have uid ir(!uid) <redirect to="./login"/>
*/
// export const adminSignout = () => {
//   return (dispatch, getstate, { getFirebase }) => {
//     const firebase = getFirebase();

//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         dispatch({ type: 'SIGNOUT'})
//       })
//       .catch((error) => {
//         dispatch({ type: 'SIGNOUT_ERROR' })
//       })
//   }
// }
//sign up ustill use the uid
// export const adminSignup = (creds) => {
//   return (dispatch, getstate, { getFirebase }) => {
//     const firebase = getFirebase();

//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(creds.email,creds.password)
//       .then(() => {
//         dispatch({ type: 'SIGNUP'})
//       })
//       .catch((error) => {
//         dispatch({ type: 'SIGUP_ERROR' })
//       })
//   }
// }
