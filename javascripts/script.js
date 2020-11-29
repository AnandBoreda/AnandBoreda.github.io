 function verify(){
  let name = document.forms["cont-form"]["name"].value;
  let mail = document.forms["cont-form"]["email"].value;
  if (name == "" || mail == ""){
    document.getElementById("mbody").innerHTML="Please enter valid details";
  } 
  else{
    document.getElementById('modal-name').innerHTML=name+'!';
    document.getElementById('modal-mail').innerHTML=mail;
    document.getElementById('contact').innerHTML=' Thank you for contacting me, '+name+'!'+' <br/>  I will reach you at  '+mail;
    document.getElementById('contact').style='text-align:center;padding:50px 0px;font-weight:bolder;'
  }
 }
function menutoggle(){
  var menu = document.getElementById('Navbar');
  menu.classList.remove('show');
}


function age() {
  var d = new Date();
  var y = d.getFullYear();
  var age = y - 1998;
  document.getElementById("anand_age").innerHTML = age;
}
age();

function halt(){
  window.stop();
}

/* email - SMTP */

/*
function sendEmail() {
  let name = document.forms["cont-form"]["name"].value;
  let email = document.forms["cont-form"]["email"].value;
  let subject = document.forms["cont-form"]["subject"].value;
  let msg = document.forms["cont-form"]["message"].value;
  
  let username = 'zz.anand2016@gmail.com';
  let password = 'emledupo';

  console.log(name, email, subject, message);
	Email.send({
	Host: "smtp.gmail.com",
	Username : username,
	Password : password,
	To : 'zz.anand2016@gmail.com',
	From : email,
	Subject : 'message from anandboreda.com',
  Body : `You have a new message from your portfolio website \n 
  <h1 style="text-align:center;">Name: ${name} </h1>, \n
  <h3 style="text-align:center;"> subject: ${subject}</h3> \n
  <p style="text-align:center;"> message: ${msg} </p>`,
	}).then(
		message => alert(message, name, email, subject, msg)
	);
}
*/
notify = function () {
  
  Notification.requestPermission(function (permission) {

      // Notification granted
      if (permission !== 'denied') {
          var options = {
              title: 'Greetings from Anand!',
              body: 'Click here to download my Resume',
              icon: 'https://anandboreda.github.io/images/dp3.jpg',
              vibrate: [100, 200, 100]
          }
          var notification = new Notification(options.title, options);
        }
        else{
          Notification.requestPermission().then(function(result){
            console.log('Notification access is '+result)
          }).catch((err)=>{
            console.lo(err)
        })
      }
      
    });
  }
  setTimeout(notify(), 5000);

// self.addEventListener('notificationclick', function(event) {
//   let url = 'https://example.com/some-path/';
//   event.notification.close(); // Android needs explicit close.
//   event.waitUntil(
//       clients.matchAll({type: 'window'}).then( windowClients => {
//           // Check if there is already a window/tab open with the target URL
//           for (var i = 0; i < windowClients.length; i++) {
//               var client = windowClients[i];
//               // If so, just focus it.
//               if (client.url === url && 'focus' in client) {
//                   return client.focus();
//               }
//           }
//           // If not, then open the target URL in a new window/tab.
//           if (clients.openWindow) {
//               return clients.openWindow(url);
//           }
//       })
//   );
// });