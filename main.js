canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_x = 20;
rover_y = 10;
rover_w = 100;
rover_h = 80;
bg = "mars.jpg";
rover = "rover.png";

function add() {
    bg_object = new Image();
    bg_object.onload = uploadBackground;
    bg_object.src = bg;
    rover_object = new Image();
    rover_object.onload = uploadRover;
    rover_object.src = rover;
}

function uploadBackground() {
    ctx.drawImage(bg_object, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_object, rover_x, rover_y, rover_w, rover_h);
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (keypress == "37") {
        left();
        console.log("left");
    }

    if (keypress == "38") {
        up();
        console.log("up");
    }
    if (keypress == "39") {
        right();
        console.log("right");
    }
    if (keypress == "40") {
        down();
        console.log("down");
    }
}
function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, rover x= " + rover_x + ", rover y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When up arrow is pressed, rover x= " + rover_x + ", rover y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When up arrow is pressed, rover x= " + rover_x + ", rover y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When up arrow is pressed, rover x= " + rover_x + ", rover y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

background_image = ["https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631290305226E03_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631290503689E01_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG", "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG", "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG"];
random_number = Math.floor(Math.random() * 6);
bg = background_image[random_number];
console.log(random_number)