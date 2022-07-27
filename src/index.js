import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
// import LitterInfo from "./poop-station";

$(document).ready(function(){
  
  // var settings = {
  //   "url": "https://litterbot.api.theemm.com/get_info",
  //   "method": "GET",
  //   "timeout": 0,
  //   "headers": {
  //     "X-API-Key": "0XqYjqekJL60tVjNWbkvG9PXgcxjtEMpxWeLQ3ba"
  //   },
  // };
  
  // $.ajax(settings).done(function (response) {
  //   alert(response);
  // });

  $('#get-info').click(function() {
    const myArr = JSON.parse(getInfo());
    alert(myArr.name);
    document.getElementById("show-name").innerHTML = "Name of the toilet: " + myArr.name;
    document.getElementById("show-serial").innerHTML = "Serial number: " + myArr.serial;
    document.getElementById("show-count").innerHTML = "How many times cats did their business: " + myArr.cycle_count;
    document.getElementById("show-drawer").innerHTML = "Is toilet needs to get clean: " + myArr.is_waste_drawer_full;
    document.getElementById("show-level").innerHTML = "Drawer level: " + myArr.waste_drawer_level;
  });

  // $('#clean').click(function() {
  //   const myArr = JSON.parse(getInfo());
  // });

  function getInfo()  {
    var response =  `{
    "name": "Kakahina Station",
    "serial": "LR3CI451198",
    "cycle_capacity": 33,
    "cycle_count": 9,
    "cycles_after_drawer_full": 0,
    "is_waste_drawer_full": false,
    "waste_drawer_level": 27.3
  }`;
    return response;
  }
});





