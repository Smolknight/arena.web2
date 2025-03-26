
function reportWindowSize() {
    let areas = document.querySelectorAll("area");
    let areaImage = document.querySelector("img#arena-image");
    let widthDiff = areaImage.width / areaImage.naturalWidth;
  
    areas.forEach((coords, index) => {
      let pairs = coords.getAttribute("coords").split(",");
      var scaledCoords = "";
      for (let i = 0; i < pairs.length; i++) {
        scaledCoords += Math.floor(pairs[i] * widthDiff) + ",";
      }
  
      scaledCoords = scaledCoords.slice(0, -1);
      console.log(scaledCoords);
  
      document
        .querySelectorAll("area")
        [index].setAttribute("coords", scaledCoords);
    });
  }
  
  reportWindowSize()
  
  window.onresize = reportWindowSize;
  
  