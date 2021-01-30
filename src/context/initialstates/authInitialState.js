import getLoginInfo from "../../utils/getLoginInfo";

export default {
  auth: {
    isLoginOpen: true,
    loginInfo: getLoginInfo(),
    isAlert: false,
    alerts:[],
  }
}