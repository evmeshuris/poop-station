import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";

$(document).ready(function() {
  $("#get-info").click(function() {
    getInfo();
  });

  function getInfo() {
    var settings = {
      url: "https://litterbot.api.theemm.com/get_info",
      method: "GET",
      timeout: 0,
      headers: {
        "X-API-Key": process.env.API_KEY,
      },
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
      updateUI(response);
    });
  }
  
  function updateUI(response) {
    document.getElementById("show-name").innerHTML = "Toilet name: " + response.name;
    document.getElementById("show-serial").innerHTML = "Serial number: " + response.serial;
    document.getElementById("show-count").innerHTML = "How many times did the cats do their business: " + response.cycle_count;
    document.getElementById("show-drawer").innerHTML = "Is the drawel full: " + response.is_waste_drawer_full;
    document.getElementById("show-capacity").innerHTML = "Capacity: " + response.cycle_capacity;
    document.getElementById("show-level").innerHTML = "Drawer level: " + response.waste_drawer_level + "%";
  }

  $("#clean").click(function() {
    var settings = {
      url: "https://litterbot.api.theemm.com/start_cleaning",
      method: "GET",
      timeout: 0,
      headers: {
        "X-API-Key": process.env.API_KEY,
      },
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
    });
  });
  
});
