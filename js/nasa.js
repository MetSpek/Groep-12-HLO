window.onload = () =>{
  //APOD source to text
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
  const apod_url = ""
  fetch(proxyurl + BASE_URL)
  .then(response => response.json())
  .then(data => apod_url = JSON.stringify(data.hdurl)));


  console.log("Test");
  console.log(apod_url);

  const nasa_screen_1 = document.getElementById("js--nasa-screen-1");
  const nasa_screen_2 = document.getElementById("js--nasa-screen-2");

  function nasa_pc_startup(){
    nasa_screen_1.setAttribute("src","#nasa_bg");
    nasa_screen_2.setAttribute("src","#nasa_bg");
  };

  function nasa_pc_reset(){
    nasa_screen_1.setAttribute("src","#nasa_bg_q");
    nasa_screen_2.setAttribute("src","#nasa_bg");
  };


  function newNasa(){

  };
  // Startup PC


  // Reset password on lock
}
