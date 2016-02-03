window.onload = function () {
  $(".para1,.para2,.para3").hide(); //hides the paragraph content on load.

  $(document).ready(function(){

    // revealing paragraph text when respective 'Read More' is clicked
    $("#more").click(function(){
      $(".para1").show().slideDown("slow");
      $("#more").hide();
      return false;
    });
    $("#more2").click(function(){
      $(".para2").show().slideDown("slow");
      $("#more2").hide();
      return false;
    });
    $("#more3").click(function(){
      $(".para3").show().slideDown("slow");
      $("#more3").hide();
      return false;
    });

    //hiding paragraph text when respective 'Read Less' link is clicked
    $("#less").click(function(){
      $(".para1").hide().slideUp("slow");
      $("#more").show();
      return false;
    });
    $("#less2").click(function(){
      $(".para2").hide().slideUp("slow");
      $("#more2").show();
      return false;
    });
    $(".para3").click(function(){
      $(".para3").hide().slideUp("slow");
      $("#more3").show();
      return false;
    });

    //when Signup button is clicked
    var clickSignup = function(){
      event.preventDefault();
      alert("Sorry, we're not ready for signups yet");
    }
    $("#signup").click (clickSignup);


  });
}
