function revealConfession() {
    var confession = document.getElementById("confession");
    confession.style.display = "block";
    setTimeout(function () {
      confession.style.top = "35px";
      confession.style.left = "35px";
    }, 10);
  }
  