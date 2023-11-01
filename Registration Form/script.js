function validate(){
    var request1=document.getElementById('request1');
    var request2=document.getElementById('request2');
    var request3=document.getElementById('request3');
    var request4=document.getElementById('request4');
    
    if(validate1(request1," Enter Your name")){
        if(validate2(request2,"Choose your Gender")){
            if(validate3(request3," Enter Your Mobile Number")){
                if(validate4(request4,"Fill Your address")){
                
                    }
                }
            }
        }
    }




function validate1(element,checking)
{
if(element.value.length==0){
    alert(checking);
    element.focus();
    return false;
}
return true;

}

function validate2(element,checking){
if(element.value=="default"){
    alert(checking);
    return false;  
}
else{
    return true;
}
}

function validate3(element,checking){
var numericExpresion=/^[0-9]+$/

if(element.value.match(numericExpresion)){
return true;  
}
else{
    alert(checking);
    element.focus();
    return false;
}
}

function validate4(element,checking){
var alpha=/^[a-z A-Z]+$/

if(element.value.match(alpha)){
return true;  
}
else{
    alert(checking);
    element.focus();
    return false;
}
}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}