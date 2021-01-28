window.onload = () =>{
/*=========================VARIABELEN======================*/
  /*==TUTORIAL=*/
  const verderKnop = document.getElementsByClassName('js--tutorial--knop');
  const tutorialBox = document.getElementsByClassName('js--tutorial--box');

            /*==========LOPEN===========*/
  const places = document.getElementsByClassName('js--place');
  const roomPlace = document.getElementsByClassName('js--roomPlace')
  const camera = document.getElementById('js--camera');
  const roomDoor = document.getElementsByClassName('js--roomDoor');


  /*==KAMER DANIEL==*/
  const tegelOne = document.getElementById("js--code1");
  const tegelTwo = document.getElementById("js--code2");
  const tegelThree = document.getElementById("js--code3");
  const tegelFour = document.getElementById("js--code4");
  const tegelFive = document.getElementById("js--code5");
  const toetsen = document.getElementsByClassName("js--toets");
  const gate = document.getElementById("js--gate");
  const rock = document.getElementById("js--rock");
  const grave = document.getElementById("js--grave");
  const teleportGate = document.getElementById("js--gate--teleport")
  const teleportRock = document.getElementById("js--rock--teleport")
  const placeholders = document.getElementsByClassName('js--placeholder');
  const crystalPlace = document.getElementById("js--crystal")
  let scene = document.getElementById('js--scene');
  let plekInput = 0;
  let code = "";
  let input = "";
  let pickups = document.getElementsByClassName('js--pickup');
  let hold = null;
  var firstGood = false;
  var secondGood = false;
  var thirdGood = false;
  var fourthGood = false;




  /*==KAMER TERESA==*/


  /*==KAMER KILIAN==*/




/*======================================LOPEN=================================*/
    for (let i = 0; i < places.length; i++) {
      places[i].addEventListener('click', function(evt){
        let att = document.createAttribute("position");
        att.value =  this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
        teleport(att.value);
      });
    }

/*==========================KAMER SWITCHEN====================================*/
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
        const fade = document.getElementById('js--fade');
        /*Animatie voor fade to black*/
        fade.setAttribute('animation', "property: opacity; from:0; to:1; dur:500");

        /*Timer na 600ms teleporteer*/
        setTimeout(function(){
          camera.setAttribute('position', values);
        }, 600);

        /*Timer naa 1000ms zwart weer terug naar normaal*/
        setTimeout(function(){
          fade.setAttribute('animation', "property: opacity; from:1; to:0; dur:500");
        }, 1000);
      }

/*====================OPPAKKEN EN NEERZETTEN=================================*/

      /*OPPAKKEN*/
      for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener('click', function(evt){
          if (hold == null) {
            switch (pickups[i]) {
              case pickups[0]:
                camera.innerHTML += '<a-box  id="js--hold" class="js--interact js--pickup" color="green" position="0.5 -0.2 -0.5" width="0.2" height="0.2" depth="0.2"></a-box>';
                hold = "box";
                this.remove();
                break;
              case pickups[1]:
                camera.innerHTML += '<a-entity id="js--hold" class="js--interact js--pickup" gltf-model="#crystal" position="-3.3 -.5 4"></a-entity>';
                hold = "crystal";
                this.remove();
                break;
              default:
            }
          }
        });
      }

      /*NEERZETTEN*/
      for (let i = 0; i < placeholders.length; i++) {
        placeholders[i].addEventListener('click', function(evt){
          switch (hold) {
            case "crystal":
              let crystal = document.createElement('a-entity');
              crystal.setAttribute("class", "js--pickup js--interact");
              crystal.setAttribute("gltf-model", "#crystal")
              crystal.setAttribute("position", {x:"20.65", y:"1", z: "7.55"});
              scene.appendChild(crystal);
              document.getElementById("js--hold").remove();
              hold = null;
              removeRock();
              break;
            case "box":
              let boxje = document.createElement('a-box');
              boxje.setAttribute("position", {x:"1", y:".1", z: "-6"});
              boxje.setAttribute("color", "green");
              boxje.setAttribute("depth", "0.2");
              boxje.setAttribute("width", "0.2");
              boxje.setAttribute("height", "0.2");
              scene.appendChild(boxje);
              document.getElementById("js--hold").remove();
              hold = null;
              setTimeout(function(){
                teleport("0 1.6 -9")
              }, 2000);
              break;
          }
        });
      }




      /*=============================TUTORIAL=======================================*/
          for (let i = 0; i < verderKnop.length; i++) {
            verderKnop[i].addEventListener('click', function(evt){
              switch (verderKnop[i]) {
                case verderKnop[0]:
                  teleport("1.2 1.6 -3");
                  break;
                case verderKnop[1]:
                  teleport("-1 1.6 -6.5");
                  break;
                case verderKnop[2]:
                  teleport("0 1.6 -13");
                  break;
                case verderKnop[3]:
                  teleport("0 1.6 -13");
                  break;
                default:
                  console.log("minder nice")
              }
            });
          }





