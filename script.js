(function(){
    let password = document.querySelector('.password');

    let helperText ={
        charLength: document.querySelector('.helper-text .length'),
        lowercase: document.querySelector('.helper-text .lowercase'),
        uppercase: document.querySelector('.helper-text .uppercase'),
        special: document.querySelector('.helper-text .special')
    };
    //next code here
    password.addEventListener("keyup" , function() {
        //check for password is a minimum 8 charcter
        patternTest(pattern.charLength(), helperText.charLength);
        //check for lowercase
        patternTest(pattern.lowercase(), helperText.lowercase);
        // check for uppercase 
        patternTest(pattern.uppercase(), helperText.uppercase);
        // check special character
        patternTest(pattern.special(), helperText.special);

        if(
            hasClass(helperText.charLength, "valid")&&
            hasClass(helperText.lowercase, "valid")&&
            hasClass(helperText.uppercase, "valid")&&
            hasClass(helperText.special, "valid")
         ) {
            addClass(password.parentElement, "valid");
        }else {

           removeClass(password.parentElement, "valid");
        }
   });

   let pattern ={
    charLength: function() {
      if(password.value.length >= 8){
        return true;
      }
    },
    lowercase: function() {
        let regax = /^(?=.*[a-z]).+$/; 
        if(regax.test(password.value)){
            return true;
        }
    },
    uppercase: function() {
        let regax = /^(?=.*[A-Z]).+$/; 
        if(regax.test(password.value)){
            return true;
        }
    },
    special: function() {
        let regax = /^(?=.*[0-9_\W]).+$/; 
        if(regax.test(password.value)){
            return true;
        }
    }
   };
   
function removeClass(el , className){
    if(el.classList) el.classList.remove(className);
    else
       el.className = el.className.replace(
       new RegExp(
        "(^|\\b)" + className.split(" ").join("|")+ "(\\b|$)" , "gi"),
       " "
    );
}



function hasClass(el, className) {
    if(el.classList) {
        console.log(el.classList);
        return el.classList.contains(className);
    }else {
        new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
    }
}



function patternTest(pattern , response) {
    if(pattern){
        addClass(response , "valid");
    }else {
        removeClass(response , "valid");
    }
}



function addClass(el , className) {
    if(el.classList) {
        el.classList.add(className);
    }else {
        el.className += " " + className;
    }
}
  
})();



