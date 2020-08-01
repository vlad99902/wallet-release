$("button.bordered-btn").mousedown(function(){
  $(this).addClass("pressed");
});

$("button.bordered-btn").mouseup(function(){
  $(this).removeClass("pressed");
});



$("button.bordered-btn").on("tap",function(){
  $(this).removeClass("pressed");
});

$("button.bordered-btn").mouseout(function(){
  $(this).removeClass("pressed");
});