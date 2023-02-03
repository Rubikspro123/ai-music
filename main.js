harry_potter_music = '';
super_mario_music = '';
leftWristX = '';
leftWristY = '';
rightWristX = '';
rightWristY = '';
function preload(){
    harry_potter_music = loadSound('harrypotter.mp3');
    super_mario_music = loadSound('supermario.mp3');
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('PoseNet is Initialized')
}
function draw(){
    image(video,0,0,600,500)
}
function harrysong(){
    harry_potter_music.play();
}
function supersong(){
    super_mario_music.play();
}
function stop(){
    harry_potter_music.pause();
    super_mario_music.pause();
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('leftWristX = ' + leftWristX + 'leftWristY = ' + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log('rightWristX = ' + rightWristX + 'rightWristY = ' + rightWristY);

    }
}
