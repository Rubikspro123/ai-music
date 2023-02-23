harry_potter_music = '';
super_mario_music = '';
leftWristX = '';
leftWristY = '';
rightWristX = '';
rightWristY = '';
scoreLeftWrist = 0;
scoreRightWrist = 0;
status_song_harry = '';
status_song_super = '';
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

    fill('red');
    stroke('red')
    status_song_harry = harry_potter_music.isPlaying()
    status_song_super = super_mario_music.isPlaying()
    if(scoreLeftWrist > 0.2){
        circle(leftWristX , leftWristY, 20)
        status_song_super.stop();
        if(status_song_harry == false){
            harry_potter_music.play();
            harry_potter_music.setVolume(1)
            harry_potter_music.rate(1)
            document.getElementById('song').innerHTML = 'Playing Harry Potter Theme Song';
        }
    }
    if(scoreRightWrist > 0.2){
        status_song_harry.stop();
        if(status_song_super == false){
            super_mario_music.play();
            super_mario_music.setVolume(1)
            super_mario_music.rate(1)
            document.getElementById('song').innerHTML = 'Playing Super Mario Theme Song';
        }
    }
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
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('leftWristX = ' + leftWristX + 'leftWristY = ' + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log('rightWristX = ' + rightWristX + 'rightWristY = ' + rightWristY);

    }
}