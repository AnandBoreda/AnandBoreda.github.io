function verify() {
  const name = document.forms["cont-form"]["name"].value;
  const mail = document.forms["cont-form"]["email"].value;
  if (name == "" || mail == "") {
    document.getElementById("mbody").innerHTML = "Please enter valid details";
  } else {
    document.getElementById("modal-name").innerHTML = name + "!";
    document.getElementById("modal-mail").innerHTML = mail;
    document.getElementById("contact").innerHTML =
      " Thank you for contacting me, " +
      name +
      "!" +
      " <br/>  I will reach you at  " +
      mail;
    document.getElementById("contact").style =
      "text-align:center;padding:50px 0px;font-weight:bolder;";
  }
}
function menutoggle() {
  var menu = document.getElementById("Navbar");
  menu.classList.remove("show");
}

function age() {
  const d = new Date();
  const y = d.getFullYear();
  var age;

  const month = d.getMonth();
  if (month < 10) {
    age = y - 1999;
    console.log(age);
    document.getElementById("anand_age").innerHTML = age;
  } else if (month >= 10) {
    age = y - 1998;
    console.log(age);
    document.getElementById("anand_age").innerHTML = age;
  }
}

age();

function halt() {
  window.stop();
}

/* email - SMTP */

// function sendEmail() {
//   let name = document.forms["cont-form"]["name"].value;
//   let email = document.forms["cont-form"]["email"].value;
//   let subject = document.forms["cont-form"]["subject"].value;
//   let msg = document.forms["cont-form"]["message"].value;

//   let username = "zz.anand2016@gmail.com";
//   let password = "emledupo";

//   console.log(name, email, subject, message);
//   Email.send({
//     SecureToken: "48da42ae-91cb-437f-978c-39f7dfa991c7",
//     To: "zz.anand2016@gmail.com",
//     From: email,
//     Subject: "message from anandboreda.com",
//     Body: `You have a new message from your portfolio website \n
//   <h1 style="text-align:center;">Name: ${name} </h1>, \n
//   <h3 style="text-align:center;"> subject: ${subject}</h3> \n
//   <p style="text-align:center;"> message: ${msg} </p>`,
//   }).then((message) => alert(message, name, email, subject, msg));
// }

/* downlaod resume  */
function dwnResume() {
  const name = document.forms["dwn-resume"]["name"].value;
  const email = document.forms["dwn-resume"]["email"].value;
  const designation = document.forms["dwn-resume"]["designation"].value;

  console.log(name, email, designation);

  if (name != "" && email != "") {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute("href", "./documents/Anand%20Boreda%20Resume.pdf");
    a.setAttribute(
      "download",
      "https://anandboreda.com/documents/Anand%20Boreda%20Resume.pdf"
    );
    a.click();
    setTimeout(() => {
      window.stop();
    }, 2000);
  } else {
    alert("all fields are mandatory");
  }
}
