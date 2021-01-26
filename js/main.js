window.onload = () =>{
/*=========================VARIABELEN======================*/

            /*==========LOPEN===========*/
  const places = document.getElementsByClassName('js--place');
  const roomPlace = document.getElementsByClassName('js--roomPlace')
  const camera = document.getElementById('js--camera');
  const roomDoor = document.getElementsByClassName('js--roomDoor');
  const fade = document.getElementById('js--fade');

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

/*=============================CODE DANIEL====================================*/
  /*OPPAKKEN*/
  for (let i = 0; i < pickups.length; i++) {
    pickups[i].addEventListener('click', function(evt){
      if (hold == null) {
        console.log("pak op")
        camera.innerHTML += '<a-entity id="js--hold" class="js--interact js--pickup" gltf-model="#crystal" position="-3.3 -.5 4"></a-entity>';
        hold = "crystal";
        this.remove();
      }
    });
  }

  for (let i = 0; i < placeholders.length; i++) {
    placeholders[i].addEventListener('click', function(evt){
      if (hold == "crystal"){
        let crystal = document.createElement('a-entity');
        crystal.setAttribute("class", "js--pickup js--interact");
        crystal.setAttribute("gltf-model", "#crystal")
        crystal.setAttribute("position", {x:"20.65", y:"1", z: "7.55"});
        scene.appendChild(crystal);
        document.getElementById("js--hold").remove();
        hold = null;
        removeRock();
      }
    });
  }


  /*CODE VOOR PUZZEL CREATIE*/
  makeCode();

  function makeCode(){
    code = "";
    decideKind(tegelOne);
    decideKind(tegelTwo);
    decideKind(tegelThree);
    decideKind(tegelFour);
    decideKind(tegelFive);
    console.log(code);
  }

  function decideKind(tegel){
    let randomNumber = randomiser();
    switch (randomNumber) {
      case 1:
        setModel(tegel, "#tegel1");
        break;
      case 2:
        setModel(tegel, "#tegel2");
        break;
      case 3:
        setModel(tegel, "#tegel3");
        break;
      case 4:
        setModel(tegel, "#tegel4");
        break;
      case 5:
        setModel(tegel, "#tegel5");
        break;
      case 6:
        setModel(tegel, "#tegel6");
        break;
      case 7:
        setModel(tegel, "#tegel7");
        break;
      case 8:
        setModel(tegel, "#tegel8");
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
          checkFirstCorrect("1")
          break;
        case toetsen[1]:
          checkFirstCorrect("2")
          break;
        case toetsen[2]:
          checkFirstCorrect("3")
          break;
        case toetsen[3]:
          checkFirstCorrect("4")
          break;
        case toetsen[4]:
          checkFirstCorrect("5")
          break;
        case toetsen[5]:
          checkFirstCorrect("6")
          break;
        case toetsen[6]:
          checkFirstCorrect("7")
          break;
        case toetsen[7]:
          checkFirstCorrect("8")
          break;
        case toetsen[8]:
          checkFirstCorrect("9")
          break;
        case toetsen[9]:
          checkFirstCorrect("0")
          break;
        default:
      }
    });
  }


  /*CHECKED OF CODE KLOPT*/
  function checkFirstCorrect(input){
    if(firstGood == true){
      checkSecondCorrect(input)
    } else {
      if(code[0] == input){
        firstGood = true;
      } else {
        console.log("WRONG")
      }
    }
  }

  function checkSecondCorrect(input){
    if(secondGood == true){
      checkThirdCorrect(input)
    } else {
      if(code[1] == input){
        secondGood = true;
      } else {
        console.log("WRONG")
      }
    }
  }

  function checkThirdCorrect(input){
    if(thirdGood == true){
      checkFourthCorrect(input)
    } else {
      if(code[2] == input){
        thirdGood = true;
      } else {
        console.log("WRONG")
      }
    }
  }


  function checkFourthCorrect(input){
    if(fourthGood == true){
      checkFifthCorrect(input)
    } else {
      if(code[3] == input){
        fourthGood = true;
      } else {
        console.log("WRONG")
      }
    }
  }


  function checkFifthCorrect(input){
    if(code[4] == input){
      removeGate()
    } else {
      console.log("WRONG")
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
