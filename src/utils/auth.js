import jwtDecode from 'jwt-decode';
export default function Auth() {
  // const authorization = req.auth.authorization["demo1234"] || {};
  const authorization = localStorage.getItem('accessToken');
  if (authorization) {
    // Decode Auth Token and Get User Info and Exp
    const decoded = jwtDecode(authorization);
    if (decoded) {
      return true;
    } else {
      return false;
    }
  }

  // if (authorization.roles.includes("admin")) {
  //   // Allow access
  // } else {
  //   // Deny access
  // }
}
