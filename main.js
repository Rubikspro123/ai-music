harry_potter_music = '';
super_mario_music = '';

function preload(){
    harry_potter_music = loadSound('harrypotter.mp3');
    super_mario_music = loadSound('supermario.mp3');
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
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