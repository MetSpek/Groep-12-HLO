window.onload = () =>{
/*=========================VARIABELEN======================*/
  const places = document.getElementsByClassName('js--place');
  const camera = document.getElementById('js--camera');






/*=========================LOPEN==========================*/
    for (let i = 0; i < places.length; i++) {
      places[i].addEventListener('click', function(evt){
        console.log("loop")
        let att = document.createAttribute("position");
        att.value =  this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
        camera.setAttribute('position', att.value);
      });
    }
}
