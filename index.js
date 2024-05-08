// let imeiNumber = new URLSearchParams(window.location.search);
// let imei = imeiNumber.get("imei");
// document.getElementById("userID").value = imei;

function createAccount() {
  let imeiNumber = new URLSearchParams(window.location.search);

  let imei = imeiNumber.get("imei");
  window.location.replace(
    `https://pranavsehgal1997.github.io/lic-native/createUser.html?imei=${imei}`
  );
}
