$("html").on("click", "button", function(evt) {
    var btn = $(evt.currentTarget);
    var x = evt.pageX - btn.offset().left;
    var y = evt.pageY - btn.offset().top;
    var currentRipple = $("<ripple/>");
    
    currentRipple.appendTo(btn).css({
      left: x,
      top: y
    });
    setTimeout(()=> {currentRipple.remove()},1000);
});