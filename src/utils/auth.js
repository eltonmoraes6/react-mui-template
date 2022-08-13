import { useSelector } from 'react-redux';
export default function Auth() {
  // const authorization = req.auth.authorization["demo1234"] || {};

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return userInfo ? true : false;

  // if (authorization.roles.includes("admin")) {
  //   // Allow access
  // } else {
  //   // Deny access
  // }
}
