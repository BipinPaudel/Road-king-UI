import axiosInstance from "../../../helpers/axiosInstance";
import {UPDATE_VEHICLES_BEGIN, UPDATE_VEHICLES_SUCCESS} from "../../../constants/actions";
import {storage} from "../../../helpers/firebase";
import {FIREBASE_IMAGE_REF} from "../../../constants/firebase";
import {imageNameFromURL} from "../../../utils/vehicleUtils";
import {getEpochTime} from "../../../utils/helperUtils";

export default ({
                  title,
                  category_id,
                  make_year,
                  buy_date,
                  price,
                  km_driven,
                  description,
                  images,
                }, id, oldImages,history) => dispatch => {

  const saveImage = (images) => {
    if (images && images.length > 0) {
      const imageName = `${getEpochTime()}_${images[0].name}`
      storage
          .ref(`${FIREBASE_IMAGE_REF}/${imageName}`)
          .put(images[0])
          .on("state_changed",
              (snapshot) => {
              },
              async (error) => {
              },
              async () => {
                const url = await storage.ref(FIREBASE_IMAGE_REF)
                    .child(imageName)
                    .getDownloadURL();
                saveToBackend(url ? [url] : []);
              });
    }
  }

  const deleteOldImage = (images) => {
    images.forEach((image) => {
      let imageName = imageNameFromURL(image);
      let deleteRef = storage.ref(`${FIREBASE_IMAGE_REF}/${imageName}`)
      deleteRef.delete().then(()=>{
        console.log('sucessfully deleted')
      }).catch((error) => {
        console.log('image firebase delete error '+error)
      })

    })
  }

  const saveToBackend = async (images = null) => {
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

  if (typeof (images) === "string") {
    saveToBackend(images)
  } else {
    deleteOldImage(JSON.parse(oldImages))
    saveImage(images)
  }

}

