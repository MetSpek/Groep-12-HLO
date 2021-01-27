// Get NASA picture of the day
AFRAME.registerComponent("reloader-nasa", {
  init: function() {
    const nasa_imgs = document.querySelectorAll("[nasa-picture]");
    const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    this.newNasa= function(){
      for(let i = 0; i < nasa_imgs.length; i++){
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => console.log(data.hdurl));

      }
    }
    this.el.addEventListener("mouseenter",this.newNasa);
  },
  update: function() {
    this.newNasa();
    console.log("Ik ben geupdate");
  },
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});
