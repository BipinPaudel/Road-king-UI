import {FIREBASE_IMAGE_REF} from "../constants/firebase";

export const extractImagesFromVehicle = ({images}) => {
  if (images && JSON.parse(images).length > 0) {
    return JSON.parse(images)
  } else {
    return ["https://firebasestorage.googleapis.com/v0/b/vehicle-tracker-97ecf.appspot.com/o/vehicleimages%2Fno-image-available-sign-internet-600w-261719003.jpg?alt=media&token=67cb8c6e-93e7-4a07-b56c-69069588bd72"]
  }
}

export const vehicleYearList = () => {
  let max = new Date().getFullYear()
  let years = []
  for (let i = max; i > max - 20; i--) {
    years.push({text: i.toString(), value: i.toString(), key: i.toString()})
  }
  return years;
}

export const categoriesToOptions = (categories, vehicle) => {
  return categories.map(
      cat => {
        return {
          text: cat.title,
          value: cat.id,
          key: cat.id.toString(),
        }
      });
}

export const imageNameFromURL = (image) => {
  let initialIndex = image.lastIndexOf(FIREBASE_IMAGE_REF)
  let finalIndex = image.lastIndexOf('?')
  return image.substring(initialIndex + FIREBASE_IMAGE_REF.length+3, finalIndex)
}