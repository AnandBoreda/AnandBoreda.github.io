function Rskills(reload)
   {
    window.location.hash = '#skills';
    if(window.location == '#skills'){window.location.reload(true);}
 }
 function Racad(reload)
   {
    window.location.hash = '#academics';
    if(window.location == '#academics'){window.location.reload(true);}
 }
 function formsubgreet()
 {
   let name = document.forms["cont-form"]["name"].value;
   let mail = document.forms["cont-form"]["email"].value;

  if (name != "" && mail != "") 
  {
    // alert('Thanks for your interest, ' + name +'! \n we will get back to you at '+mail)
    document.getElementById('modal-name').innerHTML=name+'!';
    document.getElementById('modal-mail').innerHTML=mail;
    document.getElementById('contact').innerHTML=' Thank you for contacting us, '+name+'!'+' <br/>  we will reach you at  '+mail;
    document.getElementById('contact').style='text-align:center;padding:50px 0px;font-weight:bolder;'
  }
 }
