import React, {useContext, useEffect} from "react";
import VehicleDetailView from "../../../layout/Vehicles/Detail";
import getVehicleDetail from "../../../context/actions/vehicles/getVehicleDetail";
import {GlobalContext} from "../../../context/Provider";
import {useHistory, useParams} from "react-router-dom";
import {Header} from "../../index";
import deleteVehicle from "../../../context/actions/vehicles/deleteVehicle"
import getNotification from "../../../context/actions/notiication/getNotification";
import NotificationListView from "../../../layout/Notification/List";
import deleteNotification from "../../../context/actions/notiication/deleteNotification";

const VehicleDetailContainer = () => {
  const {vehiclesState, vehiclesDispatch} = useContext(GlobalContext);
  const {notificationState, notificationDispatch} = useContext(GlobalContext);
  const history = useHistory();
  const {id} = useParams();
  const {vehicle, deleteVehicle: {loading:deleteVehicleLoading}} = vehiclesState;
  const {notification} = notificationState;

  const deleteSingleVehicle = (id) => {
    if (window.confirm('Are you sure you want to delete this data?')){
      deleteVehicle(id, vehicle.images, history)(vehiclesDispatch);
    }
  }
  useEffect(() => {
    if (id) {
      getVehicleDetail(history, id)(vehiclesDispatch);
      getNotification(history, id)(notificationDispatch);
    }
  }, []);

  const deleteNotificationItem = (id) => {
    if(id && window.confirm('Are you sure you want to delete this data?')){
      deleteNotification(id)(notificationDispatch);
    }
  }

  return (
      <div>
        <Header/>
        <VehicleDetailView vehicle={vehicle} deleteVehicle={deleteSingleVehicle}/>
        <NotificationListView vehicle={vehicle} notification={notification} deleteNotification={deleteNotificationItem}/>
      </div>

  )
}

export default VehicleDetailContainer;