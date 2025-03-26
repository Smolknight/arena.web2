//Javascript for the header and footer

//header
//logo clicked - takes user back to homepage
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.open("index.html", "_self");
});

//footer
//social media icons clicked - takes user to social media page
//facebook clicked
function facebook(){
    window.open("https://www.facebook.com", "_blank")
  }

  //instagram clicked
  function insta(){
    window.open("https://www.instagram.com", "_blank")
  }