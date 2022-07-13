noseX=0;
noseY=0;
lwX=0;
rwX=0;
diff=0;

function preload(){

}

function setup(){
    canvas = createCanvas(550,550);
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas.position(650,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        lwX = results[0].pose.leftWrist.x;
        rwX = results[0].pose.rightWrist.x;
        diff = Math.floor(lwX - rwX);

    }
}

function draw(){
    background("#969A97");
    document.getElementById("js").innerHTML = "The width and height of the square = " + diff + " px";
    fill("#90093");
    stroke("#90093");
    square(noseX,noseY,diff);
}
