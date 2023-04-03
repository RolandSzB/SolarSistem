function setup() {
  createCanvas(800, 800);
}
function draw() {
  background("#ffffff");
  solarSistem();
}
function solarSistem() {
  //fields
  fill("ffffff");
  ellipse(400, 300, 650, 200);
  ellipse(400, 300, 550, 190);
  ellipse(400, 300, 450, 180);
  ellipse(400, 300, 350, 175);
  ellipse(400, 300, 250, 170);
  //sun
  fill("#fcc603");
  circle(400, 300, 75);
  triangle(395, 260, 405, 260, 400, 240);
  triangle(440, 295, 465, 300, 440, 305);
  triangle(395, 340, 405, 340, 400, 360);
  triangle(360, 295, 360, 305, 335, 300);

  //planets
  fill("#039dfc");
  circle(310, 360, 25);
  fill("#03fc4a");
  circle(665, 300, 70);
  fill("#fc0303");
  circle(215, 250, 30);
  fill("#fca103");
  circle(560, 330, 45);
  fill("#db03fc");
  circle(80, 300, 50);
}
