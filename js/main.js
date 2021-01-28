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
  let elementId = "";
  let numpadCode = "";
  let elementCode = ["fire", "water", "earth", "air"];
  const elementDoor = document.getElementById("js--elementDoor");
  let elementNumbers = document.getElementsByClassName("js--elementNumber");
  let numpadNumbers = document.getElementsByClassName("js--numpadNumber");
  let numpadAnswers = document.getElementsByClassName("js--numpadAnswer");
  let keys = document.getElementsByClassName("js--key");

  let numpadNumber1 = document.getElementById("js--numpadNumber1");
  let numpadNumber2 = document.getElementById("js--numpadNumber2");
  let numpadNumber3 = document.getElementById("js--numpadNumber3");
  let numpadNumber4 = document.getElementById("js--numpadNumber4");
  let numpadNumber5 = document.getElementById("js--numpadNumber5");
  let numpadNumber6 = document.getElementById("js--numpadNumber6");
  let numpadNumber7 = document.getElementById("js--numpadNumber7");
  let numpadNumber8 = document.getElementById("js--numpadNumber8");
  let numpadNumber9 = document.getElementById("js--numpadNumber9");
  let numpadNumber0 = document.getElementById("js--numpadNumber0");

  let elementNumber1 = document.getElementById("js--elementNumber1");
  let elementNumber2 = document.getElementById("js--elementNumber2");
  let elementNumber3 = document.getElementById("js--elementNumber3");
  let elementNumber4 = document.getElementById("js--elementNumber4");
  let elementNumber5 = document.getElementById("js--elementNumber5");
  let elementNumber6 = document.getElementById("js--elementNumber6");
  let elementNumber7 = document.getElementById("js--elementNumber7");
  let elementNumber8 = document.getElementById("js--elementNumber8");
  let elementNumber9 = document.getElementById("js--elementNumber9");
  let elementNumber0 = document.getElementById("js--elementNumber0");



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
      function addListeners() {
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


            pickups[i].addEventListener('click', function(evt){
              if (hold == null) {
                elementId = this.id;
                switch(elementId) {
                  case "js--fire":
                    camera.innerHTML += '<a-entity id="js--hold" obj-model="obj: #fire-obj; mtl: #fire-mtl;" position="0.5 -0.2 -0.5" scale="0.1 0.1 0.1"></a-entity>'
                    hold = "fire";
                    this.remove();
                    break;
                  case "js--water":
                    camera.innerHTML += '<a-entity id="js--hold" obj-model="obj: #water-obj; mtl: #water-mtl;" position="0.5 -0.2 -0.5" scale="0.1 0.1 0.1"></a-entity>'
                    hold = "water";
                    this.remove();
                    break;
                  case "js--earth":
                    camera.innerHTML += '<a-entity id="js--hold" obj-model="obj: #earth-obj; mtl: #earth-mtl;" position="0.5 -0.2 -0.5" scale="0.1 0.1 0.1"></a-entity>'
                    hold = "earth";
                    this.remove();
                    break;
                  case "js--air":
                    camera.innerHTML += '<a-entity id="js--hold" obj-model="obj: #air-obj; mtl: #air-mtl;" position="0.5 -0.2 -0.5" scale="0.1 0.1 0.1"></a-entity>'
                    hold = "air";
                    this.remove();
                    break;
                }
              }
            });
          }
        }


      addListeners();

      /*NEERZETTEN*/
      for (let i = 0; i < placeholders.length; i++) {
        placeholders[i].addEventListener('click', function(evt){
          console.log(i);
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
            case "fire":
              fire = document.createElement('a-entity');
              fire.setAttribute("id", "js--fire");
              fire.setAttribute("class", "js--interact js--pickup");
              fire.setAttribute("obj-model", "obj: #fire-obj; mtl: #fire-mtl;");
              fire.setAttribute("position", {x: this.getAttribute('position').x, y: this.getAttribute('position').y, z: this.getAttribute('position').z});
              fire.setAttribute("scale", "0.1 0.1 0.1");
              scene.appendChild(fire);
              document.getElementById("js--hold").remove();
              setElement(i, "fire");
              hold = null;
              addListeners();
              checkElementCode(elementCode);
              break;
            case "water":
              water = document.createElement('a-entity');
              water.setAttribute("id", "js--water");
              water.setAttribute("class", "js--interact js--pickup");
              water.setAttribute("obj-model", "obj: #water-obj; mtl: #water-mtl;");
              water.setAttribute("position", {x: this.getAttribute('position').x, y: this.getAttribute('position').y, z: this.getAttribute('position').z});
              water.setAttribute("scale", "0.1 0.1 0.1");
              scene.appendChild(water);
              document.getElementById("js--hold").remove();
              setElement(i, "water");
              hold = null;
              addListeners();
              checkElementCode(elementCode);
              break;
            case "earth":
              earth = document.createElement('a-entity');
              earth.setAttribute("id", "js--earth");
              earth.setAttribute("class", "js--interact js--pickup");
              earth.setAttribute("obj-model", "obj: #earth-obj; mtl: #earth-mtl;");
              earth.setAttribute("position", {x: this.getAttribute('position').x, y: this.getAttribute('position').y, z: this.getAttribute('position').z});
              earth.setAttribute("scale", "0.1 0.1 0.1");
              scene.appendChild(earth);
              document.getElementById("js--hold").remove();
              setElement(i, "earth");
              hold = null;
              addListeners();
              checkElementCode(elementCode);
              break;
            case "air":
              air = document.createElement('a-entity');
              air.setAttribute("id", "js--air");
              air.setAttribute("class", "js--interact js--pickup");
              air.setAttribute("obj-model", "obj: #air-obj; mtl: #air-mtl;");
              air.setAttribute("position", {x: this.getAttribute('position').x, y: this.getAttribute('position').y, z: this.getAttribute('position').z});
              air.setAttribute("scale", "0.1 0.1 0.1");
              scene.appendChild(air);
              document.getElementById("js--hold").remove();
              setElement(i, "air");
              hold = null;
              addListeners();
              checkElementCode(elementCode);
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
          checkGetallen("1");
          break;
        case toetsen[1]:
          checkGetallen("2");
          break;
        case toetsen[2]:
          checkGetallen("3");
          break;
        case toetsen[3]:
          checkGetallen("4");
          break;
        case toetsen[4]:
          checkGetallen("5");
          break;
        case toetsen[5]:
          checkGetallen("6");
          break;
        case toetsen[6]:
          checkGetallen("7");
          break;
        case toetsen[7]:
          checkGetallen("8");
          break;
        case toetsen[8]:
          checkGetallen("9");
          break;
        case toetsen[9]:
          checkGetallen("0");
          break;
        default:
      }
    });
  }


  /*CHECKED OF CODE KLOPT*/
  function checkGetallen(input){
      console.log("cunt");
      if(code[plekInput] == input){
        plekInput = plekInput + 1;
        console.log("goed");
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

/*=============================CODE TERESA====================================*/

  /*input elementen*/
  function setElement(place, element) {
    switch (place) {
      case 2:
        elementCode[0] = element;
        console.log(elementCode);
        break;
      case 3:
        elementCode[1] = element;
        console.log(elementCode);
        break;
      case 4:
        elementCode[2] = element;
        console.log(elementCode);
        break;
      case 5:
        elementCode[3] = element;
        console.log(elementCode);
        break;
      default:
    }
  }

  /*input code*/
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function(evt){
      switch (i) {
        case 0:
          numpadCode += "1";
          hideNumpadNumbers();
          numpadNumber1.setAttribute("visible", "true");
          break;
        case 1:
          numpadCode += "2";
          hideNumpadNumbers();
          numpadNumber2.setAttribute("visible", "true");
          break;
        case 2:
          numpadCode += "3";
          hideNumpadNumbers();
          numpadNumber3.setAttribute("visible", "true");
          break;
        case 3:
          numpadCode += "4";
          hideNumpadNumbers();
          numpadNumber4.setAttribute("visible", "true");
          break;
        case 4:
          numpadCode += "5";
          hideNumpadNumbers();
          numpadNumber5.setAttribute("visible", "true");
          break;
        case 5:
          numpadCode += "6";
          hideNumpadNumbers();
          numpadNumber6.setAttribute("visible", "true");
          break;
        case 6:
          numpadCode += "7";
          hideNumpadNumbers();
          numpadNumber7.setAttribute("visible", "true");
          break;
        case 7:
          numpadCode += "8";
          hideNumpadNumbers();
          numpadNumber8.setAttribute("visible", "true");
          break;
        case 8:
          numpadCode += "9";
          hideNumpadNumbers();
          numpadNumber9.setAttribute("visible", "true");
          break;
        case 9:
          numpadCode += "0";
          hideNumpadNumbers();
          numpadNumber0.setAttribute("visible", "true");
          break;
        case 10:
          numpadCode = "";
          hideNumpadNumbers();
          break;
        case 11:
          checkCode(numpadCode);
          break;
      }
    });
  }

  /*check element code*/
  function checkElementCode(elementCode) {
    if(elementCode[0] == "water" &&
    elementCode[1] == "earth" &&
    elementCode[2] == "fire" &&
    elementCode[3] == "air") {
      elementNumber1.setAttribute("visible", "true");
    }else if(elementCode[0] == "air" &&
    elementCode[1] == "water" &&
    elementCode[2] == "fire" &&
    elementCode[3] == "earth"){
      elementNumber2.setAttribute("visible", "true");
    }else if(elementCode[0] == "earth" &&
    elementCode[1] == "water" &&
    elementCode[2] == "air" &&
    elementCode[3] == "fire"){
      elementNumber3.setAttribute("visible", "true");
    }else if(elementCode[0] == "earth" &&
    elementCode[1] == "fire" &&
    elementCode[2] == "water" &&
    elementCode[3] == "air"){
      elementNumber4.setAttribute("visible", "true");
    }else if(elementCode[0] == "fire" &&
    elementCode[1] == "earth" &&
    elementCode[2] == "air" &&
    elementCode[3] == "water"){
      elementNumber5.setAttribute("visible", "true");
    }else if(elementCode[0] == "air" &&
    elementCode[1] == "earth" &&
    elementCode[2] == "water" &&
    elementCode[3] == "fire"){
      elementNumber6.setAttribute("visible", "true");
    }else if(elementCode[0] == "water" &&
    elementCode[1] == "fire" &&
    elementCode[2] == "air" &&
    elementCode[3] == "earth"){
      elementNumber7.setAttribute("visible", "true");
    }else if(elementCode[0] == "air" &&
    elementCode[1] == "fire" &&
    elementCode[2] == "earth" &&
    elementCode[3] == "water"){
      elementNumber8.setAttribute("visible", "true");
    }else if(elementCode[0] == "fire" &&
    elementCode[1] == "air" &&
    elementCode[2] == "water" &&
    elementCode[3] == "earth"){
      elementNumber9.setAttribute("visible", "true");
    }else if(elementCode[0] == "earth" &&
    elementCode[1] == "air" &&
    elementCode[2] == "water" &&
    elementCode[3] == "fire"){
      elementNumber0.setAttribute("visible", "true");
    } else {
      for(i = 0; i < elementNumbers.length; i++) {
        elementNumbers[i].setAttribute("visible", "false");
      }
      console.log("fout");
    }

  }

  /*check code*/
  function checkCode(code) {
    if(code == "5976") {
      hideNumpadNumbers();
      elementDoor.setAttribute("visible", "true");
      for(i=0; i < numpadAnswers.length; i++) {
        numpadAnswers[i].setAttribute("visible", "true");
      }
    }else {
      hideNumpadNumbers();
      numpadCode = "";
    }
  }

  /*hide all numpadnumbers*/
  function hideNumpadNumbers() {
    for(i = 0; i < numpadNumbers.length; i++) {
      numpadNumbers[i].setAttribute("visible", "false");
    }
  }


}
