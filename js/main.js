window.onload = () =>{
/*=========================VARIABELEN======================*/

            /*==========LOPEN===========*/
  const places = document.getElementsByClassName('js--place');
  const roomPlace = document.getElementsByClassName('js--roomPlace')
  const camera = document.getElementById('js--camera');
  const roomDoor = document.getElementsByClassName('js--roomDoor');
  const fade = document.getElementById('js--fade');

  /*==KAMER DANIEL==*/


  /*==KAMER TERESA==*/


  /*==KAMER KILIAN==*/





/*=========================LOPEN==========================*/
    for (let i = 0; i < places.length; i++) {
      places[i].addEventListener('click', function(evt){
        let att = document.createAttribute("position");
        att.value =  this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
        camera.setAttribute('position', att.value);
      });
    }

    /*===================KAMER SWITCHEN======================*/
      for (let i = 0; i < roomDoor.length; i++) {
        roomDoor[i].addEventListener('click', function(evt){

          /*Hier kijkt welke deuren gelinked zijn*/
          switch(roomDoor[i]){
            case roomDoor[0]:
              teleport(entranceTwo)
              break;
            case roomDoor[1]:
              teleport(entranceOne)
              break;
            default:
              console.log("fucked up")
              break;
          }
      });
    }

      function teleport(values){
        console.log(values);

        /*Animatie voor fade to black*/
        let att = document.createAttribute("animation");
        att.value = "property: opacity; from:0; to:1; dur:500"
        fade.setAttribute('animation', att.value);

        /*Timer na 600ms teleporteer*/
        setTimeout(function(){
          camera.setAttribute('position', values);
        }, 600);

        /*Timer naa 1000ms zwart weer terug naar normaal*/
        setTimeout(function(){
          att.value = "property: opacity; from:1; to:0; dur:500"
          fade.setAttribute('animation', att.value);
        }, 1000);






      }
}
