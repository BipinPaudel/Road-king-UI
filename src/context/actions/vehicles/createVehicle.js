import axiosInstance from "../../../helpers/axiosInstance";
import {ADD_VEHICLES_BEGIN, ADD_VEHICLES_ERROR, ADD_VEHICLES_SUCCESS} from "../../../constants/actions";
import {storage} from "../../../helpers/firebase";
import {FIREBASE_IMAGE_REF} from "../../../constants/firebase";
import {getEpochTime} from "../../../utils/helperUtils";
import {imageNameFromURL} from "../../../utils/vehicleUtils";

export default ({
    title,
    category_id,
    make_year,
    buy_date,
    price,
    km_driven,
    description,
    images
                },history) => dispatch => {

  const deleteOldImage = (images) => {
    images.forEach((image) => {
      let imageName = imageNameFromURL(image);
      let deleteRef = storage.ref(`${FIREBASE_IMAGE_REF}/${imageName}`)
      deleteRef.delete().then(()=>{
      })
    })
  }

  const saveToBackend = async (url = null) => {
    console.log('save to backend '+category_id)
    let images = url? [url]: []
    try {
      const res = await axiosInstance().post('/api/v1/vehicles',{
        title,
        category_id,
        make_year,
        buy_date,
        price,
        km_driven,
        description,
        images:images
      })
      const vehicle = res.data.data
      dispatch({type:ADD_VEHICLES_SUCCESS, payload: vehicle})
      history.push('/vehicles')
    } catch (err) {
      dispatch({type: ADD_VEHICLES_ERROR, payload: err.response.data.errors})
      deleteOldImage(images)
    }
  }
  dispatch({type:ADD_VEHICLES_BEGIN})
  if (images && images.length > 0){
    const imageName = `${getEpochTime()}_${images[0].name}`
    storage
        .ref(`${FIREBASE_IMAGE_REF}/${imageName}`)
        .put(images[0])
        .on("state_changed",
            (snapshot) => {},
            async (error) => {},
            async () => {
              const url = await storage.ref(FIREBASE_IMAGE_REF)
                  .child(imageName)
                  .getDownloadURL();
              saveToBackend(url);
            });
  } else {
    saveToBackend()
  }
}