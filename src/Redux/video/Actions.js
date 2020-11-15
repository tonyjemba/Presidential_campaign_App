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