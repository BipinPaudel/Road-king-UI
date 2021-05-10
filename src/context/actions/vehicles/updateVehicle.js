import axiosInstance from "../../../helpers/axiosInstance";
import {UPDATE_VEHICLES_BEGIN, UPDATE_VEHICLES_SUCCESS} from "../../../constants/actions";
import {storage} from "../../../helpers/firebase";
import {FIREBASE_IMAGE_REF} from "../../../constants/firebase";

export default ({
                  title,
                  category_id,
                  make_year,
                  buy_date,
                  price,
                  km_driven,
                  description,
                  images,
                },id, history) => dispatch => {
  const saveToBackend = async (url = null) => {
    console.log('save to backend ' + category_id)
    let images = url ? [url] : []
    try {
      const res = await axiosInstance().put(`/api/v1/vehicles/${id}`, {
        title,
        category_id,
        make_year,
        buy_date,
        price,
        km_driven,
        description,
        images: images
      })
      console.log(res);
      const vehicle = res.data.data
      console.log('before calling add success reducer')
      dispatch({type: UPDATE_VEHICLES_SUCCESS, payload: vehicle})
      history.push(`/vehicles/${id}`)
    } catch (err) {
      console.log('error here')
      console.log(err);
    }
  }
  dispatch({type: UPDATE_VEHICLES_BEGIN})
  saveToBackend();

  // if (images && images.length > 0) {
  //   storage
  //       .ref(`${FIREBASE_IMAGE_REF}/${images[0].name}`)
  //       .put(images[0])
  //       .on("state_changed",
  //           (snapshot) => {
  //           },
  //           async (error) => {
  //           },
  //           async () => {
  //             const url = await storage.ref(FIREBASE_IMAGE_REF)
  //                 .child(images[0].name)
  //                 .getDownloadURL();
  //             saveToBackend(url);
  //           });
  // } else {
  //   saveToBackend()
  // }
}