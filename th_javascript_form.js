"use strict";

// Cruz Shirtz //

//This will display a message after the user submits the message within the form. CS. //
window.onload = function() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) {
         alert("Thank You - Message Submitted");
         return false;
      }
   };
};
