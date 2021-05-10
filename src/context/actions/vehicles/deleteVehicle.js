import axiosInstance from "../../../helpers/axiosInstance";
import {DELETE_VEHICLE_BEGIN, DELETE_VEHICLE_SUCCESS, DELETE_VEHICLE_ERROR} from "../../../constants/actions";
import {imageNameFromURL} from "../../../utils/vehicleUtils";
import {storage} from "../../../helpers/firebase";
import {FIREBASE_IMAGE_REF} from "../../../constants/firebase";

export default (id, images, history) => async (dispatch) => {
  try{

    dispatch({type: DELETE_VEHICLE_BEGIN})
    const response = await axiosInstance().delete(`/api/v1/vehicles/${id}`);
    if (response){
      dispatch({type: DELETE_VEHICLE_SUCCESS,payload:id})
      console.log('data deleted')
      deleteVehicleImage(JSON.parse(images))
      history.push('/vehicles')
    }
  } catch (err){
    dispatch({type:DELETE_VEHICLE_ERROR})
  }

  function deleteVehicleImage(images){
    images.forEach((image) => {
      let imageName = imageNameFromURL(image);
      console.log('to Delete '+imageName);
      let deleteRef = storage.ref(`${FIREBASE_IMAGE_REF}/${imageName}`)
      deleteRef.delete().then(()=>{
        console.log('sucessfully deleted')
      }).catch((error) => {
        console.log('image firebase delete error '+error)
      })

    })
  }
}