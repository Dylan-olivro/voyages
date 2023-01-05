
/// ANIMATION ///


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 170;

    if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
function revealHR() {
      var reveals = document.querySelectorAll(".revealHR");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 170;
    
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");

        }
      }
    }

    function revealHL() {
    var reveals = document.querySelectorAll(".revealHL");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 170;
      
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

    window.addEventListener("scroll", revealHR);
    window.addEventListener("scroll", revealHL);
    window.addEventListener("scroll", reveal);

