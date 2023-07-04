//Modal Filter
$(document).ready(function () {
  $("#filterButton").click(function () {
    var expanded = $(this).attr("aria-expanded");
    if (expanded === "false") {
      $(this).attr("aria-expanded", "true");
      // $("#modal").show();
      $("#modal").css("display", "flex");
    } else {
      $(this).attr("aria-expanded", "false");
      $("#modal").hide();
    }
  });
});
