export function isAuth() {
  var user = localStorage.getItem("user");
  if (!user) return false;

  return true;
}
