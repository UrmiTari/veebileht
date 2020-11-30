//Allikas: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Võtab html failist id põhjal nupu ja omistab selle muutujale mybutton
var mybutton = document.getElementById("myBtn");

//kerime sinna kuhu tahame, ehk tagasi üles
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"; //kui me ei ole veel ülemisest äärest 20px kaugusel, siis nuppu ei näidata
  } else {
    mybutton.style.display = "none"; //kui oleme kerinud kaugemale kui 20px siis näitame tagasi üles nuppu
  }
}

// Kui nupu peale vajutada, siis keritakse tagasi lehe algusesse.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}