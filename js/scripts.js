$(document).ready(function(){

  $(".formOne").submit(function(event){
    var heightInput = parseInt($("input#height").val());
    var hairColorInput = $("select#hair-color").val();

    if (hairColorInput === 'black' && heightInput > 60) {
      $('.moth1').show().append();
    }else if (heightInput < 60 && hairColorInput === 'black'){
      $('.moth2').show().append();
    }else {
      alert("NO MOTH FOR YOU");
    }


event.preventDefault();
  });


});
