noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/qqzLNYM2/Clown-nose-large.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}
function modelLoaded(){
    console.log("posenet is in initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y-20;
        console.log("nosex= "+results[0].pose.nose.x);
        console.log("nosey= "+results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,40,40);
}
function take_snapshot(){
    save("Myfilter.png");
}