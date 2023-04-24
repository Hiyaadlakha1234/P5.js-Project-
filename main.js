function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);

}
function draw() {
    fill("pink");
    rect(120, 87, 400, 30);
    rect(120, 367, 400, 30);
    rect(90, 100, 30, 300);
    rect(530, 100, 30, 300);
    fill("purple");
    circle(100, 100, 80);
    circle(540, 100, 80);
    circle(100, 380, 80);
    circle(540, 380, 80);
    image(pic, 130, 130, 376, 230);
}
function preload() {
    pic = loadImage("Image1.jpg");
}
