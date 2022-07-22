// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
import LitterInfo from "./poop-station";

$(document).ready(function () {
  $("#rate").click(function (e) {
    e.preventDefault();
    const amount = $("#cycle_count").val();
    LitterInfo.getInfo(cycle_count).then(function (newResponse) {
      showCount(newResponse, cycle_count);
    });
  });
});

function showCount(response, cycle_count) {
  if (response.result === "success") {
    $("#showAmount").text(
      `How many time cats did their business ${cycle_count} ${response.target_code}`
    );
  } else {
    $(".showErrors").text(`${LitterInfo.error}`);
  }
}
