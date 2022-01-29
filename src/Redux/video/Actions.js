export const addVideo = (video) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection('videos')
      .add({ ...video })
      .then(() => {
        dispatch({ type: 'ADD_VIDEO'})
      })
      .catch((error) => {
        dispatch({ type: 'ADD_VIDEO_ERROR', payload: error })
      })
  }
}

export const addPublicVideo = (video) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("Public_Videos")
      .doc(video.id)
      .set({ ...video })
      .then(() => {
        firestore
          .collection("videos")
          .doc(video.id)
          .set({ ...video, published: true }, { merge: true });
      } )
     
  };
};

