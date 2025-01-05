import users from "./userdata.js";
const data=users.map((user)=>{
  let address = user.address.street;
  let city = user.address.city;
  let pencode=user.address.zipcode;
  return {name: user.name,address,city,pencode}
});
console.log(data);