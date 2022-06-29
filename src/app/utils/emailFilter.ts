const emailRegExp = /^([a-z])+@capeannenterprises.com$/;
//const regexp = new RegExp(
///^(([^<>()\[\]\\.,;:\s@capeannenterprises.com"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//);
export default function (email) {
  return emailRegExp.test(email);
}
