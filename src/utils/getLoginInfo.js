export default () => {
  let loginInfo = localStorage.getItem('loginInfo');
  if (loginInfo){
    return JSON.parse(loginInfo)
  } else {
    return null;
  }
}