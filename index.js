// let imeiNumber = new URLSearchParams(window.location.search);
// let imei = imeiNumber.get("imei");
// document.getElementById("userID").value = imei;

function createAccount() {
    let imeiNumber = new URLSearchParams(window.location.search);

    let imei = imeiNumber.get("imei");
    window.location.replace(
        `http://127.0.0.1:5500/createUser.html?imei=${imei}`
    );
}
