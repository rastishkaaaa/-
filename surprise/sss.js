function btnClick() {
   alert('ты лох');
}

let cnvs3 = document.querySelector('#cnvs3');

if (cnvs3.getContext) {
   let smile = cnvs3.getContext("2d");
   smile.beginPath();
   smile.fill();
   smile.fillStyle = "white";
   smile.beginPath();
   smile.arc(160, 160, 115, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.arc(160, 190, 50, 0, Math.PI, false);
   smile.fill();
   smile.lineWidth = 5;
   smile.strokeStyle = "red";
   smile.stroke()

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "red";
   smile.beginPath();
   smile.arc(160, 180, 20, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.ellipse(125, 120, 20, 40, Math.PI, 0, 2 * Math.PI);
   smile.fillStyle = "blue";
   smile.fill();

   smile.beginPath();
   smile.ellipse(205, 120, 20, 40, Math.PI, 0, 2 * Math.PI);
   smile.fillStyle = "blue";
   smile.fill();
      
   smile.beginPath();
   smile.fill();
   smile.fillStyle = "black";
   smile.beginPath();
   smile.arc(125, 120, 15, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "black";
   smile.beginPath();
   smile.arc(205, 120, 15, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "white";
   smile.beginPath();
   smile.arc(125, 120, 8, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "white";
   smile.beginPath();
   smile.arc(205, 120, 8, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "black";
   smile.beginPath();
   smile.arc(125, 120, 3, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "black";
   smile.beginPath();
   smile.arc(205, 120, 3, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "orange";
   smile.beginPath();
   smile.arc(80, 60, 40, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "red";
   smile.beginPath();
   smile.arc(50, 90, 40, 0, 2 * Math.PI);
   smile.fill();
   
   smile.beginPath();
   smile.fill();
   smile.fillStyle = "green";
   smile.beginPath();
   smile.arc(190, 45, 40, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "yellow";
   smile.beginPath();
   smile.arc(130, 40, 40, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "violet";
   smile.beginPath();
   smile.arc(260, 80, 40, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.fill();
   smile.fillStyle = "blue";
   smile.beginPath();
   smile.arc(235, 50, 40, 0, 2 * Math.PI);
   smile.fill();
}