/*=============================CODE DANIEL====================================*/


  /*CODE VOOR PUZZEL CREATIE*/
  makeCode();

  function makeCode(){
    code = "";
    decideKind(tegelOne);
    decideKind(tegelTwo);
    decideKind(tegelThree);
    decideKind(tegelFour);
    decideKind(tegelFive);
    console.log("Code Daniel: " + code);
  }

  function decideKind(tegel){
    let randomNumber = randomiser();
    switch (randomNumber) {
      case 1:
        setModel(tegel, "#tegel6");
        break;
      case 2:
        setModel(tegel, "#tegel3");
        break;
      case 3:
        setModel(tegel, "#tegel4");
        break;
      case 4:
        setModel(tegel, "#tegel8");
        break;
      case 5:
        setModel(tegel, "#tegel5");
        break;
      case 6:
        setModel(tegel, "#tegel2");
        break;
      case 7:
        setModel(tegel, "#tegel7");
        break;
      case 8:
        setModel(tegel, "#tegel1");
        break;
      case 9:
        setModel(tegel, "#tegel9");
        break;
      case 0:
        setModel(tegel, "#tegel0");
        break;
      default:
    }
  }

  function setModel(tegel, model){
    tegel.setAttribute("gltf-model", model)
  }

  function randomiser(){
    let nummer = Math.floor(Math.random() * 9) + 1
    nummer.toString();
    code = code + nummer
    return nummer
  }


  /*CODE VOOR INTOETSEN*/
  for (let i = 0; i < toetsen.length; i++) {
    toetsen[i].addEventListener('click', function(evt){
      switch (toetsen[i]) {
        case toetsen[0]:
          checkCode("1");
          break;
        case toetsen[1]:
          checkCode("2");
          break;
        case toetsen[2]:
          checkCode("3");
          break;
        case toetsen[3]:
          checkCode("4");
          break;
        case toetsen[4]:
          checkCode("5");
          break;
        case toetsen[5]:
          checkCode("6");
          break;
        case toetsen[6]:
          checkCode("7");
          break;
        case toetsen[7]:
          checkCode("8");
          break;
        case toetsen[8]:
          checkCode("9");
          break;
        case toetsen[9]:
          checkCode("0");
          break;
        default:
      }
    });
  }


  /*CHECKED OF CODE KLOPT*/
  function checkCode(input){
      if(code[plekInput] == input){
        plekInput = plekInput + 1;
        if(plekInput == 5){
          removeGate()
        }
      }
    }



  /*Verplaatsen van dingen*/
  function removeGate(){
    gate.setAttribute("position", "21.5 0 0");
    teleportGate.setAttribute("position", "22 0 -3")
    crystalPlace.setAttribute("position", "20.5 0 2")
  }

  function removeRock(){
    rock.setAttribute("animation", "property: position; easing: linear; dur: 2000; to: " + " 20 -2 0")
    teleportRock.setAttribute("position", "28 0 2")
    setTimeout(function(){ removeGrave() }, 3000);
  }

  function removeGrave(){
    grave.setAttribute("animation", "property: position; easing: linear; dur: 2000; to: " + " 21 0 0")
  }


}
