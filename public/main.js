(function() {

  function fillCanvas(data) {
    let dataArr = data.split('');
      let canvas = document.getElementById('canvas');
      let ctx = canvas.getContext('2d');
      let w = 300;
      let h = 300;
      let xPos = 0;
      let yPos = 0;

      dataArr.forEach((datum) => {
        if (xPos > w) {
          yPos += 1;
          xPos = 0;
        }
        if (datum === "0") {
          ctx.fillStyle = "Black";
          ctx.fillRect(xPos, yPos, 1, 1);
          xPos += 1;
        }
        else {
          ctx.fillStyle = "White";
          ctx.fillRect(xPos, yPos, 1, 1);
          xPos += 1;
        }
      });
    };

  function getBinData() {
    fetch('/data', {method: "GET"})
    .then((data) => data.text())
    .then((text) => {
      let binString = text.toString();
      fillCanvas(binString);
    });
  }

  getBinData();
  
})();