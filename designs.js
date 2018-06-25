// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {
  for (var r = 1; width >= r; r++) {
    $("table").append("<tr></tr>");
    for (var c = 1; height >= c; c++) {
      $("table tr:last").append("<td></td>");
      $("td").addClass("colorClass");
    }
  }
  return $("table");
}



let height, width, color;

$(document).ready(function() {
  $("#sizePicker").submit(function(event) {
    $("table tr").remove();
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();
    color = $("#colorPicker").val();
    $('#colorPicker').change(function(){
      color = $(this).val()
    })
    makeGrid(height, width);
    $(".colorClass").click(function(event) {
      $(event.target).css("background-color", color);
      $('.colorClass').dblclick(function(event){
        $(event.target).css('background-color','');
      })
    });
  });
});