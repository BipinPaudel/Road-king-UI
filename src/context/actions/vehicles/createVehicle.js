import axiosInstance from "../../../helpers/axiosInstance";
import {ADD_VEHICLES_SUCCESS} from "../../../constants/actions";
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
    images
                }) => dispatch => {
  const saveToBackend = (url = null) => {
    let images = url? [url]: []
    try {
      const res = axiosInstance().post('/api/v1/vehicles',{
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
    } catch (err) {

    }
  }

  if (images && images.length > 0){
    storage
        .ref(`${FIREBASE_IMAGE_REF}/${images[0].name}`)
        .put(images[0])
        .on("state_changed",
            (snapshot) => {},
            async (error) => {},
            async () => {
              const url = await storage.ref(FIREBASE_IMAGE_REF)
                  .child(images[0].name)
                  .getDownloadURL();
              saveToBackend(url);
            });
  } else {
    saveToBackend()
  }
}