var positionImage = 0;
var image1=document.getElementById("1");
var image2=document.getElementById("2");
var image3=document.getElementById("3");
var image4=document.getElementById("4");
var image5=document.getElementById("5");
var image6=document.getElementById("6");
var image7=document.getElementById("7");
var image8=document.getElementById("8");


function defilementImageGauche(){
  if(positionImage===0){
    image1.style.marginLeft = "-480px";
    image8.style.marginLeft = "0px";
    positionImage++;
  }else if(positionImage===1){
    image2.style.marginLeft = "-480px";
    positionImage++;
  }else if(positionImage===2){
    image3.style.marginLeft = "-480px";
    positionImage++;
  }else if(positionImage===3){
    image4.style.marginLeft = "-480px";
    positionImage++;
  }else if(positionImage===4){
    image5.style.marginLeft = "-480px";
    positionImage++;
  }else if(positionImage===5){
    image6.style.marginLeft = "-480px";
    positionImage++;
  }else if(positionImage===6){
    image7.style.marginLeft = "-480px";
    positionImage++;
  }else if(positionImage===7){
    image8.style.marginLeft = "-480px";
        image1.style.marginLeft = "0px";
        image2.style.marginLeft = "0px";
        image3.style.marginLeft = "0px";
        image4.style.marginLeft = "0px";
        image5.style.marginLeft = "0px";
        image6.style.marginLeft = "0px";
        image7.style.marginLeft = "0px";
    positionImage=0;
  }
}

function defilementImageDroite(){
  if(positionImage===7){
    image7.style.marginLeft="0px";
    positionImage--;
  }else if(positionImage===6){
    image6.style.marginLeft="0px";
    positionImage--;
  }else if(positionImage===5){
    image5.style.marginLeft="0px";
    positionImage--;
  }else if(positionImage===4){
    image4.style.marginLeft="0px";
    positionImage--;
  }else if(positionImage===3){
    image3.style.marginLeft="0px";
    positionImage--;
  }else if(positionImage===2){
    image3.style.marginLeft="0px";
    positionImage--;
  }else if(positionImage===1){
    image1.style.marginLeft="0px";
    positionImage--;
  }else if(positionImage===0){
    image8.style.marginLeft="0px";
      image7.style.marginLeft="-480px";
      image6.style.marginLeft="-480px";
      image5.style.marginLeft="-480px";
      image4.style.marginLeft="-480px";
      image3.style.marginLeft="-480px";
      image2.style.marginLeft="-480px";
      image1.style.marginLeft="-480px";
    positionImage= 7;
  }
}


function defilementAutomatique(){
  setInterval("defilementImageGauche()",5000);
}