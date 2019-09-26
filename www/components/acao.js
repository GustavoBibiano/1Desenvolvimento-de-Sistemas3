$(document).on("click","#camera", function(){
  navigator.camera.getPicture(onSuccess, onFail, 
  { quality: 76,  
  destinationType: Camera.DestinationType.FILE_URI,
  correctOrientation:true,
  saveToPhotoAlbum:true
});

  function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;

  }
  function onFail(message) {
    navigator.notification.alert('Erro ao capturar a imagem: ' + message);
  }
});

$(document).on("change","#escala_cinza",function(){

  var cinza = document.getElementById("escala_cinza").value;

    document.getElementById("imagem").style.filter= "grayscale("+cinza+"%)";
 
});

$(document).on("change","#opacidade",function(){

  var opacidade = document.getElementById("opacidade").value;

    document.getElementById("imagem").style.filter= "opacity("+opacidade+"%)";
 
});

$(document).on("change","#saturacao",function(){

  var saturacao = document.getElementById("saturacao").value;

   document.getElementById("imagem").style.filter= "saturate("+saturacao+"%)";
 
});

$(document).on("change","#blur",function(){

  var blur = document.getElementById("blur").value;

    document.getElementById("imagem").style.filter= "blur("+blur+"px)";
 
});