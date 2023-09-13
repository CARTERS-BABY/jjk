var musica = ''
function preload(){
    musica = loadSound('music.mp3')
}
function setup(){
canvas = createCanvas (600 , 500 )
canvas.center()
video = createCapture(VIDEO)
video.hide ()
posenet = ml5.poseNet(video , carregarmodelo )
posenet.on('pose' , resultados)
}
function draw(){
    image(video , 0 , 0 , 600 , 500)
}
function reproduzir(){
    musica.play()
    musica.setVolume(1)
    musica.rate(1)

}
function carregarmodelo(){
    console.log('carregado')
}
function resultados(results){
if(results.lenght > 0 ){
    console.log (results)
}

}