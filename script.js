
  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = $("#today");
var saveButt = $(".saveButt");
var timeFrame = $(".time-frame");


$(function () {
  saveButt.on("click", function(){
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, $(this).siblings("textarea").val());
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  
  timeFrame.each(function(){
    var id = $(this).attr("id");
    
    // changes string to number
    var frameHour = parseInt(id.split("-")[1]);
    var currentHour = parseInt(dayjs().format("H"));

    if (frameHour === currentHour){
      $(this).addClass("present");
    }else if(frameHour > currentHour){
      $(this).addClass("future");
    }else {
      $(this).addClass("past");
    }
    
    $(this).find("textarea").val(localStorage.getItem(id));

  });


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  //
  // TODO: Add code to display the current date in the header of the page.

    if(dayjs().format("D") === 1){
      today.text(dayjs().format("dddd, MMMM D[st]"));
    }else if(dayjs().format("D") === 2){
      today.text(dayjs().format("dddd, MMMM D[nd]"));
    }else if(dayjs().format("D") === 3){
      today.text(dayjs().format("dddd, MMMM D[rd]"));
    }else{
      today.text(dayjs().format("dddd, MMMM D[th]"));
    }
}); 