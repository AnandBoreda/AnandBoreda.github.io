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
   var x = document.forms["cont-form"]["name"].value;
   var y = document.forms["cont-form"]["email"].value;
   
  if (x != "" && y != "") 
  {
    alert('Thanks for your interest, ' + x +'! \n we will get back to you at '+y)
    document.getElementById('contact').innerHTML='\n Thank you for contacting us, '+x+'.'+'\n we will reach you at \n'+y;
  }

 }