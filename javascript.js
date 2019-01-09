// window.onscroll = function() {myFunction()
//   var header1 = document.getElementById("services-header");
//   var sticky = header1.offsetTop;
//
//   function myFunction() {
//     if (window.pageYOffset > sticky) {
//       header1.classList.add("sticky");
//     }
//     else {
//       header1.classList.remove("sticky");
//     }
// }

function onSubmit(){
      /* var form = document.getElementById("form-id");
       name = document.getElementById("name").value;
       email = document.getElementById("email").value;
       phone = document.getElementById("phone").value;
       services = document.getElementById("option").value;
       message = document.getElementById("textarea").value;
     */
     var link = "mailto:libingeorge3@gmail.com"

          + "&from=" + escape(document.getElementById('email').value);
                  + "&subject=" + escape("Mail from Systrust Website");
                  + "&body=" + escape(document.getElementById("textarea").value);
                  + "&phone=" + escape(document.getElementById('phone').value);

      window.location.href = link;
}
