function setup(){
    canvas = createCanvas(400,400);
    canvas.position(908,290);
    video = createCapture(VIDEO);
    video.size(550,550);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('modelLoaded!');
}   

function gotPoses(error ,results){
    if(error){
    console.error("error");
    }
    if(results.length>0){
        console.log(results);

    }
}