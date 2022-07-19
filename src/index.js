import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
import PoopInfo from "./poop-station";

$(document).ready(function () {
  $("#rate").click(function (e) {
    e.preventDefault();
    const amount = $("#amount").val();
    PoopInfo.getInfo(amount).then(function (newResponse) {
      showExchangeAmount(newResponse, amount);
    });
  });
});

function showExchangeAmount(response, amount) {
  if (response.result === "success") {
    $("#showAmount").text(
      `How many time cats did their business ${amount} ${response.target_code}`
    );
  } else {
    $(".showErrors").text(`${PoopInfo.error}`);
  }
}
