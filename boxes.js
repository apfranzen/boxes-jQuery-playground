$( document ).ready(function() {
  console.log( "ready!" );
    //1

    $('#secretBox').css("background-color", "white");
    $('#secretBox').append( "<h1>secret box!</h1>")

    //2
    $('#row1 > div').replaceWith("<div class=" + "box boxType3" + "></div>");

    //3
    $("#row4:last-child").css("display", "none");

    //4
    $(".boxType1").css("background-color", "white");

//Exercise 3 - Events
    //1
    $("#container").on("click", function(e) {
      console.log(e.pageX + ' , ' + e.pageY);
    });

    //2
    $(".boxType1").attr("href", "www.galvanize.com")



});
