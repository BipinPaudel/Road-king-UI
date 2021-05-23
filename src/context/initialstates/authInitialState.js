import getLoginInfo from "../../utils/getLoginInfo";

export default {
  auth: {
    loginInfo: getLoginInfo(),
    errors: [],
    loading: false
  }
}