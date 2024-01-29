var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// -----------menubar-----------
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right= "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}
// ------------Form validation---------------
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxkL_b7oeJmKyEfqxw-KIZr1yhbc2v6zc9v0-45BqXiDjB_zaoe1yp0A8pf8MK98nemTQ/exec';
  const form = document.forms['submit-to-google-sheet'];

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>sole.error('Error!', error.message))
  })

  function showAlert() {
    var myText = "Your message sent successfully...";
    alert (myText);
    form.reset();
  }
