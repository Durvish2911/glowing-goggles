Webcam.set({
    width:390,
    height:350,
    image_format:'jpeg',
    jpeg_quality:100
});
camera = document.getElementById("camera");
Webcam.attach(  '#camera'  );
function tae_snaPshot(){
    Webcam.snap(function(daTA_MURILI){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+daTA_MURILI+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models.json/',modelloadd);