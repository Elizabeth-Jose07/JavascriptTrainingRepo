function accessManagement() {
  let loggedIn = true;
  let isAdmin = false;
  let isOwner = true;

  let hasAccess = loggedIn && (isAdmin || isOwner);
  return hasAccess;
}
console.log(hasAccess);
