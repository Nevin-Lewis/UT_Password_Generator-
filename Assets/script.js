var generateOpen = document.querySelector("#generate");
var generateClose = document.querySelector("#close");
var generatePassword = document.querySelector("#run");
var passwordText = document.querySelector("#password");
var retry = document.querySelector("#retry");
generateOpen.addEventListener("click", clearform);
generateOpen.addEventListener("click", openform);
generateClose.addEventListener("click", closeform);
generatePassword.addEventListener("click", writePassword);
generatePassword.addEventListener("click", closeform);
retry.addEventListener("click", writePassword)

function openform() {
  document.getElementById("data-input").style.display = "block";
}
function closeform() {
  document.getElementById("data-input").style.display = "none";
}

function writePassword(event) {
  event.preventDefault();
  var pass_leng = document.getElementById("length").value;
  var password = [];
  var fin_password = "";

  if (document.getElementById("CapLetter").checked == true) {
    for (let i = 65; i<91; i++) {
      password += String.fromCharCode(i);}}
  if (document.getElementById("LowLetter").checked == true) {
    for (let i = 97; i<123; i++) {
    password += String.fromCharCode(i);}
  }
  if (document.getElementById("num").checked == true) {
    for (let i = 48; i<58; i++) {
      password += String.fromCharCode(i);}
  }
  if (document.getElementById("character").checked == true) {
    for (let [from, to] of [[33, 47], [58, 64]])
      for (let i = from; i < to; i++) {
      password += String.fromCharCode(i);}
  }
  for (let i=0; i < pass_leng; i++) {
  fin_password += (password[Math.floor(Math.random() * password.length)]);
  }
  passwordText.textContent = fin_password;
}

function clearform(event) {
  var clear = document.querySelectorAll("input");
for (let i = 0; i < clear.length; i++) {
  clear[i].checked = false;}
  document.getElementById("length").value = "8"
  document.getElementById("results").value = "8"
  passwordText.textContent = document.getElementById("password").ariaPlaceholder;
  password = [];
}
