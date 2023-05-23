ci=""

function preload(){
ci=loadImage("https://i.postimg.cc/SQ22WQt2/clownnose.png")
}

function setup(){
XD=createCanvas(499,498)
XD.center()
RSSS= createCapture(VIDEO)
RSSS.hide()
//**I intialllizing pose net */
MW=ml5.poseNet(RSSS, modelLoaded)
//**swithching pose net onnnnnnnnnnnnnnnnnn */
MW.on('pose',gotPoses)
}
function modelLoaded(){
console.log("Apka model lode ho chuka hai, adhik jankari ke liye 911 pe call kijeye")
}
n_x=0;
n_Y=0;
function gotPoses(result){
//**mere naak ka x and y position alo................... */
if (result.length>0){
console.log(result)
n_x=result[0].pose.nose.x-105
n_Y=result[0].pose.nose.y
console.log("X position of ur nose is ",n_x)
console.log("Y posiion of ur nose is ",n_Y)}}

function draw(){
image (RSSS, 0, 0, 499, 498)
image(ci,n_x,n_Y,30,30)//**js dosen't take floatt aka decimals only take integers bahut alsi hai */ 
}