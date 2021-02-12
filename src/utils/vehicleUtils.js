export const extractImagesFromVehicle = ({images}) => {
  if (images && JSON.parse(images).length > 0) {
    return JSON.parse(images)
  } else {
    return ["https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"]
  }
}