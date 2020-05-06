window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.transition = "0.5s";
    document.getElementById("header").style.height = "75px";
    document.getElementById("logo").src = "logo2.jpg";
    document.getElementById("logo").style.height = "70px";
    document.getElementById("logo").style.width = "75px";
  } else {
    document.getElementById("header").style.transition = "0s";
    document.getElementById("header").style.height = "120px";
    document.getElementById("logo").src = "logo.png";
    document.getElementById("logo").style.height = "120px";
    document.getElementById("logo").style.width = "120px";
  }
}
