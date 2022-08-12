import jwtDecode from 'jwt-decode';

function AuthService() {
  let dateNow = new Date();
  const token = localStorage.getItem('accessToken')
    ? JSON.stringify(localStorage.getItem('accessToken'))
    : null;
  let isLoggedIn = false;
  if (
    token &&
    jwtDecode(token).exp < dateNow.getTime() - jwtDecode(token).iat
  ) {
    return (isLoggedIn = true);
  }
  return isLoggedIn;
}
export default AuthService;
