$(function(){
  $("body").bind("keydown", function (event) {
    let pos = $("#controlled").position()
    switch(event.keyCode){
        case 37:
           $("#controlled").css({left: pos.left-100,top:pos.top});
        break;

        case 38:
           $("#controlled").css({left: pos.left, top:pos.top-100});
        break;

        case 39:
           $("#controlled").css({left: pos.left+100,top:pos.top});
        break;

        case 40:
           $("#controlled").css({left: pos.left,top:pos.top+100});
        break;
      }
  });
});
