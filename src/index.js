import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
import LitterInfo from "./poop-station.js";

$(document).ready(function () {
  $("#showCount").click(function (e) {
    e.preventDefault();
    const cycle_count = $("#showCount").val();
    LitterInfo.getInfo(cycle_count).then(function (newResponse) {
      showCount(newResponse, cycle_count);
    });
  });
});

function showCount(cycle_count) {
  if (response.result === "success") {
    $("#showCount").text(
      `How many time cats did their business ${cycle_count}`
    );
  } else {
    $(".showErrors").text(`${LitterInfo.error}`);
  }
}
