let imeiNumber = new URLSearchParams(window.location.search);
console.log(imeiNumber);
let imei = imeiNumber.get("imei");
document.getElementById("userID").value = value;

function createAccount() {
  let imeiNumber = new URLSearchParams(window.location.search);
  console.log(imeiNumber);
  let imei = imeiNumber.get("imei");
  window.location.replace(
    `http://127.0.0.1:5500/createUser.html?imei=${imei}`
  );
}
