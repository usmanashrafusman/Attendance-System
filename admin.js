let finalStu = [];
let allRollNo = [];
let allDataBase = [];
let finalShifts = []
// let everyStudents = [];
let finalRollNo = []
let students = 0;
let flag = true;

const onload = () => {
  let allStuNum = localStorage.length;
  finalStu.length=0
  for (let z = 1; z < allStuNum; z++) {
    let ourAllStudents = JSON.parse(localStorage.getItem(`Student${z}`));
    finalStu.push(ourAllStudents);
    // console.log(finalStu)
  }
  localStorage.setItem("AllStudent",JSON.stringify(finalStu))
  let noOfStud = finalStu.length;  
  finalRollNo.length=0;
  for (let i=0; i<noOfStud; i++){
    finalRollNo.push(finalStu[i].rollNo);
    // console.log(finalRollNo)
  }
  finalShifts.length=0;
  for (let j=0; j<noOfStud; j++){
    finalShifts.push(finalStu[j].shift);
    // console.log(finalShifts)
  }
  // localStorage.setItem("Roll Num",JSON.stringify(finalRollNo))
};

onload();


let addNow = document.querySelector("#addstudent");
addNow.addEventListener("click", () => {
  if (flag) {
    flag = false;
    document.querySelector("#showw").style.display = "flex";
  } else {
    flag = true;
    document.querySelector("#showw").style.display = "none";
  }
});

let form;

const validate = () => {
  let userMail = false;
  let userNum = false;
  let userUserName = false;
  let userRollNum = false;

  var rollnumb = document.querySelector("#rollNo").value;
  var emaill = document.querySelector("#email").value;
  var number = document.querySelector("#phone").value;
  var nameOfUser = document.querySelector("#name").value;

  var mailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  var phoneReg = /92/;
  var phoneReg2 = /03/;
  var usernamereg = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  var rollreg = /\d{1,10}/;

  if (mailReg.test(emaill)) {
    userMail = true;
  } else {
    userMail = false;
  }
  if (phoneReg.test(number) || phoneReg2.test(number)) {
    userNum = true;
  }
  if (usernamereg.test(nameOfUser)) {
    userUserName = true;
  }
  if (rollreg.test(rollnumb)) {
    userRollNum = true;
  }

  if (userMail && userNum && userUserName && userRollNum) {
    document.querySelector(".demo").innerHTML = "";
    form = true;
  } else {
    if (userMail && userNum && userUserName) {
      document.querySelector(".demo").innerHTML = "Invalid Roll No Format";
    } else if (userMail && userNum && userRollNum) {
      document.querySelector(".demo").innerHTML = "Invalid Username Format";
    } else if (userNum && userUserName && userRollNum) {
      document.querySelector(".demo").innerHTML = "Invalid Email Format";
    } else if (userMail && userUserName && userRollNum) {
      document.querySelector(".demo").innerHTML = "Invalid Phone Number Format";
    }
    return false;
  }

  if (form) {
    add();
  }
};

const add = () => {
  let rollnumber = document.querySelector("#rollNo").value;
  let username = document.querySelector("#name").value;
  let shifft = document.querySelector("#shift").value;
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#phone").value;

  let everyStudents = {
    rollNo: rollnumber,
    name: username,
    shift: shifft,
    email: email,
    PhoneNo: number,
  };

  // localStorage.setItem("RollNo", allRollNo);

  if (finalRollNo.includes(rollnumber)) {
    document.querySelector(".demo").innerHTML = "Roll Number Already Taken";
  } else {
    document.querySelector(".demo").innerHTML = "";
    // allRollNo.push(rollnumber);

    // ++students;

    let currentlength = localStorage.length;
    // everyStudents = user;

    localStorage.setItem(
      `Student${currentlength}`,
      JSON.stringify(everyStudents)
    );

    currentlength++;
    onload();
//  console.log(everyStudents);


document.querySelector("#rollNo").value = "";
document.querySelector("#name").value = "";
document.querySelector("#email").value = "";
document.querySelector("#phone").value = "";
  }
};


















let addUser = document.querySelector("#adduser");
addUser.addEventListener("click", validate);

























//Dropdown For Shifts
function myFunction() {
  document.querySelector("#myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.querySelector(".dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
