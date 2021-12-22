let nightStudent = [];
let present = [];
let currentStudent = {
  name: "name",
  rollNo: "roll",
  age: "age",
  shift: "shift",
  email: "email",
  checkInTime: "time",
};

let t = new Date();
t.setHours(22);
t.setMinutes(0);
t.setSeconds(0);
let attendTime = t.getTime();

const markAttendance = () => {
  document.querySelector(".demo2").innerHTML="";
  // console.log(attendTime);
  let nameTwice = false;
  let studentRollNo = document.querySelector("#rollno").value;

  for (var i = 0; i < present.length; i++) {
    if (present[i].rollNo == studentRollNo) {
      nameTwice = true;
      document.querySelector(".demo").innerHTML="Student Already Entered";
    }
  }

  if (nameTwice == false) {
    let presentTime = new Date();
    let presentTimeInMill = presentTime.getTime() - attendTime;
    let presentTimeInMin = presentTimeInMill / 60000;
    let late;
    if (presentTimeInMin >= 0) {
      late = Math.floor(presentTimeInMin);
    } else {
      late = 0;
    }
    let studentName;
    let studentShift;
    let studentEmail;
    let stuentPhNo;
    let category;
    let flag = false;

    for (var j = 0; j < nightStudent.length; j++) {
      if (nightStudent[j].rollNo == studentRollNo) {
        flag = true;
        studentName = nightStudent[j].name;
        studentShift = nightStudent[j].shift;
        studentEmail = nightStudent[j].email;
        stuentPhNo = nightStudent[j].PhoneNo;

        let student = {
          rollNo: studentRollNo,
          Name: studentName,
          "Time Late": `${late} Mins`,
          Shift: studentShift,
          Email: studentEmail,
          "Phone No": stuentPhNo,
        };

        present.push(student);
        document.querySelector(".demo").innerHTML="";
        presentStudent();
        // console.table(present);
      }
    }

    if (flag == false) {
      document.querySelector(".demo").innerHTML="Student Not Found";
    }
  }
};
let btn = document.querySelector("#mark");
btn.addEventListener("click", markAttendance);

const presentStudent = () => {
  document.querySelector("#rollno").value ="";
  let beforeStudent = document.querySelector(".numOfStu");
  beforeStudent.innerHTML = present.length;
};

let preNightStudent = JSON.parse(localStorage.getItem(`AllStudent`));
// console.log(preNightStudent);

preNightStudent.map((s) => {
  if (s.shift == "Night") {
    nightStudent.push(s);
  }

  let noOfAllStudent = document.querySelector(".numOfAllStu");
  noOfAllStudent.innerHTML = nightStudent.length;
});

// console.log(nightStudent);
const showtable = ()=>{
  document.querySelector(".demo").innerHTML="";
  document.querySelector(".demo2").innerHTML="Open Console For Result";
  console.clear()
  console.table(present);
}
let show = document.querySelector("#show");
show.addEventListener("click",showtable)