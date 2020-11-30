//Võtab html failist id põhjal nupu ja omistab selle muutujale mybutton
var mybutton = document.getElementById("myBtn");

//kontollime, kui kaguele kasutaja on kerinud.
// kui kasutaja on alla poole kerinud 20px lehe ülemisest äärest hakkame talle näitama nuppu, 
//enne seda näha ei ole.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Kui nupu peale vajutada, siis keritakse tagasi lehe algusesse.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}