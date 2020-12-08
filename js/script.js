var x = 0;

$(document).ready(function(){
    $('input[name="switcher"]').click(function(){
        if($(this).prop("checked") == true){
            $("body").css("background-color", "darkgray");
            $("body").css("color", "rgb(225, 225, 225)");
            $(".first-column-main").css("background-color", "rgb(80, 80, 80)");
            $("h3").css("background-color", "rgb(50, 50, 50)");
            $("h2").css("background-color", "black");
            rgb(192, 25, 25)
        }
        else if($(this).prop("checked") == false){
            $("body").css("background-color", "white");
            $("body").css("color", "black");
            $(".first-column-main").css("background-color", "rgb(73, 0, 0)");
            $("h3").css("background-color", "rgb(192, 25, 25)");
            $("h2").css("background-color",  "rgba(241, 0, 0, 0.719)");
        }
    });
    $('.cv_image').on('click', function() {
        $('.switchpos').css("visibility","hidden");
        $('#overlay')
          .css({backgroundImage: `url(${this.src})`})
          .addClass('open')
          .one('click', function() { $(this).removeClass('open');
          $('.switchpos').css("visibility","visible"); });
      });
    $('.arrow-down').on('click', function(){      
        if(x == 0){
            
            $("#down").css("visibility","visible"); 
            x=1;
        }
        else if(x == 1){
            
            $("#down").css("visibility","hidden");
            x=0;
        }
    });
});
