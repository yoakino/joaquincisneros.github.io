
  document.getElementById("demo").onclick = function() {myFunction()};
    
  function myFunction() {
      document.body.style.backgroundColor = "#64F03E"
  }

  document.getElementById("demo").onclick = function() {colorDefault()};

  function colorDefault() {
    document.body.style.backgroundColor = "#BAD2CD"
  }

  function miFuncion() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
