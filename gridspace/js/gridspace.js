$(document).ready(function() {

  //init
  var savedValue = $(".gridspaceval").val();

  if (typeof savedValue  !== "undefined") {
    var gridList = savedValue.split(",");
    gridList.forEach(function(index) {
      $(".tablecellsselection td:eq(" + index + ")").addClass("tcs-selected");
    });

    $('.tablecellsselection').tableCellsSelection();
  }
  $("body").on("mouseup", ".tablecellsselection", function() {
    //var selectedCells = $('.tablecellsselection').tableCellsSelection('selectedCells');
    var selectedText = "";
    $(".tablecellsselection .tcs-selected").each(function(este) {
      selectedText += $(this).index() + ',';
    });
    selectedText = selectedText.substring(0, selectedText.length - 1);
    console.log(selectedText);

    $(".gridspaceval").val(selectedText);
  });




});
