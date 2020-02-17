function Rskills(reload)
   {
    window.location.hash = '#skills';
    window.location.reload(true);
 }
 function Racad(reload)
   {
    window.location.hash = '#academics';
    window.location.reload(true);
 }
 function formsubgreet()
 {
   var name = document.forms["cont-form"]["name"].value;
   var mail = document.forms["cont-form"]["email"].value;
   
  if (name != "" && mail != "") 
  {
    alert('Thanks for your interest, ' + name +'! \n we will get back to you at '+mail)
    document.getElementById('contact').innerHTML=' Thank you for contacting us, '+name+'!'+' <br/>  we will reach you at  '+mail;
  }

 }