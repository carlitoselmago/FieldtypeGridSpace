$(document).ready(function() {
  $('.tablecellsselection').tableCellsSelection();

  $( "body" ).on("mouseup",".tablecellsselection",function() {
    //var selectedCells = $('.tablecellsselection').tableCellsSelection('selectedCells');
    var selectedText="";
    $(".tablecellsselection .tcs-selected").each(function(este) {
      selectedText+=$(this).index()+',';
    });
    selectedText=selectedText.substring(0,selectedText.length - 1);
    console.log(selectedText);
    selectedText="ABCD";
    $(".gridspaceval").val(selectedText);
  });




});
